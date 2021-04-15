import React from 'react'

const RoomCard = ({src, title, description}) => {
    return (
        <div>
            <img src={src}/>
            <h3>{title}</h3>
            <h3>{description}</h3>
        </div>
    )
}

export default RoomCard
