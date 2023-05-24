import React from 'react'
import Image from 'next/legacy/image'
function Smallcard({img,distance,location}) {
  return (
    <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer'>
        <div className='relative h-16 w-16'>
            <Image src={img}
            layout='fill'
            className='rounded-lg'/>
        </div>

        <div>
            <h2>{location}</h2>
            <h3>{distance}</h3>
        </div>
     
    </div>
  )
}

export default Smallcard
