import React from 'react'
import { MdLightbulbOutline as Lightbulb } from 'react-icons/md'
import styled from 'styled-components'
import './EmptyNotes.css'

const Light = styled(Lightbulb)`
    font-size: 120px;
    color: #F5F5F5
`

const EmptyNotes = () => {
    return (
        <div container="true" className='Container lg:ml-48  md:pl-20'>
                <Light />
                <div className='pl-10 text'>
                    Notes you add appear here
                </div>
        </div>
    )
}

export default EmptyNotes