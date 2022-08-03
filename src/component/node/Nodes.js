import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React from 'react';
import From from './From';

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins?.toolbar
}));

const Nodes = () => {
  return (
    <Box sx={{display: 'flex'}}>
        <Box component='main' sx = {{flexGrow: 1, p:3}}>
            <DrawerHeader />
            <From />
        </Box>
    </Box>
  )
}

export default Nodes;