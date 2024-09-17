'use client'
import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [hoverTelegram, setHoverTelegram] = useState(false)
  const [hoverEmail, setHoverEmail] = useState(false)

  return (
    <div className="min-h-screen bg-[#132647] text-white flex flex-col justify-center items-center font-['Montserrat']">
      <Head>
        <title>IT Support Assistant - Minerva University</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </Head>

      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4">IT Support Assistant</h1>
        <p className="text-xl mb-8">Hardware Technical Issues Support for Dorm</p>
        
        <div className="space-y-4">
          <a 
            href="https://t.me/arla6ka" 
            className={`bg-blue-500 text-white font-bold py-2 px-4 rounded inline-block w-64 transition-all duration-300 ease-in-out transform ${hoverTelegram ? 'scale-110 bg-blue-600' : ''}`}
            onMouseEnter={() => setHoverTelegram(true)}
            onMouseLeave={() => setHoverTelegram(false)}
          >
            Contact via Telegram
          </a>
          <br />
          <a 
            href="mailto:arlan.marat@uni.minerva.edu" 
            className={`bg-green-500 text-white font-bold py-2 px-4 rounded inline-block w-64 transition-all duration-300 ease-in-out transform ${hoverEmail ? 'scale-110 bg-green-600' : ''}`}
            onMouseEnter={() => setHoverEmail(true)}
            onMouseLeave={() => setHoverEmail(false)}
          >
            Contact via Email
          </a>
        </div>
      </main>

      <footer className="mt-8 text-gray-400">
        Made by Arlan Marat M28
      </footer>
    </div>
  )
} 