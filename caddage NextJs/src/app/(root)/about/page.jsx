import About from '@/components/about/About'
import Client_Testimonial from '@/components/home/Client_Testimonial'
import Leatest_Blog from '@/components/home/Leatest_Blog'
import Team_Member from '@/components/home/Team_Member'
import Trusted from '@/components/home/Trusted'
import Visit_our_Shop from '@/components/home/Visit_our_Shop'
import React from 'react'

const page = () => {
  return (
    <>
    {/* <About/> */}
    <Trusted/>
    <Visit_our_Shop/>
    <Team_Member/>
    <Client_Testimonial/>
    <Leatest_Blog/>
   
   

    </>
  )
}

export default page