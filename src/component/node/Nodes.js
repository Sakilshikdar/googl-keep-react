import styled from '@emotion/styled';
import { Box, Grid } from '@mui/material';
import React, { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import EmptyNotes from './EmptyNotes';
import From from './From';
import Note from './Note';

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins?.toolbar
}));

const Nodes = () => {
  const { notes } = useContext(DataContext)
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Box sx={{ p: 3, width: '100%;' }}>
        <DrawerHeader />
        <From />
        {notes.length > 0 ?
          <Grid container>
            {
              notes.map(note =>
                <Grid item>
                  <Note note={note} />
                </Grid>
              )
            }
          </Grid>
          : <EmptyNotes />
        }
      </Box>
    </Box>
  )
}

export default Nodes;