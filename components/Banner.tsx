import Image from 'next/image'
import React from 'react'

function Banner() {
    return (
        <div className='bg-[#FFC117] py-10 lg:py-0 border-y border-black'>
           <div className='max-w-7xl mx-auto flex items-center justify-between'>
           <div className='px-10 space-y-5'>
                <h1 className='text-6xl max-w-xl font-serif'>
                    <span className='underline decoration-black decoration-4 pb-6'>Medium</span> is place to write, read, connect
                </h1>
                <h2>It easy and free to post your thinking on any topic and connect with millions of readers. </h2>
            </div>
            <Image src="https://medium-clone-chi-lilac.vercel.app/assets/mmm-0fd9407c.png"
                alt="banner-logo"
                width={0}
                height={0}
                sizes='100vw'
                style={{width: '40%', height: 'auto'}}
                className='hidden md:inline-flex h-32 lg-h-full'
            />
        </div>
           </div>
    )
}

export { Banner }