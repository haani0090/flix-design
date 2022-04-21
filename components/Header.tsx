import Image from 'next/image'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import useAuth from '../hooks/useAuth'

function Header() {
    const  [isScrolled, setIsScrolled] = useState(false)
    const {logout} = useAuth()
    useEffect (() =>{
      const  handleScroll = () =>{
          if(window.scrollY > 0){
              setIsScrolled(true)
          }else {
              setIsScrolled(false)
          }
      }
      window.addEventListener('scroll' ,handleScroll)
      return ()=>{
          window.removeEventListener('scroll', handleScroll)
      }
    },[])
  return (
      <header className = {`${isScrolled  &&'bg-black'}`}>
           <div className='flex items-center space-x-2 md:space-x-10'>
      <img
        src="https://rb.gy/ulxxee"
        width={100}
        height={100}
        className="cursor-pointer object-contain"
      />
      <ul className='hidden space-x-4 md:flex'>
        <li className='header-link'>Made </li>
        <li className='header-link'>With</li>
        <li className='header-link'> 💝 </li>
        <li className='header-link'> By </li>
        <li className='header-link'>h a n i i 🚀 </li>
      </ul>
    </div>
    <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="sm hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
          <img
          onClick = {logout}
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        
      </div>
      


      </header>
      
   
    
  )
}

export default Header
