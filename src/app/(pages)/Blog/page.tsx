import { BlogRowCards } from '@/components/custom/CustomCards'
import { PaginationDemo } from '@/components/custom/Pagination'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Build. Break. Blog. | Santiago",
  description: "Learn more about the developer behind this site.",
};

const page = () => {
  return (
    <>
    {/* <Head>
      <title> Build. Break. Blog. - Santiago</title>
    </Head> */}

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
    </>
  )
}

export default page