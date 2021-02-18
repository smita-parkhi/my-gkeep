import react, { useState, useRef, useEffect } from 'react';

import './textarea.scss';


const TextArea = (props) => {
    const [showdata, setdata] = useState(false);

    const textInput = useRef(null);
    const noteCreateBox=useRef(null);


    const handleOnClick = () => {
        // setdata(!showdata);
        setdata(true);
        textInput.current.focus();

        

    }

    const handleClickOutside = (e) =>{
        
        if (!noteCreateBox.current.contains(e.target)) {
            setdata(false);
        }
    }

    useEffect(()=>{
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    })
    
    return (
        <div className='container_wrapper_text' ref={noteCreateBox}>
            <div className='input_field'
            >
                <div>
                    {showdata ? <input
                        className='text_input'
                        type="text"
                        placeholder='Title'

                    /> : null}
                </div>
                <input
                    className='multiline_input'
                    type='text'
                    placeholder='Take a note...'
                    ref={textInput}
                    onClick={handleOnClick}
                />
            </div>
        </div>

    );
};
export default TextArea;