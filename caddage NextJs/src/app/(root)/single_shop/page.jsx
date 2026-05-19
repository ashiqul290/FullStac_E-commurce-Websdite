import { getProducts } from '@/components/common/Api'
import Add_to_cart from '@/components/Single_Shop/Add_to_cart'
import Cart_Details from '@/components/Single_Shop/Cart_Details'
import Single from '@/components/Single_Shop/Single'
import Single_Trending_Products from '@/components/Single_Shop/Single_Trending_Products'
import React from 'react'


const page = async ({ searchParams }) => {
  const params = await searchParams;
  const id = params?.id;

  const products = await getProducts();

  const item = products[id - 1];


  return (
    <>
    
      <Add_to_cart item={item} />
      <Cart_Details item={item}/>
      <Single_Trending_Products />
    </>
  )
}

export default page
