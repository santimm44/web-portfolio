import { Metadata } from 'next';
import Image from 'next/image'
import React from 'react'
import nextjsIcon from '/public/icons/nextjs.png'
import HomePageDoubleImage from '@/components/custom/ImageComponents';

export const metadata: Metadata = {
    title: "Crafting Code | Santiago",
    description: "Hi, I'm Santiago Montañez — a passionate full-stack developer who loves building web experiences from the ground up. This page shares my journey, values, and what drives me to keep learning and creating in tech.",
};

const page = () => {

    return (
        <div>
            <div className='h-[100vh] max-md:h-[117vh] relative mb-20'>
                <Image className='absolute' src='/skyline.png' fill={true} alt='Comic book skyscraper background' />

                <div className='flex justify-around relative'>
                    <HomePageDoubleImage />

                    <div className='absolute top-[53vh] max-md:top-[52vh] left-[15vw] max-md:left-[5vw] right-[5vw]'>
                        <section className="comic-panel h-[36vh] max-md:h-[63vh]">
                            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="comic-border">
                                <polygon points="0,0 100,25 100,100 0,75" fill="#f2c94c" stroke="#000" strokeWidth="2" />
                            </svg>
                            <div className="panel-content max-md:mt-18">
                                <h1 className=' font-bangers text-3xl mb-2 max-md:text-xl'>Hi, I&apos;m Santiago Montañez</h1>
                                <h2 className='font-bangers text-xl mb-4 max-md:text-lg'>
                                    DEVELOPER AT HEART | SHIFT LEAD BY TRADE                                </h2>
                                <p className='indent-4 text-sm'>

                                    <span className='max-md:text-sm'>
                                        I studied computer science and software engineering, and while life hasn't quite taken me where I originally planned, my passion for building software hasn't gone anywhere.                                    </span>
                                    <span className='max-md:hidden'>
                                        These days, I'm working toward a career in retail management while continuing to make time for programming, reading, and whatever else catches my attention.                                    </span>
                                </p>
                            </div>
                        </section>
                    </div>


                </div>
            </div>
            <div className='flex flex-col items-center mb-[10vh]'>
                <div className="text-white  lg:p-4 lg:w-2/3 ">
                    <div className='mb-20' id='TechStack'>
                        <h2 className='font-bangers comic-text text-4xl border-4 bg-[#1a2c2e] border-black w-1/3 pl-9 mb-10 items-end max-md:p-4 max-md:w-2/3'>Tech Stack</h2>

                        <div className='max-md:p-4'>

                            <div className='border-6 border-black grid max-md:grid-cols-2 max-md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-4 bg-[#3a3f45] p-4'>

                                <div className='h-full p-2 border-[#FF7C16] border-4 bg-[#2d1b3c] flex flex-col justify-around max-md:justify-around max-md:p-0 items-center'>
                                    <Image loading='lazy' className=' h-1/2 max-md:h-1/3 w-max' src={nextjsIcon} alt='Github Icon / button' />
                                    <h3 className='font-bangers comic-text text-4xl max-md:text-2xl'>Next.js</h3>
                                </div>
                                <div className='h-full p-2 border-[#FF7C16] border-4 bg-[#2d1b3c] flex flex-col justify-around max-md:justify-around max-md:p-0 items-center'>
                                    <Image loading='lazy' className='h-1/2 max-md:h-1/3 w-max' src='/icons/CSS.png' alt='Github Icon / button' width={80} height={80} />
                                    <h3 className='font-bangers comic-text text-4xl max-md:text-2xl'>CSS</h3>
                                </div>
                                <div className='h-full p-2 border-[#FF7C16] border-4 bg-[#2d1b3c] flex flex-col justify-around max-md:justify-around max-md:p-0 items-center'>
                                    <Image loading='lazy' className='h-1/2 max-md:h-1/3 w-max' src='/icons/typescript.png' alt='Github Icon / button' width={80} height={80} />
                                    <h3 className='font-bangers comic-text text-4xl max-md:text-2xl'>TypeScript</h3>
                                </div>
                                <div className='h-full p-2 border-[#FF7C16] border-4 bg-[#2d1b3c] flex flex-col justify-around max-md:justify-around max-md:p-0 items-center'>
                                    <Image loading='lazy' className='h-1/2 max-md:h-1/3 w-max' src='/icons/csharp.png' alt='Github Icon / button' width={80} height={80} />
                                    <h3 className='font-bangers comic-text text-4xl max-md:text-2xl'>C#</h3>
                                </div>
                                <div className='h-full p-2 border-[#FF7C16] border-4 bg-[#2d1b3c] flex flex-col justify-around max-md:justify-around max-md:p-0 items-center'>
                                    <Image loading='lazy' className='h-1/2 max-md:h-1/3 w-max' src='/icons/azure.png' alt='Github Icon / button' width={80} height={80} />
                                    <h3 className='font-bangers comic-text text-4xl max-md:text-2xl'>Azure</h3>
                                </div>
                                <div className='h-full p-2 border-[#FF7C16] border-4 bg-[#2d1b3c] flex flex-col justify-around max-md:justify-around max-md:p-0 items-center'>
                                    <Image loading='lazy' className='h-1/2 max-md:h-1/3 w-max' src='/icons/git.png' alt='Github Icon / button' width={80} height={80} />
                                    <h3 className='font-bangers comic-text text-4xl max-md:text-2xl'>Git</h3>
                                </div>
                                <div className='h-full p-2 border-[#FF7C16] border-4 bg-[#2d1b3c] flex flex-col justify-around max-md:justify-around max-md:p-0 items-center'>
                                    <Image loading='lazy' className='h-1/2 max-md:h-1/3 w-max' src='/icons/figma.png' alt='Github Icon / button' width={80} height={80} />
                                    <h3 className='font-bangers comic-text text-4xl max-md:text-2xl'>Figma</h3>
                                </div>
                                <div className='h-full p-2 border-[#FF7C16] border-4 bg-[#2d1b3c] flex flex-col justify-around max-md:justify-around max-md:p-0 items-center'>
                                    <Image loading='lazy' className='h-1/2 max-md:h-1/3 w-max' src='/icons/vscode.png' alt='Github Icon / button' width={80} height={80} />
                                    <h3 className='font-bangers comic-text text-4xl max-md:text-2xl'>VS Code</h3>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className='mb-20'>
                        <div className='flex justify-end' id='Experience'>
                            <h2 className='font-bangers comic-text text-4xl border-4 bg-[#1a2c2e] border-black w-1/3 pl-9 mb-10 max-md:p-4 max-md:w-2/3'>Experience</h2>
                        </div>

                        <section className="comic-panel  max-md:h-[72vh]">
                            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="comic-border">
                                <polygon points="0,0 100,20 100,100 0,80" fill="#2d1b3c" stroke="#000" strokeWidth="2" />
                            </svg>
                            <div className="panel-content">
                                <div className='mb-8 max-md:mt-16'>
                                    <h2 className='font-bangers comic-text text-2xl '>
                                        Team Lead - SpotMe App
                                    </h2>
                                    <h3 className='max-lg:text-sm'>Next.js | Dotnet 8 | TypeScript | C# | SignalR</h3>
                                </div>
                                <div className='pb-12'>
                                    <p className='indent-4 max-lg:text-sm'>
                                        Team lead for the SpotMe project, responsible for delivering clear project overviews, defining timelines for key deliverables, and supporting team members in overcoming technical challenges. Oversees the development of real-time communication features using SignalR, along with user integration and overall user experience within the web application.
                                    </p>
                                </div>
                            </div>
                        </section>

                    </div>

                    <div className='' id='Projects'>
                        <h2 className='font-bangers comic-text text-4xl border-4 bg-[#1a2c2e] border-black w-1/3 pl-9 mb-10 items-end max-md:p-4 max-md:w-2/3'>Projects</h2>
                        <div className='grid max-md:grid-cols-2 max-md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-1 gap-4 mb-6 mt-6'>
                            <h3>
                                NEw Projects
                            </h3>
                        </div>
                    </div>


                    <div className='mb-20' id='NotJustADeveloper'>
                        <h2 className='font-bangers max-md:p-4 max-md:w-2/3 comic-text text-4xl border-4 bg-[#1a2c2e] border-black w-1/3 pl-9 mb-10'>Beyond Dev</h2>

                        <section className="comic-panel max-md:h-[70vh]">
                            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="comic-border">
                                <polygon points="0,20 100,0 100,80 0,100" fill="#2d1b3c" stroke="#000" strokeWidth="2" />
                            </svg>
                            <div className="panel-content max-md:mt-16">
                                <h2 className='font-bangers comic-text text-end text-xl mb-8'>
                                    Favorite Reads 2026
                                </h2>
                                <div className=''>
                                    <h3>
                                        A Short Stay In Hell by Steven L. Peck
                                    </h3>
                                    <p className='indent-4 max-lg:text-sm'>
                                        
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div>
                        <div className='place-items-center' id='Socials'>
                            <h2 className='font-bangers comic-text text-4xl border-4 bg-[#1a2c2e] border-black w-1/3 max-md:w-2/3 pl-9 max-md:p-4 mb-10'>Socials</h2>
                        </div>

                        <div className='max-md:p-4'>
                            <div className='flex justify-around max-md:flex-col h-[20vh] max-md:h-full '>
                                <div className='h-full group p-4 border-b-2 border-transparent transition-all duration-300 hover:border-b-[#FF7C16]'>
                                    <a href="https://github.com/santimm44" target="_blank" rel="noopener noreferrer">
                                        <div className='place-content-center place-items-center max-md:text-center '>
                                            <div className='bg-amber-200 rounded-full'>
                                                <Image loading='lazy' src='/cbIcons/cb2Github.png' alt='Github Icon / button' width={80} height={80} />
                                            </div>
                                            <h3 className='font-bangers comic-text w-full text-4xl pt-2 '>Github</h3>
                                        </div>
                                    </a>
                                </div>
                                <div className='h-full group p-4 border-b-2 border-transparent transition-all duration-300 hover:border-b-[#FF7C16]'>
                                    <a href="https://www.instagram.com/_santiagoj.m" target="_blank" rel="noopener noreferrer">
                                        <div className='place-content-center place-items-center max-md:text-center'>
                                            <div className='bg-amber-200 rounded-full'>
                                                <Image loading='lazy' src='/cbIcons/cb2Instagram.png' alt='Instagram Icon / button' width={80} height={80} />
                                            </div>
                                            <h3 className='font-bangers comic-text w-full text-4xl pt-2 '>Instagram</h3>
                                        </div>
                                    </a>
                                </div>
                                <div className='h-full group p-4 border-b-2 border-transparent transition-all duration-300 hover:border-b-[#FF7C16]'>
                                    <a href="https://www.linkedin.com/in/santiago-jm" target="_blank" rel="noopener noreferrer">
                                        <div className='place-content-center place-items-center max-md:text-center'>
                                            <div className='bg-amber-200 rounded-full'>
                                                <Image loading='lazy' src='/cbIcons/cb2Linkedin.png' alt='LinkedIn Icon / button' width={80} height={80} />
                                            </div>

                                            <h3 className='font-bangers comic-text w-full text-4xl pt-2 '>LinkedIn</h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default page