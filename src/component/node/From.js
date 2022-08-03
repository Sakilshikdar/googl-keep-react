import { Box, styled, TextField } from '@mui/material';
import React from 'react';

const Container = styled(Box)`
display: flex;
flex-direction: column;
`

const From = () => {
    return (
        <Container className='mt-20 lg:w-[600px]'>
            <TextField />
            <TextField />
      </Container>
    );
};

export default From;