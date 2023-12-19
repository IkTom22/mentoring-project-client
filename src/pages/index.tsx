import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [email, setEmail] =useState("")
  const [password, setPassword] = useState("")
  useEffect(() =>{
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/services`).then((response) =>response.json()).then(data =>console.log(data))
  },[])
  function handleSubmit (e){
    // console.log(e)
    e.preventDefault()
    console.log(`Email: ${email}, Password: ${password}`)
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/sign_in?email=${email}&password=${password}`, {method: 'POST', credentials: 'include',}).then((response) =>response.json()).then(data =>console.log(data))
    
  }
  return (
    <main>
      <h1>The Impact Directory</h1>
      <form className='flex flex-col max-w-4xl gap-2'>
        <input className='border-2' type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input className='border-2' type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Login</button>
      </form>
    </main>
  )
}


// users/sign_in?email=test3@test.com&password=test123