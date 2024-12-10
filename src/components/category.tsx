import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import RedHeading from "./redHeading"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import Image from "next/image"
import { categoryCard } from "@/constant/categoryCard"

function Category() {
  return (
    <>
      <section className="mt-[100px] pb-[70px] border-b-[1px] border-gray-300">
        {/* heading */}
        <RedHeading text="Categories" textColor="red"/>

        {/* category */}
        <div className='flex justify-between items-end'>
          <div className='mt-[22px] flex items-center'>
            <h2 className='inline-block text-[36px] leading-[48px] font-semibold'>Browse By Category</h2>
          </div>

          {/* round button */}
          <div className='flex gap-2'>
            <Button size={"icon"} variant={"outline"} className='rounded-full bg-[#F5F5F5] p-[20px]'>
              {/* <ChevronLeft size={24} /> */}
              <ArrowLeft strokeWidth={2.5}  />
            </Button>

            <Button size={"icon"} variant={"outline"} className='rounded-full bg-[#F5F5F5] p-[20px]'>
              {/* <ChevronRight size={24} /> */}
              <ArrowRight strokeWidth={2.5}  />
            </Button>
          </div>
        </div>


       

           
          
        

        {/* card div */}
        <div className="w-full flex gap-[30px] mt-[60px]">
          {categoryCard.map((item, index)=>{return (
              <Card 
              className={`w-[170px] h-[145px] flex gap-[16px] flex-col items-center justify-center border-gray-400 
                ${item.isActive ? 'bg-red-500' : 'bg-white'}
                ${item.isActive ? 'text-white' : 'text-black'}
                hover:bg-red-500 hover:text-white transition ease-in-out delay-50 cursor-pointer `} 
             
             key={index}>
              
              <Image src={`/${item.src}.png`} alt="image" width={56} height={56}></Image>
  
              <p className="text-[16px] leading-[24px]">{item.name}</p>
           
            </Card>
          )})}
        </div>

      </section>
    </>
  )
}

export default Category