import React from 'react'

const BlogCard = ({ image, matkul, CardTitle, CardDescription }: { image: string, matkul: string, CardTitle: string, CardDescription: string }) => {
    return (
        <>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3 font-sans">
                <div className="mb-10 w-full">
                    <div className="mb-8 overflow-hidden rounded">
                    <img src={image} alt="" className="w-full" />
                    </div>
                    <div>
                    {matkul && (
                        <a href='#' className="mb-5 inline-block rounded bg-gradient-to-tl hover:bg-clip-text hover:text-transparent hover:font-bold hover:-translate-y-1 hover:scale-110 transition ease-out delay-100 duration-500 from-sky-700 to-sky-400 px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                        {matkul}
                        </a>
                    )}
                    <h3>
                        <a
                        href="/#"
                        className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-zinc-800 sm:text-2xl lg:text-xl xl:text-2xl"
                        >
                        {CardTitle}
                        </a>
                    </h3>
                    <p className="text-base text-body-color dark:text-dark-6">
                        {CardDescription}
                    </p>
                    </div>
                </div>
            </div>
        </>
        );
    };

export default BlogCard