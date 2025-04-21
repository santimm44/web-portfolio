import React from 'react'
import { Button } from '../ui/button'

const CustomButton = ({text}:{text:string}) => {
  return (
    <Button className='bg-customForegroud text-black hover:bg-customForegroud hover:shadow-[-.2rem_.35rem_0rem_.1rem_#d52941] shadow-[-.2rem_.35rem_0rem_.1rem_#0CCA4A] border border-[#252525]'>
        <h2>
            {text}
        </h2>
    </Button>
  )
}

export default CustomButton