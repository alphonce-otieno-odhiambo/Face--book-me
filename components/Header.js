import React from 'react';
import Image from 'next/image';
import {
    ChatIcon,
    BellIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
    ChevronDoubleDownIcon,

} from '@heroicons/react/solid';

import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon
} from '@heroicons/react/outline'
import HeaderIcon from './HeaderIcon';

function Header() {
  return (
    <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
        {/* left */}
        <div className='flex items-center'>
        <Image
        src='https://links.papareact.com/5me'
        layout='fixed'
        height={40}
        width={40}
        />
        
        <div className='flex ml-2 rounded-full p-2 bg-gray-200'>
        <SearchIcon className='h-6 text-gray-600'/>
        <input className='bg-transparent ml-2 outline-none placeholder-gray-500 flex-shrink hidden md:inline-flex' 
        type='text' placeholder='search'/>
        </div>
        </div>
        {/* center */}
        <div className='flex justify-center flex-grow'>
            <div className='flex space-x-6 md:space-x-2'>
                <HeaderIcon active Icon={HomeIcon}/>
                <HeaderIcon Icon={FlagIcon}/>
                <HeaderIcon Icon={PlayIcon}/>
                <HeaderIcon Icon={ShoppingCartIcon}/>
                <HeaderIcon Icon={UserGroupIcon}/>
               
            </div>
        </div>
        {/* right  */}
        <div className='flex items-center sm:space-x-2 justify-end'>
        {/* Profile image */}
        <p className='font-semibold pr-3 whitespace-nowrap'>darc 40</p>
        <ViewGridIcon className='icon'/>
        <ChatIcon className='icon'/>
        <BellIcon className='icon'/>
        <ChevronDoubleDownIcon className='icon'/>
        </div>
    </div>
  )
}

export default Header