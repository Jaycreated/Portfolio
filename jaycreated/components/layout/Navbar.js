import React from 'react';
import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'


const Navbar = () => {
    return (
        <>
            <div>
                <div className=''>
                    <div className='p-6 flex justify-between border-b-2 md:px-64'>

                        <div className="">
                            <p className='font-DancingScript font-bold text-2xl'>Jaycreated</p>
                        </div>

                        <div>
                            <div className='flex'>
                                <a className='text-xl p-1 text-gray-800 hover:bg-gray-800 rounded-full  hover:text-white transition-colors duration-300' href='https://github.com/Jaycreated'>
                                    <FaGithub />
                                    <span className='sr-only'>Github </span>
                                </a>

                                <a className='text-xl p-1 text-blue-800 hover:bg-blue-800 rounded-full  hover:text-white transition-colors duration-300' href='https://twitter.com/Jaycreated_'>
                                    <FaTwitter />
                                    <span className='sr-only'>Github </span>
                                </a>

                                <a className='text-xl p-1 text-blue-800 hover:bg-blue-800 rounded-full  hover:text-white transition-colors duration-300' href='https://www.linkedin.com/in/johnson-john-9145411a7/'>
                                    <FaLinkedin />
                                    <span className='sr-only'>Github </span>
                                </a>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar
