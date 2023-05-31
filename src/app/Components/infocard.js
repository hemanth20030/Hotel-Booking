import React from 'react'
import Image from 'next/legacy/image'
import { HeartIcon, StarIcon } from '@heroicons/react/solid'
function infocard({img,location,title,description,star,price,total}) {
  return (
    <div className='flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg
    transition duration-200 ease-out first:border-t
    

    '>
       <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-8'>
        
       <Image className='space-y-4 rounded-2xl
       hover:scale-105
       transform transition duration-300 ease-out
       ' src={img} layout='fill' objectFit='cover'/>
       </div>

       <div className='flex flex-col flex-grow pl-5'>
         <div className='flex justify-between'>
          <p>
            {location}
          </p>
          <HeartIcon  className='h-7 cursor-pointer text-red-400'/>
         </div>Stays in Mars
         

         <h4 className='text-xl'>{title}</h4>
         <div className='border-b w-10 pt-2'></div>
         <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>
         <div className='flex justify-between items-end pt-5'>
          <p className='flex items-center'>
            <StarIcon className='h-5 text-red-400'/>
            {star}
          </p>

          <div >
              <p className='text-lg font-semibold pt-5'>{price}</p>
              <p className='text-right font-extra
              '>{total}</p>
          </div>
         </div>
       </div>
    </div>
  )
}

export default infocard
