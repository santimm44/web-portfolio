import Image from 'next/image'
import React from 'react'

const page = () => {

    return (
        <div className='flex'>
            <div className='w-1/3 flex justify-around'>
                {/* Left Side of Screen */}
                <div className='text-white leading-[1.75rem] p-4 h-full'>
                    <div className='place-items-center'>
                        <div className='w-[24rem] h-[22rem] overflow-hidden rounded relative'>
                            <Image objectFit='cover' src='/2024Portrait.jpg' fill={true} alt='portrait' />
                        </div>
                    </div>
                    <h1 className='font-extrabold text-3xl mb-2'>Hi, I&apos;m Santiago Montañez</h1>
                    <h2 className='font-bold text-xl mb-8'>
                        Full-Stack Web Developer | API Specialist | Builder of Meaningful Tech
                    </h2>

                    <div>
                        <p className='indent-4'>
                            I&apos;m a passionate full-stack developer with a strong focus on back-end and API development using C#, ASP.NET, and JavaScript/TypeScript. I specialize in building scalable web applications and clean, well-documented APIs that serve real-world needs. My front-end experience includes React, Next.js, and Tailwind CSS, allowing me to bring full projects to life from database to UI.
                        </p>
                        <p className='indent-4'>
                            Beyond code, I care deeply about creating tools and platforms that empower people—especially in spaces like developer productivity, education, and tech for good. I&apos;m always learning, always building, and always looking to grow both as a developer and as a teammate.
                        </p>
                        <p className='indent-4'>
                            Whether I&apos;m collaborating with a team or leading a solo project, I bring attention to detail, curiosity, and a strong sense of ownership to everything I work on.
                        </p>
                    </div>
                </div>

            </div>
            {/* Right Side of screen */}
            <article id="ctiadSection" className="text-white w-2/3 p-4 columns-2 min-h-screen">
                <div className='break-inside-avoid'>
                    <h2 className='font-bold text-2xl MB-2'>This Web portfolio</h2>
                    <p className="leading-7">
                        At the moment I am making this Web portfolio.
                        This project is going to be using concepts and techniques I have just learned.
                        With some luck I will be able to officially host this project in my own domain and continuously work on improving it.
                    </p>
                </div>
                <div className='break-inside-avoid'>
                    <h2 className='font-bold text-2xl MB-2'>Donating at American Red Cross</h2>
                    <p className="leading-7">
                        I am always adament in supporting the American Red Cross.
                        I truly believe that by supporting them I am helping save others.
                        If I can convince one other person then I will be happy.
                        Think about it like this, once every 56 days you make a quick 20 minute whole blood donation.
                        Nothing to it, really, and by doing it you can save someone who may be in critical need.
                        If you can wait in a long Starbucks line for coffee everyday then I am confident this will be a no breezer.
                        <br />
                        I try to go and donate as often as possible.
                        I have stopped doing whole blood donations sometime ago in order to focus on platelet donations.
                        If you are new to donating then be warned, donating platelets isn&apos;t for everyone.
                        The process is a lot longer, but I suggest getting details from a blood collection staff in ARC (American Red Cross) before deciding if you are up to it.
                        Also, if you want to be a part of a community of donors, then check out my the team I created in ARC.
                        <a className="text-blue-500 underline" target="_blank" href="https://redcrossblood.app.link/jointeam-6769e59d1c7ac/78495"> Asclepius</a>

                    </p>
                </div>

                <div className='break-inside-avoid'>
                    <h2 className='font-bold text-2xl MB-2'>Consider something else</h2>
                </div>
                <div className='break-inside-avoid'>
                    <h2 className='font-bold text-2xl MB-2'>Consider something else</h2>
                </div>
            </article>

        </div>
    )
}

export default page