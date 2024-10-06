import React from 'react'

function Footer({ color }) {
  return (
    <div >
      <div className='h-80 w-screen '
        style={{ backgroundColor: color }}>
        <div className='px-16 flex justify-between h-[12.813rem] pt-10' >


          <div className='h-[12.813rem] flex flex-col gap-[2px]' >
            <div className=' font-semibold mb-3 text-xs text-[#878787]' >
              ABOUT
            </div>
            {ABOUT.map((data) => (
              <div className='text-xs font-bold text-white flex' >{data.name}</div>
            ))}
          </div>

          <div className='flex h-[12.813rem] flex-col gap-[2px]' >
            <div className=' font-semibold mb-3 text-xs text-[#878787]' >
              ABOUT
            </div>
            {GROUPcOMPANIES.map((data) => (
              <div className='text-xs font-bold text-white flex' >{data.name}</div>
            ))}
          </div>
          <div className='flex flex-col gap-[2px]' >
            <div className=' font-semibold mb-3 text-xs text-[#878787]' >
              ABOUT
            </div>
            {HELP.map((data) => (
              <div className='text-xs font-bold text-white flex' >{data.name}</div>
            ))}
          </div>
          <div className='flex h-[12.813rem] flex-col gap-[2px]' >
            <div className=' font-semibold mb-3 text-xs text-[#878787]' >
              ABOUT
            </div>
            {ABOUT.map((data) => (
              <div className='text-xs font-bold text-white flex' >{data.name}</div>
            ))}
          </div>
          <div className='flex h-[12.813rem] justify-between gap-10' >
            <div className='w-[2px] h-[12.813rem] bg-[#2e3138]' ></div>
          <div className='flex text-xs flex-col w-[17.938rem] text-white gap-[2px]' >
            <div className=' font-semibold mb-3 text-[#878787]' >
            Mail Us:
            </div>
            <div className='text-xs font-semibold  text-white flex flex-col' >
              <p>Flipkart Internet Private Limited, </p>
              <p> Buildings Alyssa,Begonia &</p>
              <p>Clove Embassy Tech Village,</p>
              <p>Outer Ring Road,Devarabeesanahalli Village,</p>
              <p>Bengaluru, 560103,</p>
              <p>Karnataka, India</p>
                    
            </div>
          </div>
          <div className='flex flex-col gap-[2px]' >
            <div className=' font-semibold mb-3 text-xs text-[#878787]' >
            Registered Office Address:
            </div>
        
              <div className='text-xs font-semibold text-white flex flex-col' >
                <p>Flipkart Internet Private Limited, </p>
                <p> Buildings Alyssa, Begonia & </p>
                <p> Clove Embassy Tech Village, </p>
                <p> Outer Ring Road, Devarabeesanahalli Village, </p>
                <p> Bengaluru, 560103, </p>
                <p> Karnataka, India </p>
                <p> CIN : U51109KA2012PTC066107 </p>
                <p> Telephone: </p>
              </div>
           
          </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
const ABOUT = [
  {
    name: 'Contact Us',
    url: '',
  },
  {
    name: 'About Us',
    url: '',
  },
  {
    name: 'Careers',
    url: '',
  },
  {
    name: 'Flipkart Stories',
    url: '',
  },
  {
    name: 'Press',
    url: '',
  },
  {
    name: 'Corporate Information',
    url: '',
  },
]
const GROUPcOMPANIES = [
  {
    name: 'Myntra',
    url: '',
  },
  {
    name: 'Cleartrip',
    url: '',
  },
  {
    name: 'Shopsy',
    url: '',
  },
]
const HELP = [
  {
    name: 'Payments',
    url: '',
  },
  {
    name: 'Shipping',
    url: '',
  },
  {
    name: 'FAQ',
    url: '',
  },
  {
    name: 'Report Infringement',
    url: '',
  },
  
]