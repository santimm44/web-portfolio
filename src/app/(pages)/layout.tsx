import CustomButton from '@/components/custom/Button';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Hire Me | Santiago",
    description: "A snapshot of my skills, experience, education, and the technologies I’ve worked with. Downloadable and easy to scan for hiring managers and collaborators.",
};

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div className=' background-dots min-h-screen relative flex flex-col justify-between'>

                {children}
                <div className='bg-[#1a2c2e] max-lg:hidden fixed shadow-[0px_0px_0px_4px_black] p-[1%]  left-[2%] top-[10%] gap-y-[4%] h-[66vh] w-[11%] flex flex-col '>
                    <div>
                        <a href="/AboutMe">
                            <CustomButton text='Home' />
                        </a>
                    </div>
                   
                    <div>
                        <a href="/Blog">
                            <CustomButton text='Blog'/>
                        </a>
                    </div>

                                    </div>

            </div>
        </div>
    )
}

export default layout