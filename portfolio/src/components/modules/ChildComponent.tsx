import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports';


export default function ChildComponent() {
    const dispatch = useDispatch()
    const { storeEnabled } = useSelector((state: any) => state.application)


    useEffect(() => {
        console.log(storeEnabled)

    }, [])
    return (
        <div>ChildComponent</div>
    )
}
