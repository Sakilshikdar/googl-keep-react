import React from 'react'
import { BiArchiveIn as Archive } from "react-icons/bi";
import { MdLightbulbOutline as Lightbulb, MdDeleteOutline as Delete } from 'react-icons/md'
import { Link } from 'react-router-dom';

export const NoteHeader = () => {

    // const NavList = [
    //     { id: 1, name: 'Notes', icon: <Lightbulb />, route: '/',  },
    //     { id: 2, name: 'Archive', icon: <Archive />, route: '/archive' },
    //     { id: 3, name: 'Trash', icon: <Delete />, route: '/delete' }
    // ]

    return (
        <div className='w-[100%]'>
            <div className="navbar bg-base-100">
                <div className="navbar">
                    <a className="btn btn-ghost normal-case text-xl text-red-300 font-serif lg:ml-28">HexaNote</a>
                </div>
                <div className='gap-4'>
                    <Link container="true" className='no-underline' to={'/'}><span className='flex'><span className='text-zinc-400 text-lg'><Lightbulb/></span>Note</span></Link>
                    <Link container="true" className='no-underline' to={'/archive'}><span className='flex'><span className='text-zinc-400 text-lg'><Archive/></span>Archive</span></Link>
                    <Link container="true" className='no-underline' to={'/delete'}><span className='flex'><span className='text-zinc-400 text-lg'><Delete/></span>Trash</span></Link>
                </div>
            </div>
        </div>
    )
}
