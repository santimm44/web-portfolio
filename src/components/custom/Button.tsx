import React from 'react'
import { Button } from '../ui/button'

const CustomButton = ({text}:{text:string}) => {
  return (
    <Button className='bg-[#3a3f45] cursor-pointer p-4 w-full break-words group transition-all transition-border duration-500 whitespace-normal hover:bg-[#3a3f45] shadow-[.0rem_.0rem_0rem_.0rem_#00000000] hover:shadow-[-.2rem_.35rem_0rem_.025rem_#f2c94c] rounded-none border-black border-2 '>
        <h2 className='break-words font-bangers comic-text'>
            {text}
        </h2>
    </Button>
  )
}

export default CustomButton