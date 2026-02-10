import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import './Layout.css'

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout