import React from 'react'
import { contactUsEmail } from '@/lib/data'
import { FaTiktok, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import {instagramLink} from '@/lib/data'
import {xLink} from '@/lib/data'
import {tiktokLink} from '@/lib/data'



const Footer = () => {
  return (

    <footer>
      <div className=" bg-black text-white">
        <div className='flex flex-col gap-5 items-start p-10'>
          <img src="/LogoFooter.png" alt="" />
          <div>
            <p className=' text-2xl font-bold'>Contact Us</p>
            <p className=' text-gray-400'>{contactUsEmail}</p>
          </div>
          <div>
            <div className='flex gap-4'>
              <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                <FaInstagram className='text-4xl'/>
              </a>
              <a href={xLink} target="_blank" rel="noopener noreferrer">
                <FaXTwitter className='text-4xl'/>
              </a>
              <a href={tiktokLink} target="_blank" rel="noopener noreferrer">
                <FaTiktok className='text-4xl'/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer