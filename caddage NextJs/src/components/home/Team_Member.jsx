import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'
import team from '../../../public/images/team.png';
import { FaFacebookF, FaBehance, FaPinterestP, FaTwitter } from "react-icons/fa";


const Team_Member = () => {
    return (
        <>
            <section className='pt-26.5 pb-29.25 bg-white'>
                <Container>
                    <div className="">
                        <h2 className='text-[48px] text-primary font-bold font-inter text-center leading-[100%]'>Team Member</h2>
                        <p className='text-[16px] text-tertiary font-normal font-nunito mt-5 text-center'>
                            A highly efficient slip-ring scanner for today's diagnostic requirements.
                        </p>
                    </div>
                    <div className=" lg:flex justify-between gap-20 items-center mt-14">
                        <div className=" lg:w-1/3 w-full">
                            <div className="">
                                <Image className=' ' src={team} alt="team" />
                            <h2 className='text-[28px] text-primary font-bold font-inter leading-[100%] text-center mt-5'>John Abraham</h2>
                            <p className='text-[20px] text-[#699405] font-normal font-nunito mt-2.5 text-center' >Consultant</p>
                           <div className="px-19.5">
                             <div className="flex items-center gap-2.5 mt-5 ">
                                <div className="p-2.5 bg-white text-[#699405] border border-[#699405] rounded-full cursor-pointer duration-300 ease-in-out hover:bg-[#699405] hover:text-white">
                                    <FaFacebookF />
                                </div>
                                <div className="p-2.5 bg-white text-[#699405] border border-[#699405] rounded-full cursor-pointer duration-300 ease-in-out hover:bg-[#699405] hover:text-white">
                                    <FaTwitter />
                                </div>
                                <div className="p-2.5 bg-white text-[#699405] border border-[#699405] rounded-full cursor-pointer duration-300 ease-in-out hover:bg-[#699405] hover:text-white">
                                    <FaBehance />
                                </div>
                                <div className="p-2.5 bg-white text-[#699405] border border-[#699405] rounded-full cursor-pointer duration-300 ease-in-out hover:bg-[#699405] hover:text-white">
                                    <FaPinterestP />
                                </div>
                            </div>
                           </div>
                            </div>
                        </div>
                        <div className=" lg:w-1/3 w-full">
                            <div className="">
                                <Image className=' ' src={team} alt="team" />
                            <h2 className='text-[28px] text-primary font-bold font-inter leading-[100%] text-center mt-5'>John Abraham</h2>
                            <p className='text-[20px] text-[#699405] font-normal font-nunito mt-2.5 text-center' >Organizer</p>
                           <div className="px-19.5">
                             <div className="flex items-center gap-2.5 mt-5 ">
                                <div className="p-2.5 bg-white text-[#699405] border border-[#699405] rounded-full cursor-pointer duration-300 ease-in-out hover:bg-[#699405] hover:text-white">
                                    <FaFacebookF />
                                </div>
                                <div className="p-2.5 bg-white text-[#699405] border border-[#699405] rounded-full cursor-pointer duration-300 ease-in-out hover:bg-[#699405] hover:text-white">
                                    <FaTwitter />
                                </div>
                                <div className="p-2.5 bg-white text-[#699405] border border-[#699405] rounded-full cursor-pointer duration-300 ease-in-out hover:bg-[#699405] hover:text-white">
                                    <FaBehance />
                                </div>
                                <div className="p-2.5 bg-white text-[#699405] border border-[#699405] rounded-full cursor-pointer duration-300 ease-in-out hover:bg-[#699405] hover:text-white">
                                    <FaPinterestP />
                                </div>
                            </div>
                           </div>
                            </div>
                        </div>
                        <div className=" lg:w-1/3 w-full">
                            <div className="">
                                <Image className=' ' src={team} alt="team" />
                            <h2 className='text-[28px] text-primary font-bold font-inter leading-[100%] text-center mt-5'>John Abraham</h2>
                            <p className='text-[20px] text-[#699405] font-normal font-nunito mt-2.5 text-center' >Manager</p>
                           <div className="px-19.5">
                             <div className="flex items-center gap-2.5 mt-5 ">
                                <div className="p-2.5 bg-white text-[#699405] border border-[#699405] rounded-full cursor-pointer duration-300 ease-in-out hover:bg-[#699405] hover:text-white">
                                    <FaFacebookF />
                                </div>
                                <div className="p-2.5 bg-white text-[#699405] border border-[#699405] rounded-full cursor-pointer duration-300 ease-in-out hover:bg-[#699405] hover:text-white">
                                    <FaTwitter />
                                </div>
                                <div className="p-2.5 bg-white text-[#699405] border border-[#699405] rounded-full cursor-pointer duration-300 ease-in-out hover:bg-[#699405] hover:text-white">
                                    <FaBehance />
                                </div>
                                <div className="p-2.5 bg-white text-[#699405] border border-[#699405] rounded-full cursor-pointer duration-300 ease-in-out hover:bg-[#699405] hover:text-white">
                                    <FaPinterestP />
                                </div>
                            </div>
                           </div>
                            </div>
                        </div>
                        
                       
                       
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Team_Member
