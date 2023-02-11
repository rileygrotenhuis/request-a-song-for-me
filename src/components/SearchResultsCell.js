"use client";

import Image from 'next/image';
import { Button } from '@mui/material';

export default function SearchResultsCell(props) {
    return (
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
                    alert(props.url);
                }}
            >
                Request
            </Button>
        </div>
    );
}