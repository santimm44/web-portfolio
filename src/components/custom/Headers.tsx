import React from 'react'

interface GeneralHeaderProps {
  title: string;
}

const GeneralHeader = ({title} : GeneralHeaderProps) => {
    return (
        <header className=''>
            <h1 className='comic-text'>
                {title}
            </h1>
        </header>
    )
}

export {GeneralHeader}