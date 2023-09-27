import React, { lazy, Suspense } from 'react';
import { Routes, Route, RouteProps } from 'react-router-dom'
import PageNotFound from '../common/PageNotFound';
import Navbar from '../components/modules/navBar/Navbar';
import HomeSectionIndex from '../components/modules/sections/homeSection/HomeSectionIndex';
import Education from '../components/modules/sections/education/Education';

import WorkExperience from '../components/modules/sections/workExperience/WorkExperience';
import PreviewAndDownload from '../components/modules/sections/previewAndDownload/PreviewAndDownload';
const LazyProjects = React.lazy(() => import('../components/modules/sections/projects/Projects'))
const RoutesRoot = () => {

    return (
        <div className='container-fluid p-0'>
            <Navbar />
            <Routes>
                <Route path={'/'} key={"home"} element={<HomeSectionIndex />} />
                <Route path={'/education'} element={<Education />} >
                </Route>
                <Route path={'/projects'} element={
                    <Suspense fallback={'loading'}>
                        <LazyProjects />
                    </Suspense>
                } />
                <Route path={'/workExperience'} element={<WorkExperience />} />
                <Route path={'/Preview'} element={<PreviewAndDownload />} />
                <Route path={"*"} key={"external"}
                    element={<PageNotFound />} />

            </Routes>
        </div>
    )
}
export default RoutesRoot