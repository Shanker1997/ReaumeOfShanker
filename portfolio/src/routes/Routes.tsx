import React from 'react';
import { Routes, Route } from 'react-router-dom'
import SwipeableEdgeDrawer from '../components/IndexComponent';
import HeaderComponent from '../components/modules/HeaderComponent';
import Example from '../components/modules/ChildComponent';
import PageNotFound from '../common/PageNotFound';
const RoutesRoot = () => {
    return (
        <Routes>
            <Route path={'/'} element={<SwipeableEdgeDrawer />} />
            <Route path={'/secondComponet'} element={<HeaderComponent />} >
                <Route path={'/secondComponet/childcomp2'} element={<Example />} />
            </Route>
            <Route path={"*"} element={<PageNotFound />} />

        </Routes>
    )
}
export default RoutesRoot