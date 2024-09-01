import React from 'react'

const Profile = ({fullname , username}) => {
  return (
    
<div className='flex flex-row justify-between items-center gap-5 m-3'>

{/* div-left */}
<div className='flex flex-row justify-center items-center gap-2'>
    <img
        src="https://avatar.iran.liara.run/public/91"
        alt="profile"
        height={40} width={40}
    />

    <div className='relative flex flex-col items-start justify-center'>
        <p className='text-white font-bold'>{fullname}</p>
        <span className='text-gray-500 text-sm'>@{username}</span>
    </div>
</div>
{/* div-right */}

<button className='bg-gray-800  text-white px-3 py-1.5 rounded-md shadow-md'>Switch Account</button>

</div>

        




  )
}

export default Profile