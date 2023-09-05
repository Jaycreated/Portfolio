import React from 'react';
import locateip from '../public/locateip.png';
import portfolio from '../public/portfolio.png';
import checkref from '../public/checkref.png';
import tech from '../public/tech.png';
import wave from '../public/wave.png';
import vamoose from '../public/vamoose.png'
//import {SiReact, SiTailwindcss, SiJavascript} from 'react-icons/si'
//import {FaReact,} from 'react-icons/fa'

const Skills = () => {
    return (
        <>
            <p className='text-center font-bold mt-16 pt-6 border-t-2 text-xl'>PORTFOLIO</p>
            <p className='text-center tet-sm font-bold animate-pulse'>(click to open)</p>

            <div className='grid md:gap-6 gap-1 grid-cols-3 mt-8 '>

                <a className='rounded-lg md:h-full h-32' href='https://www.cre8tivetech.com/'>
                    <img className='h-full' src={tech} alt='calculate' />
                </a>

                <a className='rounded-md md:h-full h-32' href='https://wavedownloader.com/'>
                    <img className='h-full' src={wave} alt='calculate' />
                </a>

                <a className='rounded-md md:h-full h-32' href='https://checkref.co/'>
                    <img className='h-full' src={checkref} alt='calculate' />
                </a>

                <a className='rounded-md md:h-full h-32' href='https://calculatewithme.netlify.app/'>
                    <img className='h-full' src={vamoose} alt='calculate' />
                </a>

                <a className='rounded-md md:h-full h-32' href='http://jaycreated.me/'>
                    <img className='h-full' src={portfolio} alt='calculate' />
                </a>

                <a className='rounded-md md:h-full h-32' href='https://locateip.netlify.app/'>
                    <img className='h-full' src={locateip} alt='locate ip' />
                </a>
            </div>
        </>
    );
};

export default Skills;
