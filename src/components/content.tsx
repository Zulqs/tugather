import React from 'react'
import BlogCard from './blogCard'

const Content = () => {
    return (
        <div className='bg-zinc-100'>
            <div className='container mx-auto font-sans py-2'>
                <div className='text-center my-8'>
                    <p className='font-bold text-1xl text-sky-700 tracking-wider text-md'>RESOURCE</p>
                    <p className='my-2 font-bold text-3xl text-zinc-800'>Koleksi Materi Terbaru</p>
                </div>
                <div className='-mx-4 py-6 flex flex-wrap'>
                    <BlogCard
                        matkul="Dasar Jaringan Komputer, DJK"
                        CardTitle="Metode Subnetting VLSM"
                        CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
                    />
                    <BlogCard
                        matkul="Administrasi Aplikasi Jaringan, AAJ"
                        CardTitle="Instalasi Domain Name Server"
                        CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        image="https://i.ibb.co/Y23YC07/image-02.jpg"
                    />
                    <BlogCard
                        matkul="Teknologi Bengkel Elektromekanik, BENGKEL"
                        CardTitle="Pengoperasian Mesin Bubut"
                        CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        image="https://i.ibb.co/7jdcnwn/image-03.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Content