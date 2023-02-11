'use client';

import { useRecoilState } from 'recoil';
import { spotifySearchResults } from '@/atoms/spotifySearchResults';

import SearchForm from './SearchForm';

export default function SearchContainer(props) {
    const [searchResults, setSearchResults] =
        useRecoilState(spotifySearchResults);

    return (
        <>
            <SearchForm {...props} />
            {JSON.stringify(searchResults)}
        </>
    );
}
