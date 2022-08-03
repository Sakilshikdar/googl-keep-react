import { Box, ClickAwayListener, styled, TextField } from '@mui/material';
import React, { useContext, useRef, useState } from 'react';
import { DataContext } from '../context/DataProvider';

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

// const note={
//     id:'',
//     heading:'',
//     text:''
// }

const From = () => {
    const [showTextField, setShowTextField] = useState(false);

    const {notes, setNotes} = useContext(DataContext);

    const containerRef = useRef();
    
    const onTextAreaClick = () =>{
        setShowTextField(true);
        containerRef.current.style.minHeight= '70px';
    }

    const handleClickAway = () =>{
        setShowTextField(false);
        containerRef.current.style.minHeight= '30px';
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
                />
            }
            <TextField
                placeholder='Take a note...'
                multiline
                maxRows={Infinity}
                variant='standard'
                inputProps={{ disableunderline: "true "}}
                onClick={onTextAreaClick}
            />
        </Container>
        </ClickAwayListener>
    );
};

export default From;