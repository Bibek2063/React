import React from 'react'
import MyCarousel from '../components/Mycomponents/MyCarousel'

const Homepage = () => {
  return (
    <div className="page">
      <h1>Welcome to Home</h1>
      <p>This is the homepage of your application.</p>
      
      <MyCarousel />
    </div>
  )
}

export default Homepage