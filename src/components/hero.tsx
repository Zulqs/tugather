import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='container mx-auto my-14 font-sans'>
            <div className='flex flex-row justify-around grid-cols-2 px-52'>
                <div className='flex flex-col w-full'>
                    <div>
                        <a href="#" className='text-zinc-100 bg-gradient-to-tr from-zinc-400 via-sky-700 to-zinc-400 px-5 py-2 rounded-full bg-opacity-45 border-[1px] border-white text-sm font-semibold'>
                            By Div. Akademik
                        </a>
                    </div>
                    <h1 className='my-8 font-extrabold text-8xl text-transparent bg-clip-text bg-gradient-to-b from-zinc-500 via-gray-900 to-zinc-500'>
                        Teknologi Rekayasa Komputer
                    </h1>
                    <p className='text-zinc-600'>
                        Website yang difungsikan sebagai sentralisasi pembelajaran mahasiswa TEKOM (Teknologi Rekayasa Komputer) guna meningkatkan kualitas pembelajaran mahasiswa.
                    </p>
                </div>
                <div className='w-full'>
                    {/* <Image src={'/logo.png'} alt='Logo' width={'400'} height={'400'} className='mx-auto my-auto' /> */}
                </div>
            </div>
        </div>
    )
}

export default Hero