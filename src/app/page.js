import SearchForm from "@/components/SearchForm";

async function getUserSpotifyAccessToken() {
    const res = await fetch(
        'https://accounts.spotify.com/api/token?grant_type=client_credentials',
        {
            method: 'POST',
            headers: {
                Authorization:
                    'Basic ' +
                    btoa(
                        process.env.SPOTIFY_CLIENT_ID +
                            ':' +
                            process.env.SPOTIFY_CLIENT_SECRET
                    ),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }
    );

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function Page() {
    const userSpotifyAccessToken = await getUserSpotifyAccessToken();

    return (
        <>
            <SearchForm accessToken={userSpotifyAccessToken.access_token} />
        </>
    );
}
