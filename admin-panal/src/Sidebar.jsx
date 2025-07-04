import React from 'react'
import { Link } from 'react-router'

const Sidebar = () => {
  return (
    <div>
        {/* <!-- Sidebar Component --> */}
<aside className="w-1/5 bg-[#23282d] !text-white fixed top-16 left-0 flex flex-col shadow-lg"
  style={{ height: 'calc(100vh - 4rem)', overflowY: 'auto', scrollbarWidth: 'thin' }}>
  <div className="flex flex-col items-center py-8 border-b border-[#32373c]">
    <div className="w-14 h-14 bg-[#00a0d2] rounded-full flex items-center justify-center mb-2">
      <img src="logo.svg" alt="Site Logo" className="w-10 h-10 object-contain" />
    </div>
    <div className="flex flex-col items-center">
      <span className="text-white font-bold text-lg">Your Groovy Site</span>
      <span className="text-xs text-[#00a0d2]">yourgroovysite.com</span>
    </div>
    <div className="mt-3 text-[#00a0d2] text-2xl"><span className="oi oi-globe"></span></div>
  </div>
  <ul className="flex flex-col gap-1 mt-4 px-2">
    <li className="nav-item active">
      <Link to="/home" className="flex items-center px-4 py-2 text-lg hover:bg-[#32373c] hover:text-[#00a0d2] rounded transition font-medium">
        <span className="w-8 h-8 flex items-center justify-center text-xl opacity-80 mr-3"><span className="oi oi-home"></span></span>
        My Home
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/stats" className="flex items-center px-4 py-2 text-lg hover:bg-[#32373c] hover:text-[#00a0d2] rounded transition font-medium">
        <span className="w-8 h-8 flex items-center justify-center text-xl opacity-80 mr-3"><span className="oi oi-bar-chart"></span></span>
        Stats
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/upgrades" className="flex items-center px-4 py-2 text-lg hover:bg-[#32373c] hover:text-[#00a0d2] rounded transition font-medium">
        <span className="w-8 h-8 flex items-center justify-center text-xl opacity-80 mr-3"><span className="oi oi-arrow-thick-top"></span></span>
        Upgrades
        <span className="ml-auto bg-[#f56e28] text-white text-xs px-2 py-0.5 rounded font-semibold ml-2">Premium</span>
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/mailboxes" className="flex items-center px-4 py-2 text-lg hover:bg-[#32373c] hover:text-[#00a0d2] rounded transition font-medium">
        <span className="w-8 h-8 flex items-center justify-center text-xl opacity-80 mr-3"><span className="oi oi-envelope-closed"></span></span>
        My Mailboxes
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/posts" className="flex items-center px-4 py-2 text-lg hover:bg-[#32373c] hover:text-[#00a0d2] rounded transition font-medium">
        <span className="w-8 h-8 flex items-center justify-center text-xl opacity-80 mr-3"><span className="oi oi-pencil"></span></span>
        Posts
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/media" className="flex items-center px-4 py-2 text-lg hover:bg-[#32373c] hover:text-[#00a0d2] rounded transition font-medium">
        <span className="w-8 h-8 flex items-center justify-center text-xl opacity-80 mr-3"><span className="oi oi-image"></span></span>
        Media
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/pages" className="flex items-center px-4 py-2 text-lg hover:bg-[#32373c] hover:text-[#00a0d2] rounded transition font-medium">
        <span className="w-8 h-8 flex items-center justify-center text-xl opacity-80 mr-3"><span className="oi oi-document"></span></span>
        Pages
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/portfolio" className="flex items-center px-4 py-2 text-lg hover:bg-[#32373c] hover:text-[#00a0d2] rounded transition font-medium">
        <span className="w-8 h-8 flex items-center justify-center text-xl opacity-80 mr-3"><span className="oi oi-briefcase"></span></span>
        Portfolio
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/testimonials" className="flex items-center px-4 py-2 text-lg hover:bg-[#32373c] hover:text-[#00a0d2] rounded transition font-medium">
        <span className="w-8 h-8 flex items-center justify-center text-xl opacity-80 mr-3"><span className="oi oi-comment-square"></span></span>
        Testimonials
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/comments" className="flex items-center px-4 py-2 text-lg hover:bg-[#32373c] hover:text-[#00a0d2] rounded transition font-medium">
        <span className="w-8 h-8 flex items-center justify-center text-xl opacity-80 mr-3"><span className="oi oi-comment-square"></span></span>
        Comments
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/feedback" className="flex items-center px-4 py-2 text-lg hover:bg-[#32373c] hover:text-[#00a0d2] rounded transition font-medium">
        <span className="w-8 h-8 flex items-center justify-center text-xl opacity-80 mr-3"><span className="oi oi-bullhorn"></span></span>
        Feedback
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/jetpack" className="flex items-center px-4 py-2 text-lg hover:bg-[#32373c] hover:text-[#00a0d2] rounded transition font-medium">
        <span className="w-8 h-8 flex items-center justify-center text-xl opacity-80 mr-3"><span className="oi oi-flash"></span></span>
        Jetpack
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/woocommerce" className="flex items-center px-4 py-2 text-lg hover:bg-[#32373c] hover:text-[#00a0d2] rounded transition font-medium">
        <span className="w-8 h-8 flex items-center justify-center text-xl opacity-80 mr-3"><span className="oi oi-cart"></span></span>
        WooCommerce
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/appearance" className="flex items-center px-4 py-2 text-lg hover:bg-[#32373c] hover:text-[#00a0d2] rounded transition font-medium">
        <span className="w-8 h-8 flex items-center justify-center text-xl opacity-80 mr-3"><span className="oi oi-aperture"></span></span>
        Appearance
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/plugins" className="flex items-center px-4 py-2 text-lg hover:bg-[#32373c] hover:text-[#00a0d2] rounded transition font-medium">
        <span className="w-8 h-8 flex items-center justify-center text-xl opacity-80 mr-3"><span className="oi oi-plug"></span></span>
        Plugins
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/users" className="flex items-center px-4 py-2 text-lg hover:bg-[#32373c] hover:text-[#00a0d2] rounded transition font-medium">
        <span className="w-8 h-8 flex items-center justify-center text-xl opacity-80 mr-3"><span className="oi oi-people"></span></span>
        Users
      </Link>
    </li>
  </ul>
</aside>

    </div>
  )
}

export default Sidebar
