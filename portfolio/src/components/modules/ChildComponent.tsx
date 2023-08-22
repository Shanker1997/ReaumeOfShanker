import React, { useState, useRef, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Types } from '../reducer/Types';

const Example = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const dispatch = useDispatch()

    const config =
    {
        readonly: false, // all options from https://xdsoft.net/jodit/docs/,
        placeholder: 'Start typings...'
    }
    useEffect(() => {
        setContent("<P>Hellow Shanker</P>")

    }, [])
    const SetDataInStore = () => {
        dispatch({ type: Types.TEXT_EDITOR_DATA, payload: content })

    }



    return (
        <>
            <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={5} // tabIndex of textarea
                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => { }}
            />
            <div><Button onClick={SetDataInStore}>Submit Data</Button></div>
        </>

    );
};
export default Example