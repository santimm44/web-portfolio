import React from 'react'

interface GeneralHeaderProps {
  title: string;
}

const GeneralHeader = ({title} : GeneralHeaderProps) => {
    return (
        <header className=''>
            <h1 className='comic-text text-center mb-4 p-2 text-4xl w-full border-black border-b-6 bg-[#1a2c2e]'>
                {title}
            </h1>
            
        </header>
    )
}

export {GeneralHeader}