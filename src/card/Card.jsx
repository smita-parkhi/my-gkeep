import React, { useState } from 'react';
import '../card/card.scss';


const Card = (props) => {
    
    const [showPin, setPin] = useState(false);
    const[showText,setText]=useState(false);

    const pinned_note= () =>{
        setText(!showText);
    };

    const MouseEnter = () => {
        setPin(true);
    };

    const MouseLeave = () => {
        setPin(false);
    };

    const handleonPinClick = () =>{
       props.pinClickHandleCallback(props.note)
    }
    

    const { title, description } = props.note
    return (
        <div className='contain-wrapper'>
            <div className='Card-item' onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>
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
        </div>
    )

}
export default Card;