import { useRecoilState } from 'recoil';
import { spotifySearchResults } from '@/atoms/spotifySearchResults';

import SearchResultsCell from './SearchResultsCell';

export default function SearchResultsList() {
    const [searchResults, setSearchResults] =
        useRecoilState(spotifySearchResults);

    return (
        <div>
            {searchResults?.tracks?.items ? (
                searchResults.tracks.items.map((item, index) => {
                    return (
                        <SearchResultsCell
                            key={index}
                            image={item.album.images[2]}
                            name={item.name}
                            artist={item.artists[0].name}
                            url={`spotify:track:${item.id}`}
                        />
                    );
                })
            ) : (
                <></>
            )}
        </div>
    );
}
