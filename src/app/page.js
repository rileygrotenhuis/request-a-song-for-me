import SearchContainer from '@/components/SearchContainer';

export const revalidate = 60;

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

    const data = await res.json();

    return data;
}

export default async function Page() {
    const userSpotifyAccessToken = await getUserSpotifyAccessToken();

    return (
        <>
            <SearchContainer
                accessToken={userSpotifyAccessToken.access_token}
            />
        </>
    );
}
