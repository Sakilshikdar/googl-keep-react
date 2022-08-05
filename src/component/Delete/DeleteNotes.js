import styled from '@emotion/styled';
import { Box, Grid } from '@mui/material';
import React, { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import From from '../node/From';
import DeleteNote from './DeleteNote';

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins?.toolbar
}));

const DeleteNotes = () => {
  const { deletedNotes } = useContext(DataContext)
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Box sx={{ p: 3, width: '100%;' }}>
        <DrawerHeader />
          <Grid container>
            {
              deletedNotes.map(note =>
                <Grid item>
                  <DeleteNote note={note} />
                </Grid>
              )
            }
          </Grid>
      </Box>
    </Box>
  )
}

export default DeleteNotes;