"use client";

import { Container } from '@mui/system';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

export default function SearchContainer(props) {
    return (
        <Container>
            <SearchForm {...props} />
            <SearchResults />
        </Container>
    );
}
