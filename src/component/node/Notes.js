import React, { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import { NoteHeader } from '../NoteHeader/NoteHeader';
import EmptyNotes from './EmptyNotes';
import From from './From';
import Note from './Note';



const Notes = () => {
  const { notes } = useContext(DataContext)
  return (
    <div className='w-[75%]' >
      <NoteHeader />
        <From />
        <div className=''>
          <div className='lg:pl-44'>
            {notes.length > 0 ?
              <div container="true" className='grid lg:grid-cols-4 grid-cols-1 mt-10 md:grid-cols-2 gap-x-7'>
                {
                  notes.map(note =>
                    <div item>
                      <Note note={note} />
                    </div>
                  )
                }
              </div>
              : <EmptyNotes />
            }
          </div>
        </div>
      </div>
  )
}

export default Notes;