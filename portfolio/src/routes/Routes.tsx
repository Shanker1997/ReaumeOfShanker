import React from 'react';
import { Routes, Route } from 'react-router-dom'
import HeaderComponent from '../components/modules/HeaderComponent';
import Example from '../components/modules/ChildComponent';
import PageNotFound from '../common/PageNotFound';
import Navbar from '../components/modules/navBar/Navbar';
const RoutesRoot = () => {
    return (
        <div className='container-fluid p-0'>
            <Navbar />
            <Routes>
                <Route path={'/'} element={<HeaderComponent />} />
                <Route path={'/secondComponet'} element={<HeaderComponent />} >
                    <Route path={'/secondComponet/childcomp2'} element={<Example />} />
                </Route>
                <Route path={"*"} element={<PageNotFound />} />

            </Routes>
        </div>
    )
}
export default RoutesRoot