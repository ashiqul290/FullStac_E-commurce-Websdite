import React from 'react'
import Container from './Container'
import { FaFacebookF, FaBehance, FaPinterestP, FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from 'next/image'
import footerlogo from '../../../public/images/footer-logo.png';
import footer1 from '../../../public/images/footer1.png';
import footer2 from '../../../public/images/footer2.png';
import footer3 from '../../../public/images/footer3.png';
import foot from '../../../public/images/foot.png';
import footbox from '../../../public/images/footbox.png';
import { GrLocation } from "react-icons/gr";
import { IoLogoWhatsapp } from 'react-icons/io';


const Footer = () => {
    return (
        <footer className='pt-31  bg-[#171B2A] relative'>
             <Image className=' absolute left-0 bottom-5' src={footer1} alt="footer1" />
             <Image className=' absolute right-0 top-13.75' src={footer2} alt="footer2" />
             <Image className=' absolute right-0 bottom-5' src={footer3} alt="footer3" />
            <Container>
                <div className=" flex justify-between items-start ">
                    <div className="w-1/2">
                        <div className=" flex justify-between gap-20">
                            <div className="w-[63%]">
                                <div className="">
                                    <h3 className='text-[22px] text-white font-bold font-inter '>About us.</h3>
                                    <p className='text-[16px] text-white font-normal font-nunito mt-4.5'>orporate clients and leisure travelers has been relying on Groundlink for dependable safe, and professional chauffeured car service in major cities across World. Indeed it has been more than one decade and five years that Groundlink</p>

                                </div>
                                <div className="flex items-center gap-5 mt-7.5">
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
                            <div className="w-[38%]">
                                <h4 className='text-[22px] text-white font-bold font-inter '>Useful Links</h4>
                                <ul className=' grid  grid-cols-1 gap-y-4.5 text-[16px] text-white font-normal font-nunito mt-4.5 '>
                                    <li>About</li>
                                    <li>News</li>
                                    <li>Partners</li>
                                    <li>Room Details</li>
                                    <li>Gallery</li>
                                    <li>Contacts</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="flex justify-between gap-18">

                            <div className="w-[30%]">
                            <h4 className='text-[22px] text-white font-bold font-inter '>Help?</h4>
                            <ul className=' grid  grid-cols-1 gap-y-4.5 text-[16px] text-white font-normal font-nunito mt-4.5 '>
                                <li>FAQ</li>
                                <li>Term & conditions</li>
                                <li>Reporting</li>
                                <li>Documentation</li>
                                <li>Support Policy</li>
                                <li>Privacy</li>
                            </ul>
                        </div>
                        <div className="w-[70%]">
                            <div className="">
                                <Image className='' src={footerlogo} alt="footerlogo" />
                                <p className='text-[16px] text-white font-normal font-nunito mt-7.5'>We are a team of designers and developers create high quality Magento, Prestashop, </p>
                                <div className=" flex gap-1 items-center my-6.5">
                                    <GrLocation className='text-white' />
                                    <p className='text-[15px] text-white font-normal font-nunito'>254 Lillian, Holbrook</p>
                                </div>
                                <label className=' pl-3 py-2 pr-2 bg-white flex justify-between items-center' >
                                    <input className=' outline-none w-[50%]' type="email" placeholder=' Enter email address' />
                                    <button className='bg-[#699405] border border-[#699405] text-white font-nunito font-bold text-[14px] px-5.5 py-2.5 uppercase cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-[#699405]'>Subscribe</button>

                                </label>
                                <Image className='mt-20 ml-10' src={foot} alt="foot" />
                            </div>
                        </div>
                        </div>

                    </div>

                </div>
            </Container>
           <div className="py-5 bg-tertiary mt-5">
            <Container>
                 <div className=" flex justify-between items-center">
                 <div className="">
                    <p className='text-[16px] text-white font-normal font-nunito' >© TunaThemes 2024 All rights reserved.</p>
                 </div>
                 <div className=" flex gap-3.5">
                   <FaFacebook className=' text-2xl text-gray-200'/>
                    <FaLinkedin className=' text-2xl text-gray-200'/>
                   <FaInstagram className=' text-2xl text-gray-200'/>
                    <FaTwitter className=' text-2xl text-gray-200'/>
                   <IoLogoWhatsapp className=' text-2xl text-gray-200'/>
                 </div>
            </div>
            </Container>
           </div>
        </footer>
    )
}

export default Footer
