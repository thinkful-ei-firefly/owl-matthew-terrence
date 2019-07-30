import React from 'react'
import './Stage.css'

const StageParticipant = ({avatar, name}) => {
    return (
        <div className='stagePeeps'>
            <h1>{name}</h1>
            <h2><img src={avatar} alt='avatar'></img></h2>
        </div>
    )
}

export default StageParticipant

