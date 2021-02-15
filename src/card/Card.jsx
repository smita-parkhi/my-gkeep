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

    return (
        <div className='contain-wrapper'>
            <h3 className='pinned-note'>{showText ? "PINNED" : null}</h3>
        
        <div className='Card-item' onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>
            <div className='icon-mark'>{showPin ? <i class="fa fa-check" ></i> : null}
            </div>
            <div className='item'>
                <h1 className='item-heading'>Title</h1>
                <p className='item-note'>Take a Note </p>
            </div>
            <div className='icon-pin' onClick={pinned_note} >{showPin ? <i class="fa fa-thumb-tack"></i> : null}
            </div>


            <div className='icon-delete' >{showPin ? <i class="fa fa-trash-o"></i> : null}
            </div>
        </div>
        </div>
    )

}
export default Card;