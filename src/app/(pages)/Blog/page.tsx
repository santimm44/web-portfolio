import { BlogRowCards } from '@/components/custom/CustomCards'
import { GeneralHeader } from '@/components/custom/Headers';
import { PaginationDemo } from '@/components/custom/Pagination'
import { Metadata } from 'next';
import React from 'react'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const metadata: Metadata = {
  title: "Build. Break. Blog. | Santiago",
  description: "Learn more about the developer behind this site.",
};

const page = () => {
  const contentDirectory = path.join(process.cwd(), 'content');
  const fileNames = fs.readdirSync(contentDirectory);

  const articles = fileNames.map((fileName) => {

    const filePath = path.join(contentDirectory, fileName);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const parsedFile = matter(fileContents);

  return parsedFile;
});



  return (
    <>
    {/* This is to test the component 'GeneralHeader' */}
    <GeneralHeader title={metadata.title as string}/>

      <div className='flex flex-col relative justify-between min-h-[75vh] place-items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center'>
          {articles.map((article) => (
  <BlogRowCards
    key={article.data.articleLink}
    title={article.data.title}
    subtitle={article.data.subtitle}
    date={article.data.date}
    description={article.data.description}
    imagePath={article.data.imagePath}
    altText={article.data.altText}
    articleLink={article.data.articleLink}
  />
))}
         
        </div>
        
      </div>
    </>
  )
}

export default page