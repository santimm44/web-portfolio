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
                <div className='bg-[#1a2c2e] max-lg:hidden fixed shadow-[0px_0px_0px_4px_black] p-[1%]  left-[2%] top-[10%] gap-y-[4%] h-[66vh] w-[11%] flex flex-col justify-around'>
                    <div>
                        <a href="#TechStack">
                            <CustomButton text='Tech Stack' />
                        </a>
                    </div>
                    <div>
                        <a href="#Experience">
                            <CustomButton text='Experience' />
                        </a>
                    </div>
                    <div>
                        <a href="#Projects">

                            <CustomButton text='Projects' />
                        </a>
                    </div>
                    <div>
                        <a href="#NotJustADeveloper">
                            <CustomButton text='Beyond Dev' />
                        </a>
                    </div>
                    <div>
                        <a href="#Socials">
                            <CustomButton text='Socials' />
                        </a>
                    </div>
                    <div className='flex-wrap'>
                        <a href="/SantiagoJMontanez-Resume.pdf" download>
                            <CustomButton text='Resume' />
                        </a>
                    </div>

                    <div>
                        <a href="mailto:santiagomm44@gmail.com">
                            <CustomButton text='Email Me' />

                        </a>
                    </div>

                    <div>
                        <a href="tel:+12094792335">
                            <CustomButton text='Call'/>
                        </a>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default layout