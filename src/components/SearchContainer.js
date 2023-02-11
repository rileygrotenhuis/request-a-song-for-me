"use client";

import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

export default function SearchContainer(props) {
    return (
        <>
            <SearchForm {...props} />
            <SearchResults />
        </>
    );
}
