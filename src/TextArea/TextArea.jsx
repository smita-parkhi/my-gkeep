import react, { useState,useRef } from 'react';

import './textarea.scss';


const TextArea = (props) =>{
    const [showdata,setdata]=useState(false);

    const textInput = useRef(null);


    const handleOnClick = () =>{
        setdata(!showdata);
        textInput.current.focus();

    }
    return(
        <div className='container_wrapper_text'>
            <div className='input_field' style={{height : showdata ? '100px' : '30px'}}>
                <input
                 className='text_input' 
                 type="text" 
                 placeholder='Title'
                 onClick={handleOnClick}
                 

                 />
                <input 
                className='multiline_input' 
                type='text' 
                placeholder='Take a note'
                ref={textInput} >

                </input>

            </div>

        </div>

    );
};
export default TextArea;