import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'

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
    <main>
      <h1>The Impact Directory</h1>
      
    </main>
  )
}


// users/sign_in?email=test3@test.com&password=test123