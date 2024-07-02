import React from 'react'
import Logo from '../navbar/Logo'
import Action from './Action'

const Navbar = () => {
  return (
    <nav className='fixed top-0 w-full h-20 z-[49] bg-[#252731] px-2 lg:px-4 flex justify-between items-center shadow-sm'>
      <Logo />
      <Action />
    </nav>
  )
}

export default Navbar