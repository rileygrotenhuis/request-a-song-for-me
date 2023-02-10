async function getData() {
    const res = await fetch('https://accounts.spotify.com/api/token?grant_type=client_credentials', {
        method: 'POST',
        headers: {
            'Authorization': 'Basic MTIzNTNhY2IwMDE1NDNmY2E4YmYzM2ZhZTVmNTk4NDI6ZGViMDcxNzNhNmQxNDZhNjg0NjRhMDFlYTU2ZDBjNDY=',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function Page() {
    const data = await getData();
    const userSpotifyAccessToken = data.access_token;

    return (
        <>
            <h1>Testing</h1>
        </>
    );
}
