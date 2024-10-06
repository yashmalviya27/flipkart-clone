import React from 'react';
import Top from './Top';
import Img from './Img';
import Product1 from './Product1';
import Footer from './Footer';

function Main() {
  return (
    <div className=' h-full
     overflow-y-scroll flex flex-col justify-between no-scrollbar'>
      <div>

    <div>
      <Top />
    </div>
     
      <div className='px-5 mt-[70px]'>
      <Product1/>
       {/* <Img/> */}
      </div>
      </div>
      <div className=' pt-5 flex items-baseline align-bottom' >

       <Footer color={'#212121'} />
      </div>
    </div>
  );
}

export default Main;
