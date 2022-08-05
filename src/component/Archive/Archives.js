import styled from '@emotion/styled';
import { Box, Grid } from '@mui/material';
import React, { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import ArchiveNotes from './Archive'

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins?.toolbar
}));

const Archives = () => {
  const { archiveNotes } = useContext(DataContext)
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Box sx={{ p: 3, width: '100%;' }}>
        <DrawerHeader />
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

export default Archives;