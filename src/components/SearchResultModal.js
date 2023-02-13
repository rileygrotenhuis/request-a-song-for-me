'use client';

import { Modal, Box, Typography, Button } from '@mui/material';

async function requestNewSong(newSong) {
    const res = await fetch('/api/request', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
        },
        body: JSON.stringify({
            name: newSong.name,
            artist: newSong.artist,
            image_url: newSong.image.url,
            image_height: newSong.image.height,
            image_width: newSong.image.width,
            preview_url: newSong.preview_url,
            url: newSong.url,
        }),
    });

    return res.ok;
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function SearchResultsModal(props) {
    return (
        <Modal
            open={props.modalOpen}
            onClose={props.modalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    textAlign="center"
                >
                    Request {props.name} by {props.artist}?
                </Typography>
                <div
                    style={{
                        width: 'fit-content',
                        display: 'flex',
                        margin: 'auto',
                        gap: '10px',
                        marginTop: '5px',
                    }}
                >
                    <Button variant="outlined" onClick={props.modalClose}>
                        No
                    </Button>
                    <Button
                        variant="contained"
                        onClick={async () => {
                            const newRequest = await requestNewSong(props);
                            alert(
                                newRequest
                                    ? `Thank you for requesting ${props.name} by ${props.artist}!`
                                    : 'Something went wrong with your request, please try again!'
                            );
                            props.modalClose();
                        }}
                    >
                        Yes
                    </Button>
                </div>
            </Box>
        </Modal>
    );
}
