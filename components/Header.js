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

function Header() {
  return (
    <div>Header
        {/* left */}
        <div className='flex items-center'>
        <Image
        src='https://links.papareact.com/5me'
        layout='fixed'
        height={40}
        width={40}
        />
        
        <div className='flex ml-2 rounded-full p-2'>
        <SearchIcon className='h-6'/>
        <input type='text' placeholder='search'/>
        </div>
        </div>
        {/* center */}
        {/* right  */}
    </div>
  )
}

export default Header