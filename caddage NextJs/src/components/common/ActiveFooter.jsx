"use client";
import React from 'react'
import { FooterTop } from '../home/FooterTop'
import Icon_part from './Icon_part'
import { usePathname } from 'next/navigation';

export const ActiveFooter = () => {
     const pathname = usePathname();
  return (
    <>
    {pathname === "/" ? <FooterTop /> : <Icon_part />}
    </>
  )
}
