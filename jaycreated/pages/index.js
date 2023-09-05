import Image from 'next/image';
import { useState, useEffect } from "react";
import { Inter } from 'next/font/google'
import Home from '../pages/home'

const inter = Inter({ subsets: ['latin'] })

const Index = () => {
  return (
    <main className="min-h-screen">
      <Home />
    </main>
  )
}

export default Index
