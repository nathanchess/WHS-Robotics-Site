import React from 'react'

export default function VideoController(props) {
    return (
        <video controls preload='metadata'>
            <source src={props.src} type="video/mp4"></source>
        </video>
    )
}