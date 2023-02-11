'use client';

import SearchResultsModal from './SearchResultModal';
import styles from './search.module.css';
import React, { useState } from 'react';
import Image from 'next/image';

export default function SearchResultsCell(props) {
    const [modalOpen, setModalOpen] = useState(false);
    const handleModalClose = () => setModalOpen(false);

    return (
        <>
            <div
                className={styles.cell}
                onClick={() => {
                    setModalOpen(true);
                }}
            >
                <Image
                    style={{ margin: 'auto 0', marginRight: '25px' }}
                    height={props.image.height}
                    width={props.image.width}
                    src={props.image.url}
                    alt="Album Cover"
                />
                <div style={{ display: 'flex', margin: 'auto 0' }}>
                    <h2>{props.name}</h2>
                    <p style={{ margin: 'auto 0', marginLeft: '10px' }}>
                        by: {props.artist}
                    </p>
                </div>
            </div>
            <SearchResultsModal
                {...props}
                modalOpen={modalOpen}
                modalClose={handleModalClose}
            />
        </>
    );
}
