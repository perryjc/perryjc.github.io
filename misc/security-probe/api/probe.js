// /api/probe.js

export default async function handler(request, response) {
    
    // This part remains the same: gather the initial data.
    const ipRes = await fetch('https://ipinfo.io/json'); // Using the working API
    const ipData = await ipRes.json();

    const serverData = {
        'Timestamp': new Date().toUTCString(),
        'RequestMethod': request.method,
        'RequestURL': request.url,
        'Source IP (Vercel)': request.headers['x-forwarded-for']?.split(',').shift() || 'N/A',
        'IP-API Data': ipData,
        'HTTP_Headers': request.headers,
    };

    // ========================================================================
    // --- AWS METADATA PROBE START ---
    // This is the new block you are adding.
    // We will attempt to contact the AWS metadata service, which is only
    // accessible from inside an AWS EC2 instance. This is the ultimate test
    // for a cloud-based SSRF vulnerability.
    // ========================================================================
    try {
        // We use a short timeout (e.g., 2 seconds) because if the server is NOT on AWS,
        // this request will hang until it times out. A short timeout prevents
        // our entire function from failing.
        const metadataResponse = await fetch('http://169.254.169.254/latest/meta-data/', { 
            signal: AbortSignal.timeout(2000) 
        });
        
        const metadataText = await metadataResponse.text();
        
        // If the fetch is successful, we add the positive result to our data object.
        serverData['AWS_METADATA_PROBE'] = {
            'accessible': true,
            'result': metadataText.split('\n') // Split the response into a list for clean viewing
        };

    } catch (error) {
        // If the fetch fails (likely due to a timeout), it means the service is not accessible.
        serverData['AWS_METADATA_PROBE'] = {
            'accessible': false,
            'error': error.message
        };
    }
    // --- AWS METADATA PROBE END ---


    // This is the final line, which sends ALL collected data (including the probe results).
    response.status(200).json(serverData);
}