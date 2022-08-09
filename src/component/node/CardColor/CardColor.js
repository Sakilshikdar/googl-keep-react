import React from 'react'
import './CardColor.css'

const CardColor = () => {
   
  return (
    <body>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="p-3">
          <div className='bgColor border flex gap-2 bg-base-200'>
            <a className='rounded-full w-7 h-7 bg-[#ffaa9d]' onClick="bgChange(id)" id="a" ><span className='cursor-pointer text-[#ffaa9d] '>(RB)</span></a>
            <a className='rounded-full w-7 h-7 bg-[#fffe26]' onClick="bgChange(id)" id="b" ><span className='text-[#fffe26] '>(RB)</span></a>
            <a className='rounded-full w-7 h-7 bg-[#ffff8b]' onClick="bgChange(id)" id="c" ><span className='text-[#ffff8b] '>(RB)</span></a>
            <a className='rounded-full w-7 h-7 bg-[#ffffa4]' onClick="bgChange(id)" id="d" ><span className='text-[#ffffa4] '>(RB)</span></a>
            <a className='rounded-full w-7 h-7 bg-[#ffffa4]' onClick="bgChange(id)" id="e" ><span className='text-[#ffffa4] '>(RB)</span></a>
            <a className='rounded-full w-7 h-7 bg-[#e2ffff]' onClick="bgChange(id)" id="f" ><span className='text-[#e2ffff] '>(RB)</span></a>
            <a className='rounded-full w-7 h-7 bg-[#c3ffff]' onClick="bgChange(id)" id="g" ><span className='text-[#c3ffff] '>(RB)</span></a>
            <a className='rounded-full w-7 h-7 bg-[#ffc3ff]' onClick="bgChange(id)" id="h" ><span className='text-[#ffc3ff] '>(RB)</span></a>
            <a className='rounded-full w-7 h-7 bg-[#ffe0ff]' onClick="bgChange(id)" id="i" ><span className='text-[#ffe0ff] '>(RB)</span></a>
            <a className='rounded-full w-7 h-7 bg-[#fffbc8]' onClick="bgChange(id)" id="j" ><span className='text-[#fffbc8] '>(RB)</span></a>
            {/* <a className='rounded-full w-7 h-7 bg-[##ffffff]' onClick="bgChange(id)" id="k" ><span className='text-[##ffffff] '>(RB)</span></a> */}

          </div>
        </div>
      </div>
    </body>
  )
}

export default CardColor