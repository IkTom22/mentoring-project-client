import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() =>{
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/services`).then((response) =>response.json()).then(data =>console.log(data))
  },[])

  return (
    <main>
      <h1>The Impact Directory</h1>
    </main>
  )
}
