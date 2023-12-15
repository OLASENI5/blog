/* eslint-disable react/prop-types */
import React from 'react';
import { FaCheck } from 'react-icons/fa6';
import { AiOutlineClose } from 'react-icons/ai';
import images from '../constants/images'; // Import the images module
import stables from '../constants/stables';

const ArticleCard = ({ post, className }) => {
  return (
    <div className={`rounded-xl overflow-hidden shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] ${className}`}>
      <img
        src={"https://blog-six-flax-11.vercel.app/assets/Content-fccffd88.png"
        }
        alt="title"
        className='object-center md:h-52 lg:h-48 xl:h-60'
      />
      <div className='p-5'>
        {/* ... (rest of the component remains the same) ... */}
      </div>
    </div>
  );
};

export default ArticleCard;
