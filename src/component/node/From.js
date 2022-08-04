import { Box, ClickAwayListener, styled, TextField } from '@mui/material';
import React, { useContext, useRef, useState } from 'react';
import { DataContext } from '../context/DataProvider';
import { v4 as uuid } from 'uuid'

const Container = styled(Box)`
display: flex;
flex-direction: column;
box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%); 
padding: 10px 15px;
border-radius: 8px;
border-color: #e0e0e0;
margin: auto;
min-height: 30px
`

const note = {
    id: '',
    heading: '',
    text: ''
}

const From = () => {
    const [showTextField, setShowTextField] = useState(false);
    const [addNote, setAddNote] = useState({ ...note, id: uuid() })

    const { setNotes } = useContext(DataContext);

    const containerRef = useRef();

    const onTextAreaClick = () => {
        setShowTextField(true);
        containerRef.current.style.minHeight = '70px';
    }

    const handleClickAway = () => {
        setShowTextField(false);
        containerRef.current.style.minHeight = '30px';
        setAddNote({ ...note, id: uuid() })
        if (addNote.heading || addNote.text) {
            setNotes(prevArr => [addNote, ...prevArr])
        }
    }


    const onTextChange = (e) => {
        let changeNotes = { ...addNote, [e.target.name]: e.target.value }
        setAddNote(changeNotes);
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Container ref={containerRef} className='mt-20 lg:w-[600px]'>
                {
                    showTextField &&
                    <TextField
                        className='mb-3'
                        placeholder='Title'
                        variant='standard'
                        inputProps={{ disableunderline: "true" }}
                        onChange={(e => onTextChange(e))}
                        name='heading'
                        value={addNote.heading}
                    />
                }
                <TextField
                    placeholder='Take a note...'
                    multiline
                    maxRows={Infinity}
                    variant='standard'
                    inputProps={{ disableunderline: "true " }}
                    onClick={onTextAreaClick}
                    onChange={(e => onTextChange(e))}
                    name='text'
                    value={addNote.text}
                />
            </Container>
        </ClickAwayListener>
    );
};

export default From;