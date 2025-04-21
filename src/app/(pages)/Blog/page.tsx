import { BlogRowCards } from '@/components/custom/CustomCards'
import { PaginationDemo } from '@/components/custom/Pagination'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col relative justify-between min-h-[75vh] place-items-center'>
      <div className='columns-2 place-items-center'>
        <BlogRowCards />
        <BlogRowCards />
        <BlogRowCards />
        <BlogRowCards />
        <BlogRowCards />
        <BlogRowCards />
        <BlogRowCards />
        <BlogRowCards />
      </div>
      <div className='place-items-end bg-customAccentColorGreen rounded-sm mt-2 mb-4 '>
        <PaginationDemo />
      </div>
    </div>
  )
}

export default page