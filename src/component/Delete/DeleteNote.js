import React from 'react'
import { MdOutlineRestoreFromTrash as Restore,MdDeleteOutline as Delete } from 'react-icons/md';
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';

// const StyleCard = styled(Card)`
//     width: 240px;
//     margin: 8px;
//     box-shadow: none;
//     border: 1px solid #e0e0e0;
//     border-radius: 8px
// `

const DeleteNote = ({ note }) => {

    

    const { notes, setNotes, setArchiveNotes, deletedNotes, setDeletedNotes } = useContext(DataContext);

    const restoreNote = (note) => {
        const updatedNotes = deletedNotes.filter(data => data.id !== note.id);
        setDeletedNotes(updatedNotes);
        setNotes(prevArr => [note, ...prevArr]);

    }

    const deleteNote = (note) => {
        const updatedNotes = deletedNotes.filter(data => data.id !== note.id);
        setDeletedNotes(updatedNotes);
    }

    return (
        <div className='styledCard'>
            <div className="px-3">
                <h2>{note.heading}</h2>
                <p>{note.text}</p>
            </div>
            <div className='justify-end flex mb-2 mr-2'>
                <Delete
                    fontSize='20px'
                    onClick={() => deleteNote(note)}
                    style={{ marginLeft: 'auto' }}
                />
                <Restore
                    fontSize='20px'
                    onClick={() => restoreNote(note)}
                />
            </div>
        </div>
    )
}

export default DeleteNote;