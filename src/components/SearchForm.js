'use client';

import { spotifySearchResults } from '@/atoms/spotifySearchResults';
import { Button, TextField } from '@mui/material';
import styles from './search.module.css';
import { useRecoilState } from 'recoil';
import { useFormik } from 'formik';

async function getSpotifySearchResults(accessToken, query) {
    const res = await fetch(
        `https://api.spotify.com/v1/search?type=track&q=${query}`,
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        }
    );

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await res.json();

    return data;
}

export default function SearchForm(props) {
    const [searchResults, setSearchResults] =
        useRecoilState(spotifySearchResults);

    const formik = useFormik({
        initialValues: {
            searchQuery: '',
        },
        onSubmit: async (values) => {
            const searchResults = await getSpotifySearchResults(
                props.accessToken,
                values.searchQuery
            );

            setSearchResults(searchResults);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className={styles.form}>
            <TextField
                fullWidth
                name="searchQuery"
                label="Search..."
                value={formik.values.searchQuery}
                onChange={formik.handleChange}
            />
            <Button variant="contained" type="submit">
                Search
            </Button>
        </form>
    );
}
