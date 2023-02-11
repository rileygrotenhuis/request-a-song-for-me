import { useRecoilState } from 'recoil';
import { spotifySearchResults } from '@/atoms/spotifySearchResults';

import Image from 'next/image';
import { Button } from '@mui/material';

export default function SearchResults() {
    const [searchResults, setSearchResults] =
        useRecoilState(spotifySearchResults);

    return (
        <div>
            {searchResults?.tracks?.items ? (
                searchResults.tracks.items.map((item, index) => {
                    return (
                        <div key={index} style={{ display: 'flex' }}>
                            <Image
                                height={item.album.images[2].height}
                                width={item.album.images[2].width}
                                src={item.album.images[2].url}
                                alt="Album Cover"
                            />
                            <h2>{item.name}</h2>
                            <p>{item.artists[0].name}</p>
                            <Button
                                variant="contained"
                                onClick={() => {
                                    alert(`spotify:track:${item.id}`);
                                }}
                            >
                                Request
                            </Button>
                        </div>
                    );
                })
            ) : (
                <></>
            )}
        </div>
    );
}
