import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import { Card, CardActions, CardContent, Typography } from '@mui/material'
import { UnarchiveOutlined as Unarchive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';

const StyleCard = styled(Card)`
    width: 240px;
    margin: 8px;
    box-shadow: none;
    border: 1px solid #e0e0e0;
    border-radius: 8px
`

const Archive = ({ archive }) => {
    console.log(archive)
    const { notes, setNotes, archiveNotes, setArchiveNotes, setDeletedNotes } = useContext(DataContext);

    const unArchiveNote = (archive) => {
        const updatedNotes = archiveNotes.filter(Note => Note.id !== archive.id);
        setArchiveNotes(updatedNotes);
        setNotes(prevArr => [archive, ...prevArr]);

    }

    const deleteNote = (archive) => {
        const updatedNotes = notes.filter(data => data.id !== archive.id);
        setArchiveNotes(updatedNotes);
        setDeletedNotes(prevArr => [archive, ...prevArr]);
    }

    return (
        <StyleCard>
            <CardContent>
                <Typography>{archive?.heading}</Typography>
                <Typography>{archive?.text}</Typography>
            </CardContent>
            <CardActions>
                <Archive
                    fontSize='small'
                    style={{ marginLeft: 'auto' }}
                    onClick={() => unArchiveNote(archive)}
                />
                <Delete
                    fontSize='small'
                    onClick={() => deleteNote(archive)}
                />
            </CardActions>
        </StyleCard>
    )
}

export default Archive;