import React from 'react'
import flip from '../svg/flipkart-plus.png'
import plus from '../svg/plus_aef861.png'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { MoreDropdown, SignUpDropDown } from './Top';
import { MdShoppingCart } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import Arrow from '../svg/arrow.svg'
import Load from './Load';
import { Mobile } from '../data/Top'

function LoginTop() {
  return (
    <div className=' z-10 fixed w-screen h-[58px] py-2 bg-[#2874f0] flex justify-center items-center gap-2  ' >
      <Link to={'/'} className=' ms-3 grid' >
        <img src={flip} alt="" className='h-[21.11px]' />
        <Link to={'/'} className='flex w-[70px] text-[12px] italic -mt-1 gap-[2px] hover:underline text-white '>
          <p className=' font-semibold text-gray-300    ' >Explore</p>
          <p className='font-semibold  text-[#fbe913] '>Plus</p>
          <img src={plus} alt="plus" className='size-[8.8px] mt-1  ' />
        </Link>
      </Link >
      <div className='flex items-center h-[36px] bg-white gap-4 px-[14px] xl:w-[565px] justify-between' >
        <input type="text" placeholder='Search for product, brands and more' className='bg-transparent transition-all  placeholder:text-sm  xl:w-[565px]' />
        <FaSearch color='#2874f0' />
      </div>
      <div className='ms-6 flex items-center font-semibold text-[#2874f0] group'>
        <Link className='bg-white px-9 py-[3px]' >
          Login
        </Link>
        <div className='shadow-2xl absolute top-9  hidden group-hover:grid group-hover:text-black p-3 px-4 -ms-3 gap-3 w-72' >
          <div className=' flex h-5 w-5 bg-white -mb-14 justify-between rotate-45 rounded-sm'  ></div>
          <div className='  bg-white z-10 -mt-1 shadow-2xl absolute top-8  hidden group-hover:grid group-hover:text-black p-3 px-4 -ms-3 gap-3 w-72 ' >
            <SignUpDropDown />
          </div>
        </div>
      </div>

      <Link className='font-semibold ms-6 text-white' >
        Become a Seller
      </Link>
      <div className='flex items-center group gap-2 text-white p-[8px] font-semibold ms-6  rounded-md '>

        <p>More</p>
        <MdKeyboardArrowDown size={24} className=' group-hover:rotate-180 transition-all flex items-center' />
        <div className='shadow-2xl absolute top-9 h-screen w-screen  hidden group-hover:grid group-hover:text-black p-3 px-4 -ms-3 gap-3 ' >
          <div className=' flex h-5 w-5 bg-white -mb-14 justify-between rotate-45 rounded-sm'  ></div>
          <div className='rignt-50 bg-white z-10 -mt-1 shadow-2xl absolute top-8  hidden group-hover:grid group-hover:text-black p-3 px-4 -ms-3 gap-3 w-72 ' >
            <MoreDropdown />
          </div>
        </div>

      </div>
      <Link className='flex gap-1 text-white font-semibold items-center' >
        <MdShoppingCart color='white' size={20} /><h1  >Cart</h1>
      </Link>
    </div>
  )
}


//hire i create second top which is going to login pg
export const TopTwo = () => {
  return (
    <div className='flex text-[14px] font-medium bg-white items-center gap-[52px] h-[40px] justify-center '>

      <div className='flex h-[40px] gap-2 items-center group hover:text-[#2874f0]' >
        <Link className='' >Electronics</Link>
        <img src={Arrow} alt="g" className='flex -rotate-90  mt-[2px] group-hover:rotate-90 size-3 transition-all' />
        <div className=' z-10 shadow-inner bg-white absolute h-[520px] hidden top-[100px] group-hover:flex group-hover:text-black p-3 px-4 -ms-3  ' >
         <div className=' grid' >
          {Mobile.map((Mobile, index) => (
            
            <Load
              key={index}
              Mobile={Mobile}
              
            />
            
            
            
          ))}
          {Mobile.map((Mobile, index) => (
            
            <Load
              key={index}
              Mobile={Mobile}
              
            />
            
            
            
          ))}
          </div>
          <div className=' grid bg-black' >
          {Mobile.map((Mobile, index) => (
            
            <Load
              key={index}
              Mobile={Mobile}
              
            />
            
            
          ))}
          </div>
          



        </div>
      </div>

      <div className='flex h-[40px] gap-2 items-center group hover:text-[#2874f0] ' >
        <p className='' >TVs & Appliances</p>
        <img src={Arrow} alt="" className='flex -rotate-90  mt-[2px] group-hover:rotate-90 transition-all fill-blue-400 group-hover:cursor-pointer	' />
      </div>

      <div className='flex h-[40px] gap-2 items-center group hover:text-[#2874f0] ' >
        <p className='' >Men</p>
        <img src={Arrow} alt="" className='flex -rotate-90  mt-[2px] group-hover:rotate-90 transition-all' />
      </div>

      <div className='flex h-[40px] gap-2 items-center group hover:text-[#2874f0] ' >
        <p className='' >Women</p>
        <img src={Arrow} alt="" className='flex -rotate-90  mt-[2px] group-hover:rotate-90 transition-all' />
      </div>

      <div className='flex h-[40px] gap-2 items-center group hover:text-[#2874f0] ' >
        <p className='' >Baby & Kids</p>
        <img src={Arrow} alt="" className='flex -rotate-90  mt-[2px] group-hover:rotate-90 transition-all' />
      </div>

      <div className='flex h-[40px] gap-2 items-center group hover:text-[#2874f0] ' >
        <p className='' >Home & Furniture</p>
        <img src={Arrow} alt="" className='flex -rotate-90  mt-[2px] group-hover:rotate-90 transition-all' />
      </div>

      <div className='flex h-[40px] gap-2 items-center group hover:text-[#2874f0] ' >
        <p className='' >Sports, Books & More
        </p>
        <img src={Arrow} alt="" className='flex -rotate-90  mt-[2px] group-hover:rotate-90 transition-all' />
      </div>


      <Link className='' >Flights</Link>
      <Link className=''>Offer Zone</Link>



    </div>
  )
}


export default LoginTop
