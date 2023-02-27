import Image from 'next/image'
import React from 'react'
import searchIcon from 'assets/search.png'

export const Search = () => {
    return (
        <label className='relative'>
            <input placeholder='Search for anything....' className='px-2 text-white outline-none h-10 rounded-lg w-[200px] bg-eggplant py-2' type='text' />
            <Image className='absolute top-2 right-3' alt="Search" width={15} height={27} src={searchIcon} />
        </label>
    )
}
