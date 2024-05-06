import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import logo from '../../assets/nasa.png'
export default function Footer() {
    return (
        <div className="bg-gradientbanner bg-blob w-full pt-20 pb-10 px-5 md:px-10 h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            <div className="w-full h-full flex flex-col gap-5 items-center">
                <img className="w-32" src={logo} alt="logo" />
                <p className='text-center font-bold'>The National Aeronautics and Space Administration</p>
                <div className="flex gap-4">
                    <span className="bannerIcon">
                        <FaFacebook />
                    </span>
                    <span className="bannerIcon">
                        <FaTwitter />
                    </span>
                    <span className="bannerIcon">
                        <FaLinkedin />
                    </span>
                </div>
            </div>
            <div className="w-full h-full">
                <h3 className="text-xl uppercase text-primary font-bold ">
                    Quick Link
                </h3>
                <ul className="flex flex-col gap-2 font-titleFont font-medium py-6 overflow-hidden">
                    <li>
                        <span className="w-full  relative hover:text-red-500 duration-300 group cursor-pointer">
                            About
                            <span className="w-full h-[1px] bg-red-500 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>
                    <li>
                        <span className="w-full  relative hover:text-red-500 duration-300 group cursor-pointer">
                            Portfolio
                            <span className="w-full h-[1px] bg-red-500 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>
                    <li>
                        <span className="w-full  relative hover:text-primary duration-300 group cursor-pointer">
                            Services
                            <span className="w-full h-[1px] bg-red-500 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>
                    <li>
                        <span className="w-full  relative hover:text-red-500 duration-300 group cursor-pointer">
                            Blog
                            <span className="w-full h-[1px] bg-red-500 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>
                    <li>
                        <span className="w-full  relative hover:text-red-500 duration-300 group cursor-pointer">
                            Contact
                            <span className="w-full h-[1px] bg-red-500 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>
                </ul>
            </div>
            <div className="w-full h-full">
                <h3 className="text-xl uppercase text-primary font-bold ">
                    RESOURCES
                </h3>
                <ul className="flex flex-col gap-2 font-titleFont font-medium py-6 overflow-hidden">
                    <li>
                        <span className="w-full relative hover:text-red-500 duration-300 group cursor-pointer">
                            Authentication
                            <span className="w-full h-[1px] bg-red-500 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>
                    <li>
                        <span className="w-full  relative hover:text-red-500 duration-300 group cursor-pointer">
                            System Status
                            <span className="w-full h-[1px] bg-red-500 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>
                    <li>
                        <span className="w-full  relative hover:text-red-500 duration-300 group cursor-pointer">
                            Terms of Service
                            <span className="w-full h-[1px] bg-red-500 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>
                    <li>
                        <span className="w-full  relative hover:text-red-500 duration-300 group cursor-pointer">
                            Pricing
                            <span className="w-full h-[1px] bg-red-500 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>
                    <li>
                        <span className="w-full  relative hover:text-red-500 duration-300 group cursor-pointer">
                            Over Right
                            <span className="w-full h-[1px] bg-red-500 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>
                </ul>
            </div>
            <div className="w-full h-full">
                <h3 className="text-xl uppercase text-primary font-bold">
                    DEVELOPERS
                </h3>
                <ul className="flex flex-col gap-2 font-titleFont font-medium overflow-hidden py-6">
                    <li>
                        <span className="w-full  relative hover:text-red-500 duration-300 group cursor-pointer">
                            Documentation
                            <span className="w-full h-[1px] bg-red-500 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>
                    <li>
                        <span className="w-full  relative hover:text-red-500 duration-300 group cursor-pointer">
                            Authentication
                            <span className="w-full h-[1px] bg-red-500 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>
                    <li>
                        <span className="w-full  relative hover:text-red-500 duration-300 group cursor-pointer">
                            API Reference
                            <span className="w-full h-[1px] bg-red-500 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>
                    <li>
                        <span className="w-full  relative hover:text-red-500 duration-300 group cursor-pointer">
                            Support
                            <span className="w-full h-[1px] bg-red-500 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>
                    <li>
                        <span className="w-full  relative hover:text-red-500 duration-300 group cursor-pointer">
                            Open Source
                            <span className="w-full h-[1px] bg-red-500 inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
