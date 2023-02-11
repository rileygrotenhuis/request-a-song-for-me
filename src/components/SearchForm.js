"use client";

import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { Button } from "@mui/material";

async function getSpotifySearchResults(accessToken, query) {
    const res = await fetch(`https://api.spotify.com/v1/search?type=track&q=${query}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await res.json();

    return data;
}

export default function SearchForm(props) {
    const [searchResults, setSearchResults] = useState({});

    return (
        <Formik
            initialValues={{
                searchQuery: ''
            }}
            onSubmit={async (values) => {
                const searchResults = await getSpotifySearchResults(props.accessToken, values.searchQuery);
            
                setSearchResults(searchResults);
            }}
        >
            <Form>
                <Field
                    type="text"
                    name="searchQuery"
                />
                <Button
                    variant="contained"
                    type="submit"
                >
                    Search
                </Button>
            </Form>
        </Formik>
    );
}