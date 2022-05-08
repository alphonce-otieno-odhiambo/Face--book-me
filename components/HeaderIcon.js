import React from 'react'

function HeaderIcon({Icon, active }) {
  return (
    <div className='flex items-center rounded-xl
    active:border-b-2 active:border-blue-500 cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-200'>
        <Icon className=
        {`h-5 group-hover:text-blue-600 sm:h-7 mx-auto text-gray-600 
        ${ active && "text-blue-600"} `}/>
    </div>
  )
}

export default HeaderIcon