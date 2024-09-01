import React from 'react'

const SuggestedProfile = ({FullName,type,ProfilePic,type2}) => {
  return (
    <div>

<div className="flex flex-row justify-between items-center gap-4 m-2">
      {/* div-left */}
      <div className="flex flex-row justify-center items-center gap-3">
        <img
          src={ProfilePic}
          alt="profile"
          className="h-8 w-8 rounded-full"
        />

        <div className="relative flex flex-col items-start justify-center m-3 px-2">
          <span className="text-white font-bold text-sm">{FullName} </span>
          <span className="text-gray-500 text-xs ">{type}</span>
        </div>
      </div>

      {/* div-right */}
      <p className="text-sm font-bold text-blue-500 m-4">{type2}</p>
    </div>


    </div>
  )
}

export default SuggestedProfile