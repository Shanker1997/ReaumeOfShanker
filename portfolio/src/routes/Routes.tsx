import React from 'react';
import { Routes, Route } from 'react-router-dom'
import SwipeableEdgeDrawer from '../components/IndexComponent';
import HeaderComponent from '../components/modules/HeaderComponent';
const RoutesRoot = () => {
    return (
        <Routes>
            <Route path={'/'} element={<SwipeableEdgeDrawer />} />
            <Route path={'/secondComponet'} element={<HeaderComponent />} />

        </Routes>
    )
}
export default RoutesRoot