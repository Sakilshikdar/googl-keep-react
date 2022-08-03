import { Box } from '@mui/material'
import React from 'react'
import Nodes from './node/Nodes'
import SwipeDrawer from './SwipeDrawer'

const Home = () => {
    return (

    <Box
 
    style={{display: 'flex'}}
    >
        <SwipeDrawer />
        <Nodes />
    </Box>

    )
}

export default Home