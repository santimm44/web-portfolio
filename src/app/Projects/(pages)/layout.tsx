import { Metadata } from 'next';
import Link from 'next/link';
// import Github from '../assets/svg-logos-brands/github-brands.svg'
import React from 'react'

// import {faGithub} from '@awesome'

export const metadata: Metadata = {
    title: "Hire Me | Santiago",
    description: "A snapshot of my skills, experience, education, and the technologies I’ve worked with. Downloadable and easy to scan for hiring managers and collaborators.",
};

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        //
        <div className='bg-[#252525] min-h-screen relative flex flex-col justify-between'>
            {children}
            <div className='bg-customForegroud fixed rounded-2xl p-[1%]  left-[2%] top-[10%] gap-y-[4%] h-[66vh] w-[11%] flex flex-col flex-wrap'>
                <div className='border '>
                    <Link href='/AboutMe'>
                        <p className='w-full'>Home</p>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default layout