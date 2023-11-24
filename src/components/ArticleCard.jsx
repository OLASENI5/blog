import React from 'react';
import { FaCheck } from "react-icons/fa6";

import  images  from "../constants/images.jsx"

const ArticleCard = ({className}) => {
  return (
    <div className={`rounded-xl overflow-hidden shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] ${className}`}>
        <img src={images[7]} alt="title" className='object-center md:h-52 lg:h-48 xl:h-60' />
        <div className='p-5'>
            <h2 className='font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]'>Future of Work</h2>
            <p className='text-dark-light mt-3 text-sm md:text-lg'>Majority of people will work in jobs that do not exist today.</p>
            <div className='flex justify-between flex-nowrap items-center mt-6'>
                <div className='flex items-center gap-x-2 md:gap-x-2.5'></div>
                <img src={images[3]} alt="post profile" className='w-9 h-9 md:w-10 md:h-10' />
                <div className='flex flex-col'>
                    <h4 className='font-bold italic text-dark-soft text-sm md:text-base'>Viola Monisa</h4>
                    <div className='flex items-center gap-x-2'>
                        <span className='bg-[#36B37E] w-fit bg-opacity-20 p-1.5 rounded-full'>
                            <FaCheck className='w-1.5 h-1.5 text-[#36B37E]' />
                        </span>
                        <span className='italic text-dark-hard text-xs md:text-sm'>Verify Writer</span>
                    </div>
                </div>
                <span className='font-bold text-dark-hard italic text-sm md:text-base'>02 May</span>
            </div>
        </div>
    </div>
  )
}

export default ArticleCard