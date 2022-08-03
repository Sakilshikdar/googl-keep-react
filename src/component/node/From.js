import { Box, styled, TextField } from '@mui/material';
import React from 'react';

const Container = styled(Box)`
display: flex;
flex-direction: column;
box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%); 
padding: 10px 15px;
border-radius: 8px;
border-color: #e0e0e0;
margin: auto;
`

const From = () => {
    return (
        <Container className='mt-20 lg:w-[600px]'>
            <TextField 
            className='mb-3'
            placeholder='Title'
            variant='standard'
            inputProps={{ disableUnderLine: true}}
            />
            <TextField
            placeholder='Take a note...'
            multiline
            maxRows={Infinity}
            variant='standard'
            inputProps={{ disableUnderLine: true}}
            />
        </Container>
    );
};

export default From;