// /api/probe.js

export default async function handler(request, response) {
    // Get the target URL from a query parameter (e.g., /api/probe?target=http://example.com)
    const targetUrl = request.query.target;

    const serverData = {
        'Timestamp': new Date().toUTCString(),
        'RequestURL': request.url,
        'Source IP (Vercel)': request.headers['x-forwarded-for']?.split(',').shift() || 'N/A',
        'HTTP_Headers': request.headers,
    };

    // --- ACTIVE PROBE SECTION ---
    if (targetUrl) {
        serverData.ACTIVE_PROBE = {
            'target': targetUrl,
            'status': 'pending',
        };
        try {
            // Attempt to fetch the target URL with a 3-second timeout
            const probeResponse = await fetch(targetUrl, { 
                signal: AbortSignal.timeout(3000) 
            });

            // If successful, record the status and headers
            serverData.ACTIVE_PROBE.status = 'success';
            serverData.ACTIVE_PROBE.response_status_code = probeResponse.status;
            serverData.ACTIVE_PROBE.response_headers = Object.fromEntries(probeResponse.headers.entries());
            // Optional: Try to get the first 500 chars of the body
            // serverData.ACTIVE_PROBE.response_body_preview = (await probeResponse.text()).substring(0, 500);

        } catch (error) {
            // If it fails (e.g., timeout, connection refused), record the error
            serverData.ACTIVE_PROBE.status = 'failed';
            serverData.ACTIVE_PROBE.error = error.message;
        }
    }
    
    // Final response
    response.status(200).json(serverData);
}