import React, { useState } from 'react';
import '../card/card.scss';
import Popup from '../PopUp/PopUp'



const Card = (props) => {

    const [showPin, setPin] = useState(false);
    const [showText, setText] = useState(false);
    const [showEditWindow, setEditWindow] = useState(false)

    const pinned_note = () => {
        setText(!showText);
    };

    const MouseEnter = () => {
        setPin(true);
    };

    const MouseLeave = () => {
        setPin(false);
    };

    const handleonPinClick = () => {
        props.pinClickHandleCallback(props.note)
    }
    const CreateEditWindow = () => {
        console.log("hii")
        setEditWindow(true)

    }


    const { title, description } = props.note
    return (
        <div className='contain-wrapper'>
            <div className='Card-item'
                onMouseEnter={MouseEnter}
                onMouseLeave={MouseLeave}
                onClick={CreateEditWindow}
            >
                <div className='icon-mark'>{showPin ? <i class="fa fa-check" ></i> : null}
                </div>
                <div className='item'>
                    <h1 className='item-heading'>{title}</h1>
                    <p className='item-note'>{description}</p>
                </div>
                <div className='icon-pin' onClick={handleonPinClick}>
                    {showPin ? <i class="fa fa-thumb-tack"></i> : null}
                </div>
                <div className='icon-delete'>
                    {showPin ? <i class="fa fa-trash-o"></i> : null}
                </div>
            </div>

            {showEditWindow ? <Popup /> : null}
        </div>
    )

}
export default Card;