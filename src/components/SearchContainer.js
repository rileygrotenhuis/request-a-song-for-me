'use client';

import { Container } from '@mui/system';
import SearchForm from './SearchForm';
import SearchResultsList from './SearchResultsList';

export default function SearchContainer(props) {
    return (
        <Container>
            <SearchForm {...props} />
            <SearchResultsList />
        </Container>
    );
}
