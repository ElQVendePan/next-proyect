"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const Navbar: React.FC = () => {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    }

    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  

  return (
    <nav className={`w-full py-5 text-center fixed top-0 left-0 border-b-2 border-transparent ${scrolled ? 'bg-zinc-900 border-zinc-800' : ''} duration-200`}>
        <Link href="/" className="p-1.5 px-4 mr-2.5 rounded-full bg-zinc-800 hover:bg-zinc-600 duration-200">Inicio</Link>
        <Link href="/destinos" className="p-1.5 px-4 mr-2.5 rounded-full bg-zinc-800 hover:bg-zinc-600 duration-200">Destinos</Link>
        <Link href="/pokedex" className="p-1.5 px-4 mr-2.5 rounded-full bg-zinc-800 hover:bg-zinc-600 duration-200">PokeDex</Link>
        <Link href="/contador" className="p-1.5 px-4 mr-2.5 rounded-full bg-zinc-800 hover:bg-zinc-600 duration-200">Contador</Link>
    </nav>
  )
}

export default Navbar