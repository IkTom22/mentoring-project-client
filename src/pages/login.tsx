import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import{useRouter} from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  const [email, setEmail] =useState("")
  const [password, setPassword] = useState("")
  
  const router = useRouter()
  // @ts-ignore
  function handleSubmit (e){
    e.preventDefault()
    console.log(`Email: ${email}, Password: ${password}`)
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/sign_in?email=${email}&password=${password}`, {method: 'POST', credentials: 'include',}).then((response) =>response.json()).then(data => router.push('/'))
    
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