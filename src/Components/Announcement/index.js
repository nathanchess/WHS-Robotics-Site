import React from 'react'
import '../../Assets/Styles/buttons.scss'
import './Announce.scss'

import {AiOutlineClose} from 'react-icons/ai'
import {IoMegaphoneOutline} from 'react-icons/io5'

export default function Announce(props) {

    const [Enabled, setEnabled] = React.useState(true)
    const onClose = () => setEnabled(false)

    function Banner() {
        return <div className='announce'>
            <IoMegaphoneOutline size="1.25em"/>
            <h1 className='announce-attention'>{props.text}</h1>
            <div className='shiney-wrapper'>
                <a className='black' href="">{props.button_text}</a>
            </div>
            <button className='close' onClick={onClose}><AiOutlineClose size="1.25em"/></button>
        </div>
    }

    return (
        <>
            { Enabled ? <Banner /> : null}
        </>
    )
}
