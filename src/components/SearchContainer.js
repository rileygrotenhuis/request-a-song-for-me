'use client';

import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import SearchForm from './SearchForm';
import SearchResultsList from './SearchResultsList';

export default function SearchContainer(props) {
    return (
        <Container>
            <Typography
                variant="h4"
                textAlign="center"
                style={{ marginTop: '5%' }}
            >
                Request a Song for Me!
            </Typography>
            <SearchForm {...props} />
            <SearchResultsList />
        </Container>
    );
}
