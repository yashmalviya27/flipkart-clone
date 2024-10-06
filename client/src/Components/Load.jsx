import React from 'react'
import { Link } from 'react-router-dom'

function Load({data ,index}) {
  return (
    <div className='grid  text-xs text-gray-500   w-56 z-20 ' style={{backgroundColor:data.text}}  >
        <Link>{data.title}</Link>
    </div>
  )
}

export default Load
