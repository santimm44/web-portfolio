import React from 'react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import Image from 'next/image'

const ProjectCards = ({ title, projectLink, description, imagePath, altText, techStack }: { title: string, projectLink: string, description: string, imagePath: string, altText: string, techStack: string }) => {
    return (
        <div className="group h-full max-w-xs shadow-[0px_0px_0px_4px_#0CCA4A] bg-zinc-900 hover:shadow-[#4ca7f2] transition-shadow duration-900">
            <img src={imagePath} alt={altText} className="w-full h-1/3 object-cover border-b-4 border-gray-600"/>
            <div className="p-2 flex flex-col justify-between h-2/3 mt-2">
                <div >
                    <h3 className="text-3xl font-bangers text-white">{title} | {techStack}</h3>
                    <div className=" text-zinc-300  group-hover:line-clamp-none transition-all duration-900">
                        <p className='indent-6'>
                            {description}
                        </p>
                    </div>
                </div>
                <div className='pl-4 pb-2'>
                    <span className="inline-block font-bangers mt-2 text-sm hover:underline hover:font-bold text-cyan-400 ">
                        <a href={projectLink} target='_blank' rel="noopener noreferrer">
                            View Project Page →
                        </a>
                    </span>
                </div>
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