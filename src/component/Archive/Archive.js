import { useContext } from 'react';
import { MdOutlineUnarchive as Unarchive, MdDeleteOutline as Delete  } from 'react-icons/md'
import { DataContext } from '../context/DataProvider';
import { NoteHeader } from '../NoteHeader/NoteHeader';
import './Archive.css'

// const StyledCard = styled(Card)`
//     border: 1px solid #e0e0e0;
//     border-radius: 8px;
//     width: 240px;
//     margin: 8px;
//     box-shadow: none;
// `

const Archive = ({ archive }) => {

    const { archiveNotes, setNotes, setArchiveNotes, setDeleteNotes } = useContext(DataContext);

    const unArchiveNote = (archive) => {
        const updatedNotes = archiveNotes.filter(data => data.id !== archive.id);
        setArchiveNotes(updatedNotes);
        setNotes(prevArr => [archive, ...prevArr]);
    }

    const deleteNote = (archive) => {
        const updatedNotes = archiveNotes.filter(data => data.id !== archive.id);
        setArchiveNotes(updatedNotes);
        setDeleteNotes(prevArr => [archive, ...prevArr]);
    }

    return (
        <div className='w-[75%]'>
        <div className='styledCard'>
             <div className="px-3">
                <h2>{archive.heading}</h2>
                <p>{archive.text}</p>
                </div>
                <div className='justify-end flex mb-2 mr-2'>
                <Unarchive
                    fontSize="20px"
                    style={{ marginRight: '10px' }}
                    onClick={() => unArchiveNote(archive)}
                />
                <Delete
                    fontSize="20px"
                    onClick={() => deleteNote(archive)}
                />
            </div>
        </div>
        </div>
    )
}

export default Archive;