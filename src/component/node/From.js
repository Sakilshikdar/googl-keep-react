import React, { useContext, useRef, useState } from 'react';
import { DataContext } from '../context/DataProvider';
import { v4 as uuid } from 'uuid'
import ClickAwayListener from 'react-click-away-listener';
import './From.css'

// const Container = styled()`
// display: flex;
// flex-direction: column;
// box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%); 
// padding: 10px 15px;
// border-radius: 8px;
// border-color: #e0e0e0;
// margin: auto;
// min-height: 30px
// `

const note = {
    id: '',
    heading: '',
    text: ''
}

const From = () => {
    const [showTextField, setShowTextField] = useState(false);
    const [addNote, setAddNote] = useState({ ...note, id: uuid() })

    const { setNotes } = useContext(DataContext);

    const containerRef = useRef();

    const onTextAreaClick = () => {
        setShowTextField(true);
        containerRef.current.style.minHeight = '70px';
    }

    const handleClickAway = () => {
        setShowTextField(false);
        containerRef.current.style.minHeight = '30px';
        setAddNote({ ...note, id: uuid() })
        if (addNote.heading || addNote.text) {
            setNotes(prevArr => [addNote, ...prevArr])
        }
    }


    const onTextChange = (e) => {
        let changeNotes = { ...addNote, [e.target.name]: e.target.value }
        setAddNote(changeNotes);
    }

    return (
        <div className="lg:ml-96">
            <ClickAwayListener onClickAway={handleClickAway}>
                <div ref={containerRef} className='container lg:w-[600px] w-10/12 mt-5'>
                    {
                        showTextField &&
                        <input
                            className='mb-3 border-none'
                            placeholder='Title'
                            variant='standard' 
                            onChange={(e => onTextChange(e))}
                            name='heading'
                            value={addNote.heading}
                        />
                    }
                    <textarea
                        className='border-none mb-3 hover:border-none'
                        placeholder='Take a note...'
                        variant='standard'
                        onClick={onTextAreaClick}
                        onChange={(e => onTextChange(e))}
                        name='text'
                        value={addNote.text}
                    ></textarea>
                </div>
            </ClickAwayListener>
        </div>
    );
};

export default From;