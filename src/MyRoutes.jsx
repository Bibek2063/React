import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layouts/Layout'
import Homepage from './pages/Homepage'
import Second from './Second'
import AboutPage from './pages/AboutPage'
import Contactpage from './pages/Contactpage'

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Homepage />} />
                    <Route path='second' element={<Second />} />
                    <Route path='about' element={<AboutPage />} />
                    <Route path='contact' element={<Contactpage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes