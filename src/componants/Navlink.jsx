import React from 'react'
import { IoHome} from 'react-icons/io5'

import { NAV_LINK_DATA } from '../constants/Navlink_data'



const Navlink = () => {
  return (
    
<ul className='flex flex-col gap-5'>


{
  NAV_LINK_DATA.map((navlink,index)=>(
    
    <li className='rounded-lg text-[16px] font-medium leading-[140%] text-white hover:bg-[#7b8390] ' >
        <div className=" flex flex-row items-center gap-4 px-4 py-2 ">
        {navlink.icons}
        <span className='text-lg'>{navlink.Name}</span>
        </div>
    </li>

  )

  )
}


  



</ul>
  )
}

export default Navlink;