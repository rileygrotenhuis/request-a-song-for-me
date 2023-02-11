'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@mui/material';
import SearchResultsModal from './SearchResultModal';

export default function SearchResultsCell(props) {
    const [modalOpen, setModalOpen] = useState(false);
    const handleModalClose = () => setModalOpen(false);

    return (
        <>
            <div style={{ display: 'flex' }}>
                <Image
                    height={props.image.height}
                    width={props.image.width}
                    src={props.image.url}
                    alt="Album Cover"
                />
                <h2>{props.name}</h2>
                <p>{props.artist}</p>
                <Button
                    variant="contained"
                    onClick={() => {
                        setModalOpen(true);
                    }}
                >
                    Request
                </Button>
            </div>
            <SearchResultsModal
                trackName={props.name}
                trackArtist={props.artist}
                trackUrl={props.url}
                modalOpen={modalOpen}
                modalClose={handleModalClose}
            />
        </>
    );
}
