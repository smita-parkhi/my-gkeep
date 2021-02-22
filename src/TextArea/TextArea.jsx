import react, { useState, useRef, useEffect } from 'react';

import './textarea.scss';


const TextArea = (props) => {
    const [showdata, setdata] = useState(false);
    const [showButton, setButton] = useState(false);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleonDesclick = (event) => {
        setDescription(event.target.value)
    }

    const textInput = useRef(null);
    const noteCreateBox = useRef(null);
    // const inputField = useRef(null);

    const handleOnClick = () => {
        // setdata(true);
        setdata(true);
        textInput.current.focus();
    }

    const handleOnButtonClick = () => {
        setdata(false);
    }

    const { handleClickOutsideCallBack } = props;
    const handleClickOutside = (e) => {
        if (!noteCreateBox.current.contains(e.target)) {
            setdata(false);
            if (title.length > 0 || description.length > 0) {
                handleClickOutsideCallBack({
                    id: uuidv4(),
                    title: title,
                    description: description,
                    status: 'active'
                });
            }
            setTitle('')
            setDescription('')
        }
    }
    const uuidv4 = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    })

    return (
        <div className='container_wrapper_text' ref={noteCreateBox} >
            <div className='input_field'>
                <div>
                    {showdata ? <input
                        className='text_input'
                        type="text"
                        placeholder='Title'
                        onChange={handleTitleChange}
                        value={title}
                    /> : null}
                </div>
                <input
                    className='multiline_input'
                    type='textarea'
                    placeholder='Take a note...'
                    ref={textInput}
                    onClick={handleOnClick}
                    value={description}
                    onChange={handleonDesclick}
                />
                <div className='closeDiv'>
                    {showdata ? <button onClick={handleOnButtonClick} className='close_button' >Close</button> : null}
                </div>
            </div>
        </div>
    );
}

export default TextArea;