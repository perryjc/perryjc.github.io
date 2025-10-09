// /api/probe.js
export default async function handler(request, response) {
    
    // Get detailed IP info from a service
    const ipRes = await fetch('https://ip-api.com/json');
    const ipData = await ipRes.json();

    const serverData = {
        'Timestamp': new Date().toUTCString(),
        'RequestMethod': request.method,
        'RequestURL': request.url,
        'Source IP (Vercel)': request.headers['x-forwarded-for']?.split(',').shift() || 'N/A',
        'IP-API Data': ipData,
        'HTTP_Headers': request.headers,
    };

    // Return the data as JSON
    response.status(200).json(serverData);
}