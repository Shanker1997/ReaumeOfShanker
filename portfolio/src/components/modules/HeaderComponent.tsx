import React, { useEffect } from 'react'
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Types } from '../reducer/Types';
import './Styles.scss'

export default function HeaderComponent() {
    const dispatch = useDispatch()
    const { storeEnabled } = useSelector((state: any) => state.application)
    useEffect(() => {
        dispatch({ type: Types.STORE_ENABLED, payload: true })

    }, [])
    return (
        <div className=' container'>HeaderComponent

            <Outlet />
        </div>
    )
}
