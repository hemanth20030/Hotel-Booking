'use client'
import React from 'react';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Smallcard from './Components/Smallcard';
import jsonData from './Components/file1';
import cardsjson from './Components/cards1' 
import MediumCards from './Components/MediumCards';
import LargeCard from './Components/LargeCard';
import Footer from './Components/Footer';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ProgressBar from '@ramonak/react-progress-bar';
import Router from 'next/router';



export default function Page() {

  const progress = new ProgressBar({
    size:4,
    color:"#FE595E",
    delay:100,
    className:'z-50',
  })
  Router.events?.on("routeChangeStart",progress.start);
  Router.events?.on('routeChangeComplete',progress.finish);
Router.events?.on('routeChangeError',progress.finish);
  console.log('exploreData:', cardsjson);
  return (
    <div className='main'>
      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4'>
          {jsonData?.map(({ img, location, distance }) => (
            <Smallcard img={img} location={location} distance={distance} key={img} />
          ))}
          </div>
          
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
          {cardsjson?.map((item)=>(
           <MediumCards keys={item.img} img={item.img} title={item.title}/>
          ))}
          </div>
        </section>

        <LargeCard 
        img="https://links.papareact.com/4cj"
        title="The Greatest Outdoors"
        description="wishlists curated by Airbnb."
        buttonText="GetInspired"
        />
      </main>

      <Footer />
    
   
     

    </div>
    
  );
}

// export async function getStaticProps() {
//   const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT').then(res => res.json());
  
//   return {
//     props: {
//       cardsData,
//     },
//   };
// }
