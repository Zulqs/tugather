import React from 'react';
import Image from 'next/image';

const Nav = () => {
    return (
        <nav className='container mx-auto'>
            <div className='flex flex-wrap items-center justify-between mx-auto my-4 py-2 px-4 rounded-full bg-zinc-500 max-w-[450px]'>
                <a href='#' className='flex flex-row justify-center items-center'>
                    <Image src={'/logo.png'} alt='Logo' width={'40'} height={'40'} />
                </a>

                <div className='w-auto text-sm font-medium text-white'>
                    <ul className='flex flex-row items-center justify-center'>
                        <ul className='mx-2 hover:text-zinc-700'>
                            <a href='#'>Overview</a>
                        </ul>
                        <ul className='mx-2 hover:text-zinc-700'>
                            <a href='#'>Resource</a>
                        </ul>
                        <ul className='mx-2'>
                            <a href="#" className='bg-white px-5 py-2 rounded-full font-bold text-zinc-800 hover:bg-zinc-400 hover:text-white'>
                                Masuk
                            </a>
                        </ul>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav