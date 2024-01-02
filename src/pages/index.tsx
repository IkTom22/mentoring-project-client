import React, { Fragment } from 'react';
import Image from 'next/image'
import DirectoryCard from '@/components/DirectoryCard';
import { dummyData } from '../../data/dummy';

import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import Select from 'react-select'


import HeroImage from '../../public/HeroImage.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() =>{
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/services`, {credentials: 'include',})
    .then((response) =>{
      if(response.ok){
        return response.json()
      }else {
        throw new Error("Unathorized")
      }
    })
    .then(data =>console.log(data))
    .catch(err =>console.error(err))
  },[])
 
  return (
    <main className='w-screen '>
      {/* HERO */}
      <section className='w-full py-6 flex items-center justify-center bg-pale-pink'>
        <div className='w-desktop h-[438px] flex items-center justify-between py-7'>
          <div className='w-[584px] h-[297px] flex flex-col gap-4  py-7 text-main-blue'>
            <h1 className='h-12'>The Impact Directory</h1>
            <p className='text-xl w-[558px] font-light '>Ākina’s Impact Directory is where you can find all of our certified Impact Suppliers. These organisations deliver a range of positive social, environmental, and culturaloutcomes through selling their products and services.</p>
            <button className='w-[558px] bg-main-blue uppercase px-4 pb-2  pt-3 font-light leading-6 text-white' >
              Learn more about our certification
            </button>
          </div>
          <div className=' relative w-[584px] h-[437px]'>
            <Image 
              src={HeroImage}
              alt="Akina hero image"
              style={{
                objectFit: "cover",
              }}
              fill
            />
          </div>
        </div>

      </section>
      {/* SEARCH SECTION */}
      <section className='w-screen bg-main-blue flex items-center justify-center py-6'>
        <div className='flex flex-col gap-4 w-desktop'>
          <input type="text" className='w-[100%] h-16 px-4 py-5'/>
          <div className='flex justify-between h-10'>
            <select name="Location" id="location" className='w-[330px] px-4 py-2'>
              <option value=""></option>
              <option value=""></option>
            </select>
            <select name="impact-area" id="impact-area" className='w-[330px] px-4 py-2' aria-label='Impact Area'>
              <option value="" disabled selected hidden className='text-light-gray'>Impact Area</option>
              <option value="A">A</option>
              <option value="B">B</option>
            </select>
            <select name="categories" id="categories" className='w-[330px] px-4 py-2'>
              <option value="c">C</option>
              <option value="d">D</option>
            </select>
            <div className='uppercase text-white border-2 border-white py-2 px-4'>
              Clear all filters
            </div>
          </div>
        </div>
      </section>
       {/* DIRECTORIES SECTION */} 
      <section className='w-screen flex justify-center pt-[88px]'>
        <div className='flex justify-between w-desktop'>
          <div className='flex flex-col gap-8'>
            {dummyData.map(d => {
              return(
              <Fragment key={d.name}>
                <DirectoryCard 
                  data={d}
                />  
              </Fragment>
            )})}  

          </div>
          <div className='flex flex-col gap-8'>
            {dummyData.map(d => {
              return(
              <Fragment key={d.name}>
                <DirectoryCard 
                  data={d}
                />  
              </Fragment>
            )})}  
          </div>
          <div className='flex flex-col gap-8'>
            {dummyData.map(d => {
              return(
              <Fragment key={d.name}>
                <DirectoryCard 
                  data={d}
                />  
              </Fragment>
            )})}  
          </div>  
        </div>
      </section>
      
      
    </main>
  )
}


// users/sign_in?email=test3@test.com&password=test123