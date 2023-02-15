'use client';

import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import ResultsList from './ResultsList';

export default function ResultsContainer(props) {
    return (
        <Container>
            <Typography
                variant="h4"
                textAlign="center"
                style={{ marginTop: '5%' }}
            >
                All Requests:
            </Typography>
            <ResultsList {...props} />
        </Container>
    );
}
