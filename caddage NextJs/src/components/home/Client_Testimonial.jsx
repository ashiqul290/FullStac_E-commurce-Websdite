"use client";
import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import client from '../../../public/images/client.png';
import clientbg from '../../../public/images/clientbg.png';
import clientright from '../../../public/images/client-right.png';
import clientleft from '../../../public/images/client-left.png';


import { BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";



function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className=" absolute h-10 w-10 bg-[#699405] rounded-full  text-[#fff] top-[50%] translate-y-[-50%] 2xl:-right-20 -right-2.5  cursor-pointer z-50 duration-300 ease-in-out  hover:bg-[#0A472E]" onClick={onClick}>
            <FaArrowRight className=' absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]' />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className=" absolute h-10 w-10 bg-[#699405] rounded-full  text-[#fff] top-[50%] translate-y-[-50%] 2xl:-left-20 -left-2.5  cursor-pointer z-50 duration-300 ease-in-out  hover:bg-[#0A472E]" onClick={onClick}>
            <FaArrowLeft className=' absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]' />
        </div>

    );
}

const Client_Testimonial = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <>
            <section className='pt-26.5 pb-20 bg-[#F7F5EB]'>
                <Container>
                    <div className="">
                        <h2 className='text-[48px] text-primary font-bold font-inter text-center leading-[100%]'>Client Testimonial</h2>
                        <p className='text-[16px] text-tertiary font-normal font-nunito mt-5 text-center'>
                            A highly efficient slip-ring scanner for today's diagnostic requirements.
                        </p>
                    </div>

                    <div className="relative mb-20">
                                 <Image className=' absolute top-18 left-0 w-full h-[80%] ' src={clientbg} alt="clientbg"  /> 
                                 <Image className=' absolute top-0 right-0 ' src={clientright} alt="client-right"  /> 
                                 <Image className=' absolute -bottom-12 left-0  ' src={clientleft} alt="clientleft"  /> 
                        <Slider {...settings}>
                            <div className=" px-20 ">
                            <div className="pt-12.5 pb-16 bg-white shadow-2xl mt-13 ">
                                 <Image className=' ml-[50%] translate-[-50%] mt-12.5 ' src={client} alt="client"  /> 
                                 <h3 className='text-[18px] text-primary font-bold font-inter text-center leading-[100%]'>Lurch Schpellchek</h3>
                                 <h4 className='text-[14px] text-primary font-normal font-nunito text-center  '>UI/UX designer</h4>  
                                 <p className='text-[16px] text-primary font-normal font-nunito text-center w-167.5 mx-auto mt-10 '>What a load of rubbish bits and bobs pear shaped owt to do with me bubble and squeak jolly good morish tinkety tonk old fruit, car boot my good sir buggered plastered cheeky David, haggle young delinquent say so I said bite your arm off easy peasy. Skive off it's all gone to pot buggered.</p>
                            </div>
                            </div>
                            <div className=" px-20 ">
                            <div className="pt-12.5 pb-16 bg-white shadow-2xl mt-13 ">
                                 <Image className=' ml-[50%] translate-[-50%] mt-12.5 ' src={client} alt="client"  /> 
                                 <h3 className='text-[18px] text-primary font-bold font-inter text-center leading-[100%]'>Lurch Schpellchek</h3>
                                 <h4 className='text-[14px] text-primary font-normal font-nunito text-center  '>UI/UX designer</h4>  
                                 <p className='text-[16px] text-primary font-normal font-nunito text-center w-167.5 mx-auto mt-10 '>What a load of rubbish bits and bobs pear shaped owt to do with me bubble and squeak jolly good morish tinkety tonk old fruit, car boot my good sir buggered plastered cheeky David, haggle young delinquent say so I said bite your arm off easy peasy. Skive off it's all gone to pot buggered.</p>
                            </div>
                            </div>
                            <div className=" px-20 ">
                            <div className="pt-12.5 pb-16 bg-white shadow-2xl mt-13 ">
                                 <Image className=' ml-[50%] translate-[-50%] mt-12.5 ' src={client} alt="client"  /> 
                                 <h3 className='text-[18px] text-primary font-bold font-inter text-center leading-[100%]'>Lurch Schpellchek</h3>
                                 <h4 className='text-[14px] text-primary font-normal font-nunito text-center  '>UI/UX designer</h4>  
                                 <p className='text-[16px] text-primary font-normal font-nunito text-center w-167.5 mx-auto mt-10 '>What a load of rubbish bits and bobs pear shaped owt to do with me bubble and squeak jolly good morish tinkety tonk old fruit, car boot my good sir buggered plastered cheeky David, haggle young delinquent say so I said bite your arm off easy peasy. Skive off it's all gone to pot buggered.</p>
                            </div>
                            </div>
                            



                        </Slider>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Client_Testimonial
