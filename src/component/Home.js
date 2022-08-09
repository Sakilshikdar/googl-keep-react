import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Archives from './Archive/Archives'
import DeleteNotes from './Delete/DeleteNotes'
import Notes from './node/Notes'

const Home = () => {
    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <Router>
                <Routes>
                    <Route path='/' element={<Notes />} />
                    <Route path="/archive" element={<Archives />} />
                    <Route path='/delete' element={<DeleteNotes />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Home