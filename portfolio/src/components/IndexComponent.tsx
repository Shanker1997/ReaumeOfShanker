import React, { useEffect } from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Link, NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';


export default function SwipeableEdgeDrawer() {
    const { textEditorData } = useSelector((state: any) => state.application)
    useEffect(() => {
        console.log(textEditorData, "49.....")

    }, [textEditorData])
    return (

        <>
            <div>

                <Link to={'/'}> Home</Link>
                <Link to={'/secondComponet'}> Header Element </Link>
                <Link to={'/secondComponet/childcomp2'}> ChildElemett </Link>
                <div className='storyPreview' dangerouslySetInnerHTML={{ __html: textEditorData }} />



            </div>
            <CssBaseline />


        </>
    );
}