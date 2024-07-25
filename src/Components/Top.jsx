import React from 'react'
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { MdKeyboardArrowDown } from "react-icons/md";
import Odd from '../svg/Odd.svg'
import Order from '../svg/Order.svg'
import WishLinkst from '../svg/WishLinkst.svg'
import Rewards from '../svg/Rewards.svg'
import Gift from '../svg/Gift.svg'
import Profil from '../svg/Profil.svg'
import Cart from '../svg/Cart.svg'
import Seller from '../svg/Seller.svg'
import Three from '../svg/Three.svg'
import Notifition from '../svg/Notifition.svg'
import Flipkart from '../svg/Flipkart.svg'
import Customer from '../svg/Customer.svg'
import Advertise from '../svg/Advertise.svg'
import Download from '../svg/Download.svg'
import { Link } from 'react-router-dom';

function Top() {
    return (

        <div className='flex p-2 py-3 items-center gap-7 bg-white ' >
            <Link to={'/'}>
                <img src={Flipkart} alt="" />
            </Link >
            <div
                className='bg-[#f0f5ff] transition-all rounded-lg flex items-center px-2 '
            >
                <CiSearch size={24} />
                <input type="text"
                    placeholder='Search For Product, Brands and More'
                    className=' place-items-start placeholder:text-lg placeholder:text-[#7a7d81]  hover:border-none md:w-[748px] w-ayto  transition-all h-[38px] bg-transparent  px-2  rounded-md outline-0'
                />
            </div>
            <Link to={'/login'} className='flex items-center group gap-2 hover:bg-blue-600 hover:text-white p-[8px]  rounded-md '>
                <VscAccount size={24} className='' />
                <p>Login</p>
                <MdKeyboardArrowDown size={24} className=' group-hover:rotate-180 transition-all flex items-center' />
                <div className='  bg-white shadow-2xl absolute top-12 hidden group-hover:grid group-hover:text-black p-3 px-4 -ms-3 gap-3 w-72 ' >
                    <SignUpDropDown />
                </div>

            </Link>
            <div className='flex items-center' >
                <Link className='flex gap-2 items-center' ><img src={Cart} />Cart</Link>
            </div>
            <div>
                <Link className='flex gap-2 items-center'>
                    <img src={Seller} alt="" />
                    Become a Seller
                </Link>
            </div>
            <div className='group hover:bg-gray-200 rounded-lg hover:shadow-md p-2'>
                <Link className='flex gap-2 items-center '>
                    <img src={Three} />
                </Link>
                <div className='  bg-white shadow-2xl absolute top-12 hidden group-hover:grid group-hover:text-black  right-6 gap-3 w-56 py-3 px-2 ' >
                    <MoreDropdown />
                </div>

            </div>

        </div>
    )
}

export const SignUpDropDown = () => {
    return (
        <>
            <Link to={'/login'} className='flex justify-between'>New Customer? <div className='text-blue-600 font-bold' >Sign Up</div></Link>
            <hr className=' bg-gray-500 soli' />
            <Link className='flex gap-2 items-center' ><img src={Profil} />My Profile</Link>
            <Link className='flex gap-2 items-center' ><img src={Odd} />FLinkpkart Plus Zone</Link>
            <Link className='flex gap-2 items-center' ><img src={Order} />Orders</Link>
            <Link className='flex gap-2 items-center' ><img src={WishLinkst} />WishLinkst</Link>
            <Link className='flex gap-2 items-center' ><img src={Rewards} />Rewards</Link>
            <Link className='flex gap-2 items-center' ><img src={Gift} />Gift Card</Link>
        </>
    )
}

export const MoreDropdown = () => {
    return (
        <>
            <Link className='flex gap-2 items-center' ><img src={Notifition} />Notification Preferences</Link>
            <Link className='flex gap-2 items-center' ><img src={Customer} />24x7 Customer Care</Link>
            <Link className='flex gap-2 items-center' ><img src={Advertise} />Advertise</Link>
            <Link className='flex gap-2 items-center' ><img src={Download} />Download App</Link>
        </>
    )
}

export default Top
