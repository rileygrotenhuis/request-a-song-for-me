'use client';

import { Modal, Box, Typography, Button } from '@mui/material';

async function addSongToSpotifyQueue(newSong) {
    return 'testing';
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

export default function ResultsModal(props) {
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
                    Add {props.name} by {props.artist} to your queue?
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
                            const addToQueue = await addSongToSpotifyQueue(
                                props
                            );
                            alert(addToQueue);
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
