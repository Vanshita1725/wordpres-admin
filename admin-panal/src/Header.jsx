import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div>   
<header className="w-full fixed top-0 left-0 right-0 z-50 bg-[#23282d] !text-white flex items-center justify-between px-8 h-20 shadow-lg text-xl">
  <div className="flex items-center gap-8">
    <div className="w-14 h-14 bg-[#00a0d2] rounded-full flex items-center justify-center font-bold text-white text-2xl">
      <img src="logo.svg" alt="Logo" className="w-10 h-10 object-contain" />
    </div>
    <Link className="font-bold !text-white text-2xl hover:text-[#00a0d2]">Your Groovy Site</Link>
    <Link className="flex items-center gap-2 bg-[#0073aa] hover:bg-[#005a87] !text-white px-5 py-2 rounded text-lg font-semibold transition"><i className="fa-solid fa-plus"></i>New</Link>
  </div>
  <nav className="flex items-center gap-8">
    <Link title="View Comments" className="hover:text-[#00a0d2] text-2xl  !text-white"><i className="fa-solid fa-glasses"></i></Link>
    <Link title="Help" className="hover:text-[#00a0d2] text-2xl  !text-white"><i className="fa-solid fa-circle-question"></i></Link>
    <Link title="Notifications" className="hover:text-[#00a0d2] text-2xl  !text-white"><i className="fa-solid fa-bell"></i></Link>
    <Link className="user-menu font-semibold hover:text-[#00a0d2] flex items-center gap-2  !text-white">Howdy, User <i className="fa-solid fa-user"></i></Link>
  </nav>
</header>
    </div>
  )
}

export default Header
