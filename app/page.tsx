
import { Inter } from '@next/font/google'

import Link from 'next/link'
import FormPost from './form'
import { useRouter } from 'next/navigation'
async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`)
  
  if(!res.ok) {
    console.log(res)
  }
  return res.json()
}
export default async function Home() {
  

const data : { id: number; title: string }[] = await getPosts()

console.log(data)
  return (<>
    <main className=' bg-black h-screen text-yellow-100'>
<FormPost/>
{data.map((post) => ( 
  <h1 key={post.id}>{post.title}</h1> 
  ))}
  </main>
<Link href={"/dashboard"}> dashboard</Link>
  </>
  )
}
