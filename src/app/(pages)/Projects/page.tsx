import { ProjectCards, ProjectRowCards } from '@/components/custom/CustomCards'
import React from 'react'

const page = () => {
    return (
        <div>
            <section id='highLightedProjects' className='mb-[6rem]'>
                <h1 className='text-white text-5xl font-semibold mb-[2rem]'>Highlighted Projects</h1>
                <div className='flex justify-evenly h-[50vh] border'>
                    <div>
                        <ProjectCards />
                    </div>
                    <div>
                        <ProjectCards />
                    </div>
                    <div>

                        <ProjectCards />
                    </div>
                </div>
            </section>

            <section id='ongoingProjects' className='mb-[6rem] '>
            <h1 className='text-white text-5xl font-semibold mb-[2rem]'>Ongoing Projects</h1>
            <div className='flex justify-evenly h-[50vh]'>
                <ProjectCards />
            </div>
            </section>

            <section id='allProjects' className='mb-[6rem] place-items-center'>

                <ProjectRowCards/>

            </section>


        </div>
    )
}

export default page