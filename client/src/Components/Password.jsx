import React, { useState } from 'react'

function Password() {
    const [length, setLength] = useState(18);
    const [numberAllowd, setNumberAllowd] = useState(false);
    const [charAllowd, setCharAllowd] = useState(false);
    const [password, setPassword] = useState('')

    return (
        <div className='h-screen px-4 justify-center gap-5 flex items-center w-screen bg-black' >
            <div className='bg-gray-600 px-4 py-3 w-full gap-3 flex flex-col  ' >
                <h1 className='font-bold text-white text-3xl' >
                    Password Genrator
                </h1>
                <div className='flex '>                    
                <input
                    type="text"
                    value={password}
                    className=' outline-none w-full px-3'
                    placeholder='password'
                    readOnly
                />
                <button href="#_" class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                    <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                    <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Button Text</span>
                </button>
               
                </div>
                <div className='flex gap-3'>
                    <input 
                    type="range" 
                    min={6}
                    max={100}
                    value={length}
                    className=' cursor-pointer'
                    onChange={(e)=>setLength(e.target.value)}
                    />
                    <input type="checkbox" 
                    defaultChecked={numberAllowd}
                    onChange={()=>{
                        setNumberAllowd((prev) => !prev);
                    }} />
                    :for numberAllowd

                    <input type="checkbox" 
                    id=''
                    defaultChecked={numberAllowd}
                    onChange={()=>{
                        setCharAllowd((prev) => !prev);
                    }} />
                </div>
            </div>
        </div>
    )
}

export default Password
