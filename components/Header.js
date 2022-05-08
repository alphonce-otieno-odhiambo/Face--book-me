import React from 'react';
import Image from 'next/image';
import {
    ChatIcon,
    BellIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,

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
    <div>
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
        <input className='flex bg-transparent ml-2 outline-none placeholder-gray-500' 
        type='text' placeholder='search'/>
        </div>
        </div>
        {/* center */}
        <div className='flex justify-center flex-grow'>
            <div>
                <HeaderIcon Icon={HomeIcon}/>
                <HeaderIcon Icon={FlagIcon}/>
                <HeaderIcon Icon={PlayIcon}/>
                <HeaderIcon Icon={ShoppingCartIcon}/>
                <HeaderIcon Icon={UserGroupIcon}/>
               
            </div>
        </div>
        {/* right  */}
    </div>
  )
}

export default Header