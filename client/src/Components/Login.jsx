import React from 'react';
import flip from '../svg/flipkart-plus.png';
import plus from '../svg/plus_aef861.png';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { MoreDropdown, SignUpDropDown } from './Top';
import { MdShoppingCart } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import LoginTop, { TopTwo } from './LoginTop';
import login from '../svg/login.png';
import Footer from './Footer';

function Login() {
  return (
    <div className='w-full  h-full overflow-x-hidden overflow-y-auto no-scrollbar'>
      <LoginTop />
      <div className='  pt-[60px] shadow-sm'>
        <TopTwo />
      </div>
      <div className='pt-4 flex justify-center'>
        <div className='w-[336px] h-[528px] bg-[#2874f0] text-white'>
          <img src={login} alt="" className='size-full' />
        </div>
        <div className='w-[504px] h-[528px] bg-white px-[35px] pt-[56px] pb-[16px]'>
          <div>
            <div className="relative z-0">
              <input
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none peer"
                placeholder=" "
              />
              <label
                className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              > Enter Mail/Mzobile Number
              </label>
            </div>
          </div>
          <div className='mt-7'>
            <p className='text-[12px] text-[#878787]'>By continuing, you agree to Flipkart's <Link to={'/terms'} className='text-[#2874f0]'>Terms of Use</Link> and <Link>Privacy Policy.</Link></p>
          </div>
          <button className='w-full text-white py-3 mt-3 rounded-sm font-semibold bg-[#fb641b]'>
            Request OTP
          </button>
          <Link to={'/signUp'} className='w-full text-[#2874f0] text-[14px] flex justify-center font-semibold mt-[17rem]'>
            New to Flipkart? Create an account
          </Link>
        </div>
      </div>
      <div className='pt-5'>

      <Footer  color={'#172337'} />
      </div>
    </div>
  );
}

export default Login;
