import React from 'react'
import { Link } from 'react-router-dom'

function Load({Mobile ,index}) {
  return (
    <div className='grid bg-white  w-[246px] z-20 ' >
        <Link>{Mobile.titel}</Link>
    </div>
  )
}

export default Load
