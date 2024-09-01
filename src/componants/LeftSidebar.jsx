import React from 'react'
 import Logo from './Logo'
import Navlink from './Navlink'
import LuLogOut from './LuLogOut'

const LeftSidebar = () => {
  return (
    <nav className="flex flex-col justify-between items-center px-4 py-10 bg-black min-w-[250px] border-r">
        <div className='flex flex-col gap-11'>
            <Logo/>
            <Navlink/>
           
              <LuLogOut className="h-4 w-4 text-red-900" />
             
    

        </div>

    </nav>
  )
}

export default LeftSidebar