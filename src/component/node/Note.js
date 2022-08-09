import React, { useState } from 'react'
import { MdDeleteOutline as Delete } from 'react-icons/md'
import { BiArchiveIn as Archive } from "react-icons/bi";
import { IoColorPaletteOutline as Color } from "react-icons/io5"
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import './Note.css'
import CardColor from './CardColor/CardColor';

const Note = ({ note }) => {

    const { notes, setNotes, setArchiveNotes, setDeletedNotes } = useContext(DataContext);
    const [show, setShow] = useState(false)

    const archiveNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setArchiveNotes(prevArr => [note, ...prevArr]);
    }

    const deleteNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setDeletedNotes(prevArr => [note, ...prevArr]);
    }

    

    return (
        <div>
            <div className='StyleCard'>
                <div className="p-3">
                    <h2>{note.heading}</h2>
                    <p>{note.text}</p>
                </div>
                <div className='justify-end flex mb-2 mr-2'>
                    <Color
                        fontSize='20px'
                        style={{ marginRight: '10px' }}
                        onClick={() =>setShow(!show)}
                    />
                    <Archive
                        fontSize='20px'
                        style={{ marginRight: '10px' }}
                        onClick={() => archiveNote(note)}
                    />
                    <Delete
                        fontSize='20px'
                        onClick={() => deleteNote(note)}
                    />
                </div>
            </div>
            <div className='ml-4'>
                {
                    show ? <CardColor /> : null
                }
            </div>
        </div>
    )
}

export default Note