import React, { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import { NoteHeader } from '../NoteHeader/NoteHeader';
import Archive from './Archive';


const Archives = () => {
  const { archiveNotes } = useContext(DataContext)
  return (
    <div className='w-[75%]'>
      <NoteHeader />
    <div className=''>
      <div className='lg:pl-44 w-12/12'>
        <div container="true" className='grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-x-7'>
          {
            archiveNotes.map(archive =>
              <div>
                <Archive archive={archive} />
              </div>
            )
          }
        </div>
      </div>
    </div>
    </div>
  )
}

export default Archives;