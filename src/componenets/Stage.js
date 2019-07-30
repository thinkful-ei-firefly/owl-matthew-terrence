import React from 'react'
import StageParticipant from './StageParticipant'



const Stage = ({participants}) => {
    return (
        <div className='stage'>
            {participants.map(participant=>{
                if (participant.onStage===true){
                    return <StageParticipant name={participant.name} avatar={participant.avatar}>

                    </StageParticipant>
                }
                else {
                    return;
                }
            })}
        </div>
    )
}

export default Stage




