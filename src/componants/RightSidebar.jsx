import React from 'react'

import Profile from './Profile'
import SuggestedProfile from './SuggestedProfile'


const RightSidebar = () => {
  return (
    <aside className='flex bg-black px-2 py-8 flex-col justify-between border-l min-w-[250px]'>
         <div className='flex flex-col gap-50'> 

<Profile  fullname={"Purvi Developer"} username={"purvi_developer_"} />
<div>


<div className='flex flex-col gap-2'>
          <div className='flex flex-row justify-between items-center gap-1'>
            <span className='text-white font-bold gap-0 m-3'>Suggested Accounts</span>
            <span className='text-blue-500 font-bold m-3 px-6 py-8'>See All</span>
          </div>
</div>

<SuggestedProfile
          FullName={"John Doe"}
          type={"Suggested"}
          type2={"Follow"}
     
          ProfilePic={"https://avatar.iran.liara.run/public/2"}
          />
          
          <SuggestedProfile
          FullName={"Suraj"}
          type={"Suggested"}
          type2={"Follow"}
          ProfilePic={"https://avatar.iran.liara.run/public/39"}

          
          
          />
            <SuggestedProfile
          FullName={"Purvi"}
          type={"Follow you"}
          type2={"Follow"}
          ProfilePic={"https://avatar.iran.liara.run/public/69"}/>

<SuggestedProfile
          FullName={"Nisarg"}
          type={"Follow you"}
          type2={"Follow"}
          ProfilePic={"https://avatar.iran.liara.run/public/17"}/>


<SuggestedProfile
          FullName={"Jinal"}
          type={"Follow you"}
          type2={"Follow"}

          ProfilePic={"https://avatar.iran.liara.run/public/89"}/>

    
<SuggestedProfile
          FullName={"Krish"}
          type={"Suggested"}
          type2={"Follow"}
          ProfilePic={"https://avatar.iran.liara.run/public/55"}/>


         </div>
         </div>

    </aside>
  )
}

export default RightSidebar