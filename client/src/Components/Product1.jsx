import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Electronics from '../svg/Electronics.webp';
import Grocery from '../svg/Grocery.webp';
import Movile from '../svg/Mobiles.webp';
import Fashion from '../svg/Fashion.webp';
import HomeFurniture from '../svg/HomeFurniture.webp';
import Arrow from '../svg/arrow.svg';

const data = [
  {
   
    img: Grocery,
    url: "/product/grocery",
    title: "Grocery",
  },
  {
   
    img: Movile,
    url: "/product/movile",
    title: "Movile",
  },
  {
   
    img: Fashion,
    url: "/product/fashion",
    title: "Fashion",
  },
  {

    img: Electronics,
    url: "/product/electronics",
    title: "Electronics",
    Arrow: <img src={Arrow} className='flex -rotate-90 mt-[2px] group-hover:rotate-90 size-3 transition-all' />,
  },
  {
   
    img: HomeFurniture,
    url: "/product/home-furniture",
    title: "Home & Furniture",
    Arrow: <img src={Arrow} className='flex -rotate-90 mt-[2px] group-hover:rotate-90 size-3 transition-all' />,
  },
  {
   
    img: HomeFurniture,
    url: "/product/home-furniture",
    title: "Home & Furniture",
    Arrow: <img src={Arrow} className='flex -rotate-90 mt-[2px] group-hover:rotate-90 size-3 transition-all' />,
  },
];

function Product1() {
  return (
    <div className='h-[128px] bg-white justify-center items-center flex w-full group'>
      {data.map((item) =>(
         <Link>
             <div className='h-[128px] grid p-4 items-center justify-center'>
               <div className='h-16 w-full flex justify-center mb-3'>
                 <img src={item.img} alt={item.title} className='size-16' />
               </div>
               <div className='flex -mt-2 justify-center'>
                 {item.title}
               </div>
             </div>
           </Link>
      ))}
    </div>
  );
}

export default Product1;

// {data.map((item) => (
//   <Link 
//     key={item.id} 
//     to={item.url} 
//     onMouseEnter={() => setHoveredItem(item.id)}
//   >
//     <div className='h-[128px] grid p-4 items-center justify-center'>
//       <div className='h-16 w-full flex justify-center mb-3'>
//         <img src={item.img} alt={item.title} className='size-16' />
//       </div>
//       <div className='flex -mt-2 justify-center'>
//         {item.title}
//         {hoveredItem === item.id && item.Arrow}
//       </div>
//     </div>
//   </Link>
// ))}