"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation"

export default function FormPost() {
  const [title, setTitle] = useState("")
  //Create a submit psot
  const router = useRouter()
  
  async function submitPost (e: React.FormEvent) {
    e.preventDefault()
    const data = await fetch(`/api/createPost`, {
      method: "POST",
      body: JSON.stringify({ title }),
    }
    ) 
    const res = await data.json()
    router.refresh()
    if (!res.ok){console.log(res)
     } }
  return(
  
  <form className=" bg-gray-500" onSubmit={submitPost}>
  <input className=" bg-gray-500"
    onChange={(e) => setTitle(e.target.value)}
    value={title}
    type="text"
  />
  <button type="submit">post</button>
  
  </form>
  

  )}