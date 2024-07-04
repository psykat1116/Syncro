import Logo from '@/components/navbar/Logo'
import Search from '@/components/navbar/Search'
import Action from '@/components/navbar/Action'

const Navbar = () => {
  return (
    <nav className='fixed top-0 w-full h-20 z-[49] bg-[#252731] px-2 lg:px-4 flex justify-between items-center shadow-sm'>
      <Logo />
      <Search/>
      <Action/>
    </nav>
  )
}

export default Navbar