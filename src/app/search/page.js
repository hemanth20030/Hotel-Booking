'use client';
import React from 'react'
import  Header  from '../Components/Header'
import Footer from '../Components/Footer'
import Router from 'next/router';
import { useRouter } from 'next/navigation';
import searchjson from '../Components/file3'
import Infocard from '../Components/infocard';
function page() {
  console.log(searchjson);
   const router=useRouter();

  return (
    <div>
      <Header/>
       <main>
        <section className='flex-grow pt-14 px-6 bg-white'>
          <p className='text-xs font-semibold mt-2 mb-6 '> 300+ Stays </p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays Available</h1>
          <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='px-4 py-2 border rounded-full hover:shadow-lg active:scale-95 active:bg-gray-100 transition  duration-100 ease-out'>Cancellation Flexibility</p>
            <p className='px-4 py-2 border rounded-full hover:shadow-lg active:scale-95 active:bg-gray-100 transition duration-100 ease-out'>Type of Place</p>
            <p className='px-4 py-2 border rounded-full hover:shadow-lg active:scale-95 active:bg-gray-100 ease-out'>Price</p>
            <p className='px-4 py-2 border rounded-full hover:shadow-lg active:scale-95 active:bg-gray-100 ease-out'>Rooms and Beds</p>
            <p className='px-4 py-2 border rounded-full hover:shadow-lg active:scale-95 active:bg-gray-100 ease-out'>More filters</p>
          </div>


          {searchjson.map(({img,location,description,star,title,price,total})=>(
          <div>
                <Infocard
                key={img}
                img={img}
                location={location}
                title={title}
                description={description}
                star={star}
                price={price}
                total={total}
                />
          </div>
           
          ))}
        </section>

       </main>
      <Footer/>
          
    </div>
  )
}

export default page

// export async function getStaticProps() {
//   const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS').then(res => res.json());
  
//   return {
//     props: {
//       searchResults,
//     },
//   };
// }