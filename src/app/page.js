import { use } from 'react';
import SearchContainer from '@/components/SearchContainer';

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

export default function Page() {
    const userSpotifyAccessToken = use(getUserSpotifyAccessToken());

    return (
        <>
            <SearchContainer
                accessToken={userSpotifyAccessToken.access_token}
            />
        </>
    );
}
