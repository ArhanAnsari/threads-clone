"use client"

import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useClerk } from '@clerk/nextjs';
import { Icons } from '../icons';
import { useRouter } from 'next/navigation';

export default function NavMenu() {
    const router = useRouter()
    const { signOut } = useClerk();
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div>
                        <Icons.menu className='h-[22px] w-[22px] text-secondary transform transition-all duration-150 ease-out hover:scale-100 active:scale-90 cursor-pointer hover:text-foreground active:text-foreground' />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className='bg-background shadow-xl dark:bg-[#181818] z-[999] rounded-2xl w-[185px] mt-1 p-0'>
                    <DropdownMenuItem
                        className='focus:bg-transparent px-4 tracking-normal select-none font-semibold py-3 cursor-pointer text-[15px] active:bg-primary-foreground rounded-none'
                    >
                        Switch appearance
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className='h-[1.2px] my-0' />
                    <DropdownMenuItem
                        className='focus:bg-transparent px-4 tracking-normal select-none font-semibold py-3 cursor-pointer text-[15px]  active:bg-primary-foreground  rounded-none'
                    >
                        About
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className=' h-[1.2px] my-0' />
                    <DropdownMenuItem
                        className='focus:bg-transparent px-4 tracking-normal select-none font-semibold py-3 cursor-pointer text-[15px] active:bg-primary-foreground rounded-none'
                    >
                        Report a problem
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className='h-[1.2px] my-0' />
                    <DropdownMenuItem
                        className='focus:bg-transparent px-4 tracking-normal select-none font-semibold py-3 cursor-pointer text-[15px]  active:bg-primary-foreground rounded-none'
                    >
                        <button
                            aria-label="Log out"
                            onClick={() => signOut(() => router.push("/"))}
                        >
                            Log out
                        </button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
