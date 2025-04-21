import React from 'react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import Image from 'next/image'

const ProjectCards = () => {
    return (
        <div className="group absolute max-w-xs rounded-2xl overflow-hidden shadow-lg bg-zinc-900 hover:shadow-cyan-500/40 transition-shadow duration-900">
            <img src="/spotme.png" alt="Project" className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-white">Project Title</h3>
                <div className="text-sm text-zinc-300 line-clamp-2 group-hover:line-clamp-none transition-all duration-900">
                    <p className='indent-6'>
                        This is a full-stack web application I designed and built to help people stay active, motivated, and connected in their fitness journey.
                    </p>
                    <p className='indent-6'>
                        Unlike traditional social media, this platform isn&apos;t about sharing selfies or scrolling endlessly — it&apos;s focused on finding gym partners, joining local fitness communities, and connecting with verified trainers and coaches. Whether you&apos;re new to fitness or a seasoned athlete, the platform helps you build real-world connections around health and wellness.
                    </p>
                </div>
                <span className="inline-block mt-2 text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Project →
                </span>
            </div>
        </div>

    )
}

const ProjectRowCards = () => {
    return (
        <Card className='flex flex-row w-4/5 bg-customForegroud' >
            <h3 className="text-lg font-semibold border-r-2 border-black">Project Title</h3>
            <span className="mt-2 text-sm text-red-400">
                View Project →
            </span>
        </Card>
    )
}

const BlogRowCards = () => {
    return (
        <Card className='flex w-4/5 bg-customForegroud mb-5 ps-3 pe-3 rounded-xs' >
            <Image className='' src='/defaultBlogImage.jpg' width={1080} height={50} alt="image" />
            <div className="border-b-2 border-black flex flex-col items-start">
                <h3 className='text-xl font-semibold'>Article Title</h3>
                <h4 className='text-base'>Subtitle</h4>
                <h4 className='text-xs'>Date</h4>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fuga magnam consequuntur dicta? Ullam perspiciatis, debitis quas, et magnam repellendus doloribus, atque officia cupiditate voluptas maiores alias commodi quaerat deleniti.
            </p>
            <div className='place-items-center'>
            <Button className="mt-2 text-sm text-red-400 w-1/4 bg-transparent">
                View Article →
            </Button>
            </div>
        </Card>
    )
}


export { ProjectCards, ProjectRowCards, BlogRowCards }