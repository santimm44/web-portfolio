import React from 'react'
import { Button } from '../ui/button'

const CustomButton = ({text}:{text:string}) => {
  return (
    <Button className='bg-customForegroud w-full break-words whitespace-normal text-black hover:bg-customForegroud hover:shadow-[-.2rem_.35rem_0rem_.1rem_#FF7C16] shadow-[-.2rem_.35rem_0rem_.1rem_#0CCA4A] border-2 border-[#252525]'>
        <h2 className='break-words'>
            {text}
        </h2>
    </Button>
  )
}

export default CustomButton