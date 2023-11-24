import React from 'react';
import images from "../../constants";

const Comment = ((comment)) => {
  return (
    <div className='flex flex-nowrap items-start gap-x-3 bg-[#F2F4F5] p-3 rounded-lg'>
        <img src={images[3]} alt="user profile" className='w-9 h-9 object-cover rounded-full' />

    </div>
  )
}

export default Comment