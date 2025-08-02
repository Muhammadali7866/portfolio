import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import logo from "../assets/raviKumarLogo.webp"
export const Navbar = () => {
  return (
    <nav className='flex justify-between items-center py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <a href="/" aria-label='Home' ><img src={logo} alt="Logo" height={33} width={50} /></a>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/muhammadslinkdin" target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
          <FaLinkedin />
        </a>
        <a href="https://www.github.com/Muhammadali7866" target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
          <FaGithub />
        </a>

        <a href="https://www.leetcode.com/u/malikali8157/" target='_blank' rel='noopener noreferrer' aria-label='LeetCode'>
          <SiLeetcode />
        </a>

      </div>
    </nav>
  )
}
