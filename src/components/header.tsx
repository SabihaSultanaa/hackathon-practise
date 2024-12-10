import Link from 'next/link'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { ChevronDown, Heart, Search, ShoppingCart } from 'lucide-react'
import { Input } from './ui/input'

function Header() {
  return (
    <>  
    <div>

    {/* top header */}
    <div className="w-full h-12 bg-black text-white flex items-center justify-between px-[136px]">
          
          {/* summer sale */}
          <div className="text-center flex items-center gap-2 ml-[309px]">
            <span>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </span>
            <Link href="/" className="font-semibold underline">
              ShopNow
            </Link>
          </div>

          {/* English dropDown */}
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger className='flex items-center gap-1 focus:outline-none'>
                English
                <ChevronDown size={24}/>
              </DropdownMenuTrigger>
              
              <DropdownMenuContent>
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>French</DropdownMenuItem>
                <DropdownMenuItem>Arabic</DropdownMenuItem>
              </DropdownMenuContent>
          </DropdownMenu>
          </div>

        </div>


{/* botttom header */}
<div className='w-full border-b-[1px] border-gray-300 px-[120px] pt-[28px] pb-[16px]'>
            <div className='container  mx-auto px-4 pt-6' >
              <div className='flex items-center justify-between gap-8 '>
                {/* logo */}
                <Link href={"/"} className='text-[24px] leading-[24px] font-bold tracking-[1px] '>Exclusive</Link>

                {/* navigation */}
                <nav className="hidden md:flex items-center gap-8">
                  <Link href={"/"} className="text-[16px] leading-[24px] relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-black">Home</Link>
                  <Link href={"#!"} className="text-[16px] leading-[24px] hover:text-gray-600">Contact</Link>
                  <Link href={"#!"} className="text-[16px] leading-[24px] hover:text-gray-600">About</Link>
                  <Link href={"#!"} className="text-[16px] leading-[24px] hover:text-gray-600">Sign Up</Link>
                </nav>

                {/* search & Icons */}
                <div className="flex items-center gap-4">
                  <div className="relative hidden md:block">
                    <Input
                    className='w-[243px] pl-[20px] bg-gray-100  border-none'
                    placeholder="What are you looking for?"
                    type="search"/>

                    <Search className='absolute right-4 top-1/2 -translate-y-1/2 w-6 h-5 text-black stroke-[1.9] '/>
                  </div>
                 <Link href={"/wishlist"}> <Heart size={26} className="hover:text-gray-600  stroke-[1.5]" cursor="pointer"/></Link>
                 <Link href={"/cart"}> <ShoppingCart size={28} className="hover:text-gray-600 stroke-[1.5]" cursor="pointer"/></Link>

                </div>
              </div>
            </div>
          </div>


    </div>
    </>
  )
}

export default Header