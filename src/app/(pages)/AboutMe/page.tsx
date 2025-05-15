import { Metadata } from 'next';
import Image from 'next/image'
import React from 'react'
import { ProjectCards } from '@/components/custom/CustomCards';

import nextjsIcon from '/public/icons/nextjs.png'

export const metadata: Metadata = {
    title: "Crafting Code | Santiago",
    description: "Hi, I'm Santiago Montañez — a passionate full-stack developer who loves building web experiences from the ground up. This page shares my journey, values, and what drives me to keep learning and creating in tech.",
};

const page = () => {

    return (
        <div>
            <div className='h-[100vh] relative mb-20'>
                <Image className='absolute' src='/skyline.jpg' fill={true} alt='Comic book skyscraper background' />

                <div className=' flex justify-around relative'>
                    <div className='w-[24rem] border-2 border-black angled-section h-[22rem] top-10 overflow-hidden absolute'>
                        <Image objectFit='cover' src='/2024Portrait.jpg' fill={true} alt='portrait' />
                    </div>

                    <div className='absolute top-[45vh] left-[15vw] right-[5vw]'>

                        <section className="comic-panel h-[36vh]">
                            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="comic-border">
                                <polygon points="0,0 100,25 100,100 0,75" fill="#f2c94c" stroke="#000" strokeWidth="2" />
                            </svg>
                            <div className="panel-content">
                                <h1 className=' font-bangers text-3xl mb-2 '>Hi, I&apos;m Santiago Montañez</h1>
                                <h2 className='font-bangers text-xl mb-4'>
                                    Full-Stack Web Developer | API Specialist | Builder of Meaningful Tech
                                </h2>
                                <div className=''>
                                    <p className='indent-4'>
                                        I&apos;m a passionate full-stack developer with a strong focus on back-end and API development using C#, ASP.NET, and JavaScript/TypeScript. I specialize in building scalable web applications and clean, well-documented APIs that serve real-world needs. My front-end experience includes React, Next.js, and Tailwind CSS, allowing me to bring full projects to life from database to UI.
                                    </p>

                                </div>
                            </div>

                        </section>
                    </div>


                </div>
            </div>
            <div className='flex flex-col items-center mb-[10vh]'>
                <div className="text-white w-2/3 ">
                    <div className='mb-20' id='TechStack'>
                        <h2 className='font-bangers comic-text text-4xl border-4 bg-[#1a2c2e] border-black w-1/3 pl-9 mb-10 items-end'>Tech Stack</h2>

                        <div className='border-6 border-black grid grid-cols-4 grid-rows-2 gap-4 bg-[#3a3f45] p-4'>

                            <div className='h-full p-2 border-[#FF7C16] border-4 bg-[#2d1b3c] flex flex-col justify-between items-center'>
                                <Image className=' h-1/2 w-max' src={nextjsIcon} alt='Github Icon / button' />
                                <h3 className='font-bangers comic-text text-4xl '>Next.js</h3>
                            </div>
                            <div className='h-full p-2 border-[#FF7C16] border-4 bg-[#2d1b3c] flex flex-col justify-between items-center'>
                                <Image className='h-1/2 w-max' src='/icons/CSS.png' alt='Github Icon / button' width={80} height={80} />
                                <h3 className='font-bangers comic-text text-4xl'>CSS</h3>
                            </div>
                            <div className='h-full p-2 border-[#FF7C16] border-4 bg-[#2d1b3c] flex flex-col justify-between items-center'>
                                <Image className='h-1/2 w-max' src='/icons/typescript.png' alt='Github Icon / button' width={80} height={80} />
                                <h3 className='font-bangers comic-text text-4xl'>TypeScript</h3>
                            </div>
                            <div className='h-full p-2 border-[#FF7C16] border-4 bg-[#2d1b3c] flex flex-col justify-between items-center'>
                                <Image className='h-1/2 w-max' src='/icons/csharp.png' alt='Github Icon / button' width={80} height={80} />
                                <h3 className='font-bangers comic-text text-4xl'>C#</h3>
                            </div>
                            <div className='h-full p-2 border-[#FF7C16] border-4 bg-[#2d1b3c] flex flex-col justify-between items-center'>
                                <Image className='h-1/2 w-max' src='/icons/azure.png' alt='Github Icon / button' width={80} height={80} />
                                <h3 className='font-bangers comic-text text-4xl'>Azure</h3>
                            </div>
                            <div className='h-full p-2 border-[#FF7C16] border-4 bg-[#2d1b3c] flex flex-col justify-between items-center'>
                                <Image className='h-1/2 w-max' src='/icons/git.png' alt='Github Icon / button' width={80} height={80} />
                                <h3 className='font-bangers comic-text text-4xl'>Git</h3>
                            </div>
                            <div className='h-full p-2 border-[#FF7C16] border-4 bg-[#2d1b3c] flex flex-col justify-between items-center'>
                                <Image className='h-1/2 w-max' src='/icons/figma.png' alt='Github Icon / button' width={80} height={80} />
                                <h3 className='font-bangers comic-text text-4xl'>Figma</h3>
                            </div>
                            <div className='h-full p-2 border-[#FF7C16] border-4 bg-[#2d1b3c] flex flex-col justify-between items-center'>
                                <Image className='h-1/2 w-max' src='/icons/vscode.png' alt='Github Icon / button' width={80} height={80} />
                                <h3 className='font-bangers comic-text text-4xl'>VS Code</h3>
                            </div>
                        </div>


                    </div>

                    <div className='mb-20'>
                        <div className='flex justify-end' id='Experience'>
                            <h2 className='font-bangers comic-text text-4xl border-4 bg-[#1a2c2e] border-black w-1/3 pl-9 mb-10'>Experience</h2>
                        </div>

                        <section className="comic-panel">
                            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="comic-border">
                                <polygon points="0,0 100,20 100,100 0,80" fill="#2d1b3c" stroke="#000" strokeWidth="2" />
                            </svg>
                            <div className="panel-content">
                                <div className='mb-8'>
                                <h2 className='font-bangers comic-text text-2xl '>
                                    Team Lead - SpotMe App
                                </h2>
                                <h3>Next.js | Dotnet 8 | TypeScript | C# | SignalR</h3>
                                </div>
                                <div className='pb-12'>
                                    <p className='indent-4'>
                                    Team lead for the SpotMe project, responsible for delivering clear project overviews, defining timelines for key deliverables, and supporting team members in overcoming technical challenges. Oversees the development of real-time communication features using SignalR, along with user integration and overall user experience within the web application.
                                    </p>
                                </div>
                            </div>
                        </section>

                    </div>

                    <div className='mb-20' id='Projects'>
                        <h2 className='font-bangers comic-text text-4xl border-4 bg-[#1a2c2e] border-black w-1/3 pl-9 mb-10 items-end'>Projects</h2>
                        <div className='flex justify-around mb-6 mt-6'>
                            <div>
                                <ProjectCards title='SpotMe' techStack='Next.js, Dotnet 8, TypeScript, C#, SignalR' imagePath='/spotme.png' altText='Login page for SpotMe App' description='SpotMe is a social fitness platform that helps gym-goers connect, share progress, and challenge each other in fun, friendly matchups. Whether you&apos;re looking for a new gym partner, motivation, or a playful rival, SpotMe brings the lifting community together.' projectLink='/Projects/SpotMe' />
                            </div>
                            <div>
                                <ProjectCards title='PokeSeek: Gen I–VI' techStack='Next.js & TypeScript' imagePath='/PokemonFinderApp.png' altText='Image of PokeSeek: Gen I–VI app dashboard' description='PokeSeek: Gen I–VI is your ultimate companion for locating and learning about every Pokémon from the first six generations, from Kanto to Kalos. Whether you&apos;re building your dream team or completing your legacy Pokédex, PokeSeek makes it easy to find stats, types, and encounter locations all in one place.' projectLink='/Projects/PokeSeek' />
                            </div>
                        </div>
                    </div>


                    <div className='mb-20' id='NotJustADeveloper'>
                        <h2 className='font-bangers comic-text text-4xl border-4 bg-[#1a2c2e] border-black w-1/3 pl-9 mb-10'>Beyond Dev</h2>

                        <section className="comic-panel">
                            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="comic-border">
                                <polygon points="0,20 100,0 100,80 0,100" fill="#2d1b3c" stroke="#000" strokeWidth="2" />
                            </svg>
                            <div className="panel-content">
                                <h2 className='font-bangers comic-text text-end text-xl mb-8'>
                                    Donor at American Red Cross
                                </h2>
                                <div className=''>
                                    <p className='indent-4'>
                                    I'm a committed supporter of the American Red Cross because I believe donating blood is a simple act that can save lives. Every 56 days, a quick 20-minute whole blood donation can make the difference for someone in critical need—it's easier than waiting in line for coffee. While I now focus on platelet donations, which take longer and aren't for everyone, I encourage anyone interested to talk to ARC staff and learn more. If you're looking to join a donor community, check out my ARC team:
                                        <a className="text-blue-500 underline" target="_blank" href="https://redcrossblood.app.link/jointeam-6769e59d1c7ac/78495"> Asclepius.</a>
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div>
                        <div className='place-items-center' id='Socials'>
                            <h2 className='font-bangers comic-text text-4xl border-4 bg-[#1a2c2e] border-black w-1/3 pl-9 mb-10'>Socials</h2>
                        </div>

                        <div className='border-6 border-black flex justify-around bg-[#3a3f45] h-[20vh]'>
                            <div className='h-full rounded-2xl p-4 border-transparent border-4 hover:bg-[#4ca7f2] hover:border-[#FF7C16]'>
                                <a href="https://github.com/santimm44" target="_blank" rel="noopener noreferrer">
                                    <div className='place-content-center place-items-center'>
                                        <Image src='/icons/github.png' alt='Github Icon / button' width={80} height={80} />
                                        <h3 className='font-bangers comic-text w-full text-4xl pt-2 '>Github</h3>
                                    </div>
                                </a>
                            </div>
                            <div className='h-full rounded-2xl p-4 border-transparent border-4 hover:bg-[#4ca7f2] hover:border-[#FF7C16]'>
                                <a href="https://www.instagram.com/_santiagoj.m" target="_blank" rel="noopener noreferrer">
                                    <div className='place-content-center place-items-center'>
                                        <Image src='/icons/instagram.png' alt='Instagram Icon / button' width={80} height={80} />
                                        <h3 className='font-bangers comic-text w-full text-4xl pt-2 '>Instagram</h3>
                                    </div>
                                </a>
                            </div>
                            <div className='h-full rounded-2xl p-4 border-transparent border-4 hover:bg-[#4ca7f2] hover:border-[#FF7C16]'>
                                <a href="https://www.linkedin.com/in/santiago-jm" target="_blank" rel="noopener noreferrer">
                                    <div className='place-content-center place-items-center'>
                                        <Image src='/icons/linkedin.webp' alt='LinkedIn Icon / button' width={80} height={80} />

                                        <h3 className='font-bangers comic-text w-full text-4xl pt-2 '>LinkedIn</h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page