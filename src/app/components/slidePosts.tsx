'use client'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';

export default function SlidePosts() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
  const items = [
    {
      id: 1,
      src : 'https://images.unsplash.com/photo-1698725224267-472f2f3cf858?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      
    },
    {
      id: 2,
      src :'https://images.unsplash.com/photo-1699562007392-4bbcd2f4e759?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 3,
      
      src : 'https://images.unsplash.com/photo-1698725224267-472f2f3cf858?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id:4,
      src :'https://images.unsplash.com/photo-1699562007392-4bbcd2f4e759?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }

  ]
  return (
  <>
  <Carousel ssr infinite={true}
    deviceType='desktop'
    autoPlay={true}
    containerClass='carousel-container'
    itemClass='carousel-image-item'
    autoPlaySpeed={5000}
    responsive={responsive}>
      {items.map(item=> {
        return (
          
          <Image src={item.src} alt="ss" 
          style={{objectFit: "contain"}}
           width="500" height="100" key={item.id}>
          </Image>
        )
      })}
  </Carousel>
  </>
  )
}
