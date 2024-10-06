import React from 'react'
import LoginTop, { TopTwo } from './LoginTop'

function Signup() {
  return (
    <div className='w-full  h-full overflow-x-hidden overflow-y-auto no-scrollbar'>
            <LoginTop/>
        <div className=' pt-[60px] shadow-sm'>
            <TopTwo/>
        </div>

      
    </div>
  )
}

export default Signup
