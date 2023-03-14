
import { Inter } from '@next/font/google'

import Link from 'next/link'
import FormPost from './form'
import { useRouter } from 'next/navigation'
async function getPosts() {
  const cacheBuster = new Date().getTime()
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts?cacheBuster=${cacheBuster}`, {
    headers: {
      'Cache-Control': 'no-cache'
    }
  })
  
  if(!res.ok) {
    console.log(res)
  }
  return res.json()
}

export default async function Home() {
  const data : { id: number; title: string }[] = await getPosts()

  console.log(data)

  return (
    <div className=' h-full bg-blue-500'>

        <Link href={"/dashboard"}> dashboard</Link>
      <main className=' bg-black h-screen text-green-500'>
        <FormPost/>
        {data.map((post) => ( 
          <h1 key={post.id}>{post.title}</h1> 
          ))}
      </main>
          </div>
    
  )
}
