import CustomButton from '@/components/custom/Button'
import React from 'react'

const page = () => {

  const buttonTexts: string[] = ["Skills", "Projects", "Experience", "Education", "Download Resume"]

  return (
    <div>
      <div className='flex justify-around w-1/3 ms-6 mb-[6rem]'>
        {buttonTexts.map((text, index) => {
          return (
            <div key={index}>
              <CustomButton text={text} />
            </div>
          )
        })}
      </div>

      <div className='flex w-[95%] '>
        <div className='w-2/5 pr-4'>

          <article className='text-white ms-[6rem] mb-[6rem]'>
            <h1>Santiago Jesus Montanez</h1>
            <h2>Web Developer</h2>
            <h2>Find me at:</h2>
            <ul className='ms-4'>
              <li>GitHub</li>
              <li>LinkedIn</li>
            </ul>

            <p>
              Passionate full-stack developer specializing in API and back-end development. Proficient in HTML, CSS, JavaScripty, TypeScript, and C#, with experience in Next.js, React, and Tailwind CSS. Leading a full-stack project while earning  certifications in software development. Driven to build scalable applications and contribute to innavtive teams.
            </p>
          </article>
          <div className='ms-[6rem] border-b-2 pb-[2rem] mb-[2rem]'>
            <h3 className='text-white'>Want to work together? Let&apos;s talk</h3>
            
            <div className='mt-3'>
              <h5 className='text-white'>Name</h5>
              <input
                className='bg-customForegroud rounded p-1'
                placeholder='E.g John Doe | Jane Doe'
                type='text'
              />
            </div>
            <div className='mt-3'>
              <h5 className='text-white'>Email</h5>
              <input
                className='bg-customForegroud rounded p-1'
                placeholder='E.g John Doe | Jane Doe'
                type='text'
              />
            </div>
            <div className='mt-3'>
              <h5 className='text-white'>Subject</h5>
              <input
                className='bg-customForegroud rounded p-1'
                placeholder='E.g John Doe | Jane Doe'
                type='text'
              />
            </div>
            <div className='mt-3'>
              <h5 className='text-white'>Message</h5>
              <input
                className='bg-customForegroud rounded p-1'
                placeholder='E.g John Doe | Jane Doe'
                type='text'
              />
            </div>
          </div>
          <div className='ms-[6rem] mb-[6rem]'>
            <h3 className='text-white'>Optional Fields</h3>
            <div className='mt-3'>
              <h5 className='text-white'>Company/Organization</h5>
              <input
                className='bg-customForegroud rounded p-1'
                type='text'
              />
            </div>
            <div className='mt-3'>
              <h5 className='text-white'>Phone#</h5>
              <input
                className='bg-customForegroud rounded p-1'
                placeholder='(555) 123-4567'
                type='telNo'
              />
            </div>
            <div className='mt-3'>
              <h5 className='text-white'>Service Needed</h5>
              <input
                className='bg-customForegroud rounded p-1'
                placeholder='Website, Web API, Consultation, etc.'
                type='tel'
              />
            </div>
            <div className='mt-3'>
              <h5 className='text-white'>How did you find me?</h5>
              <input
                className='bg-customForegroud rounded p-1'
                type='text'
              />
            </div>
          </div>
        </div>
        <div className='bg-customForegroud w-3/5 h-full p-4'>
          White box
        </div>
      </div>



    </div>
  )
}

export default page