'use client';

import { useRecoilState } from 'recoil';
import { spotifySearchResults } from '@/atoms/spotifySearchResults';

import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

export default function SearchContainer(props) {
    const [searchResults, setSearchResults] =
        useRecoilState(spotifySearchResults);

    return (
        <>
            <SearchForm {...props} />
            <SearchResults />
        </>
    );
}
