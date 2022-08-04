import styled from '@emotion/styled';
import { Box, Grid } from '@mui/material';
import React, { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import From from './From';
import ArchiveNotes from './Archive'

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins?.toolbar
}));

const Archive = () => {
  const { archiveNotes } = useContext(DataContext)
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Box sx={{ p: 3, width: '100%;' }}>
        <DrawerHeader />
        <From />
          <Grid container>
            {
              archiveNotes.map(archive =>
                <Grid item>
                  <ArchiveNotes archive={archive} />
                </Grid>
              )
            }
          </Grid>
      </Box>
    </Box>
  )
}

export default Archive;