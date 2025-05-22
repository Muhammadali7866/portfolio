import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../assets/raviKumarLogo.webp"
export const Navbar = () => {
  return (
    <nav className='flex justify-between items-center py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <a href="/" aria-label='Home' ><img src={logo} alt="Logo" height={33} width={50} /></a>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="" target='_blank' rel='noopener norefernce' aria-label='Linkdin'>
          <FaLinkedin />
        </a>
        <a href="" target='_blank' rel='noopener norefernce' aria-label='Linkdin'>
          <FaGithub />
        </a>

        <a href="" target='_blank' rel='noopener norefernce' aria-label='Linkdin'>
          <FaInstagram />
        </a>

        <a href="" target='_blank' rel='noopener norefernce' aria-label='Linkdin'>
          <FaTwitter />
        </a>


      </div>
    </nav>
  )
}
