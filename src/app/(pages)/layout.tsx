import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@radix-ui/react-navigation-menu'
// import Github from '../assets/svg-logos-brands/github-brands.svg'
import React from 'react'

// import {faGithub} from '@awesome'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-[#252525] min-h-screen flex flex-col justify-between'>
            <div id='children'>
                <div className='bg-customForegroud mb-[3rem]'>
                    <NavigationMenu className='p-2.5'>
                        <NavigationMenuList>
                            <NavigationMenuItem className='flex'>
                                <NavigationMenuLink href='/AboutMe' className='text-black bg-transparent'>
                                    About Me
                                </NavigationMenuLink>
                                <NavigationMenuLink href='/Blog' className='text-black bg-transparent ms-2'>
                                    Blog
                                </NavigationMenuLink>
                                <NavigationMenuLink href='/Learning' className='text-black bg-transparent ms-2'>
                                    Learning
                                </NavigationMenuLink>
                                <NavigationMenuLink href='/Projects' className='text-black bg-transparent ms-2'>
                                    Projects
                                </NavigationMenuLink>
                                <NavigationMenuLink href='/Resume' className='text-black bg-transparent ms-2'>
                                    Resume
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                {children}
            </div>
            <footer className='bg-customForegroud flex ps-[25%] pe-[25%]'>
                {/* <Github/> */}
            </footer>
        </div>
    )
}

export default layout