import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './MyCarousel.css'

const MyCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel 
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={true}
        interval={3000}
        transitionTime={500}
      >
        <div className="carousel-slide">
          <div className="slide-content" style={{ backgroundColor: '#667eea' }}>
            <h2>Slide 1</h2>
            <p>Welcome to our platform</p>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="slide-content" style={{ backgroundColor: '#764ba2' }}>
            <h2>Slide 2</h2>
            <p>Explore our features</p>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="slide-content" style={{ backgroundColor: '#f093fb' }}>
            <h2>Slide 3</h2>
            <p>Join us today</p>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="slide-content" style={{ backgroundColor: '#4facfe' }}>
            <h2>Slide 4</h2>
            <p>Get started now</p>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default MyCarousel
