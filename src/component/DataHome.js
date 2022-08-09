import React from 'react'
import DataProvider from './context/DataProvider'
import Home from './Home'

const DataHome = () => {
  return (
    <div>
    <DataProvider>
    <Home />
   </DataProvider></div>
  )
}

export default DataHome