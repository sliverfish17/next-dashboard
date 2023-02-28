import Image from 'next/image'
import React from 'react'
import searchIcon from 'assets/search.png'

type SearchProps = {
    className?: string;
}

export const Search = ({ className }: SearchProps) => {
    return (
        <label className={`relative ${className}`}>
            <input placeholder='Search for anything....' className='h-10 w-[200px] rounded-lg bg-eggplant p-2 text-white outline-none' type='text' />
            <Image className='absolute top-2 right-3' alt="Search" width={15} height={27} src={searchIcon} />
        </label>
    )
}
