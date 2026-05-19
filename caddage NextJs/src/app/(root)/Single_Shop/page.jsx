import Add_to_cart from '@/components/Single_Shop/Add_to_cart'
import Cart_Details from '@/components/Single_Shop/Cart_Details'
import Single from '@/components/Single_Shop/Single'
import Single_Trending_Products from '@/components/Single_Shop/Single_Trending_Products'
import React from 'react'

const page = () => {
  return (
    <>
    <Single/>
    <Add_to_cart/>
    <Cart_Details/>
    <Single_Trending_Products/>
    </>
  )
}

export default page
