import React, { useState, useRef, useEffect, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Types } from '../reducer/Types';
import { useSelector } from 'react-redux';


const Example = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [newContent, setNewContent] = useState("")
    const dispatch = useDispatch()
    const { textEditorData } = useSelector((state: any) => state.application)


    const config = useMemo(
        () => ({
            readonly: false,
            palceholder: "startWriting"
        }),
        []
    );
    useEffect(() => {
        if (textEditorData) {
            setContent(textEditorData)
        }
        // setContent("<P>Hellow Shanker</P>")

    }, [])
    const SetDataInStore = () => {
        dispatch({ type: Types.TEXT_EDITOR_DATA, payload: content })

    }
    const setContentfunction = (props: any) => {
        setContent(props)
        dispatch({ type: Types.TEXT_EDITOR_DATA, payload: content })
        console.log("38....", content)

    }



    return (
        <>
            <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => { setContentfunction(newContent) }}
            />
            <div><Button onClick={SetDataInStore}>Submit Data</Button></div>
        </>

    );
};
export default Example