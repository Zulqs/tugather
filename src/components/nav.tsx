"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

function Nav() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`font-sans container mx-auto m-4 ${isSticky ? 'sticky top-3 z-50 translate-y-3 transition-transform duration-700 ease-in-out transform' : '-translate-y-0 transition-transform duration-100 ease-out transform'}`}>
            <div className='flex flex-wrap items-center justify-between mx-auto py-2 px-4 rounded-full bg-zinc-800 max-w-[480px] bg-opacity-30 border-2 border-zinc-300 border-opacity-70 backdrop-blur-[7px] backdrop-contrast-[.95]'>
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
                            <a href="#" className='bg-white px-5 py-2 rounded-full font-bold text-zinc-600 hover:bg-zinc-400 hover:text-white hover:border-2'>
                                Masuk
                            </a>
                        </ul>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
