import React from "react";
import Image from "next/image";
import { ShoppingCart, Star } from "lucide-react";
import RedHeading from "@/components/redHeading";


function Wishlist() {
  return (
    <>
      <div className="mb-[140px]">
        <div className="w-[1110px] h-[56px] mx-auto  mt-[80px] flex justify-between">
          <div className="w-[112px] h-[26px] py-[15px] text-[20px] ">Wishlist (4)</div>
          <button className=" w-[200px] h-[50px] rounded-[4px] text-[16px] leading-[24px] border-[1px] font-semibold border-gray-400 hover:text-white hover:bg-gray-600 transition ease-in-out delay-50">
            Move All To Bag
          </button>
        </div>

        <div className="mt-[80px] gap-[30px]  flex ml-[130px]">
          {/* bag card */}
          <div className="w-[260] h-[322px]  rounded-[4px]">
            <div className="h-[209px] flex justify-between p-[12px] bg-[#f5f5f5] relative rounded-t-[4px] ">
              <button className="w-[55px] h-[26px] bg-[#DB4444] text-white rounded-[4px] text-[12px] ">
                -35%
              </button>
              <div className="p-[3px] border-[3px] border-white bg-white rounded-full h-[34px] w-[34px]">
                <div className="w-[16px] h-[16px] rounded-full  relative top-[3px] left-[3px]">
                  <Image
                    src="/delete.png"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  ></Image>
                </div>
                <Image
                  src="/best2.png"
                  alt="image"
                  layout="fill"
                  objectFit="cover"
                  className="p-[30px] "
                ></Image>
              </div>
            </div>
            <div className="h-[41px] bg-black flex justify-center items-center gap-[5px] rounded-b-[4px]">
              <ShoppingCart size={22} className="text-white" cursor="pointer" />
              <div className="text-white text-[14px]">Add To Cart</div>
            </div>
            <div className="w-[133px] h-[56px]  flex flex-col gap-[8px] mt-[16px] text-16px font-semibold">
              <div className="h-[56px] ">Gucci duffle bag</div>
              <div className="text-red-600">
                $960 <span className="line-through text-gray-500">$1160</span>
              </div>
            </div>
          </div>


          {/* cpu cooler  */}
         
           <div className="w-[260] h-[322px] rounded-[4px]">
            <div className="h-[209px] flex justify-end p-[12px] bg-[#f5f5f5] relative rounded-t-[4px] ">
              {/* <button className="w-[55px] h-[26px] bg-[#DB4444] text-white rounded-[4px] text-[12px] ">
                -35%
              </button> */}
              <div className="p-[3px] border-[3px] border-white bg-white rounded-full h-[34px] w-[34px]">
              <div className="w-[16px] h-[16px] rounded-full  relative top-[3px] left-[3px]">
                  <Image
                    src="/delete.png"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  ></Image>
                </div>
                <Image
                  src="/best3.png"
                  alt="image"
                  layout="fill"
                  objectFit="cover"
                  className="p-[30px] "
                ></Image>
              </div>
            </div>
            <div className="h-[41px] bg-black flex justify-center items-center gap-[5px] rounded-b-[4px]">
              <ShoppingCart size={22} className="text-white" cursor="pointer" />
              <div className="text-white text-[14px]">Add To Cart</div>
            </div>
            <div className="w-[176px] h-[56px]  flex flex-col gap-[8px] mt-[16px] text-16px font-semibold">
              <div className="h-[56px] ">RGB liquid CPU Cooler</div>
              <div className="text-red-600">
                $1960 
              </div>
            </div>
          </div>


           {/* gamepad */}
           <div className="w-[260] h-[322px]  rounded-[4px]">
            <div className="h-[209px] flex justify-end p-[12px] bg-[#f5f5f5] relative rounded-t-[4px] ">
              {/* <button className="w-[55px] h-[26px] bg-[#DB4444] text-white rounded-[4px] text-[12px] ">
                -35%
              </button> */}
              <div className="p-[3px] border-[3px] border-white bg-white rounded-full h-[34px] w-[34px]">
              <div className="w-[16px] h-[16px] rounded-full  relative top-[3px] left-[3px]">
                  <Image
                    src="/delete.png"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  ></Image>
                </div>
                <Image
                  src="/usb.png"
                  alt="image"
                  layout="fill"
                  objectFit="cover"
                  className="p-[30px] "
                ></Image>
              </div>
            </div>
            <div className="h-[41px] bg-black flex justify-center items-center gap-[5px] rounded-b-[4px]">
              <ShoppingCart size={22} className="text-white" cursor="pointer" />
              <div className="text-white text-[14px]">Add To Cart</div>
            </div>
            <div className="w-[216px] h-[56px]  flex flex-col gap-[8px] mt-[16px] text-16px font-semibold">
              <div className="h-[56px] ">GP11 Shooter USB Gamepad</div>
              <div className="text-red-600">
                $550 
              </div>
            </div>
          </div>



           {/* jacket */}
           <div className="w-[260] h-[250px] rounded-[4px]">
            <div className="h-[209px] flex justify-end p-[12px] bg-[#f5f5f5] relative rounded-t-[4px] ">
              {/* <button className="w-[55px] h-[26px] bg-[#DB4444] text-white rounded-[4px] text-[12px] ">
                -35%
              </button> */}
              <div className="p-[0px] border-[3px] border-white bg-white rounded-full h-[34px] w-[34px] ">
              <div className="w-[16px] h-[16px] rounded-full  relative top-[5px]  left-[5px]">
                  <Image
                    src="/delete.png"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  ></Image>
                </div>
                <Image
                  src="/jack.png"
                  alt="image"
                //   layout="fill"
                //   objectFit="cover"
                   width={230} height={230}
                  className="p-[30px] absolute left-[15px] top-0"
                ></Image>
              </div>
            </div>
            <div className="h-[41px] bg-black flex justify-center items-center gap-[5px] rounded-b-[4px]">
              <ShoppingCart size={22} className="text-white" cursor="pointer" />
              <div className="text-white text-[14px]">Add To Cart</div>
            </div>
            <div className="w-[176px] h-[56px]  flex flex-col gap-[8px] mt-[16px] text-16px font-semibold">
              <div className="h-[56px] ">Quilted Satin Jacket</div>
              <div className="text-red-600">
                $750
              </div>
            </div>
          </div>   
        </div>


<section className="mt-[90px] mx-[130px] flex justify-between">
        <RedHeading text={"Just For You"} textColor={'black'} />
        <button className=" w-[120px] h-[50px] rounded-[4px] text-[16px] leading-[24px] border-[1px] font-semibold border-gray-400 hover:text-white hover:bg-gray-600">
           See All
          </button>
          
        </section>

        
        <div className="mt-[80px] gap-[30px] flex ml-[130px]">
            {/* laptop  */}
        <div className="w-[260] h-[322px]  rounded-[4px]">
            <div className="h-[209px] flex justify-between p-[12px] bg-[#f5f5f5] relative rounded-t-[4px] ">
              <button className="w-[55px] h-[26px] bg-[#DB4444] text-white rounded-[4px] text-[12px] transition ease-in-out delay-50 ">
                -35%
              </button>
              <div className="p-[3px] border-[3px] border-white bg-white rounded-full h-[34px] w-[34px]">
                <div className="w-[20px] h-[20px] rounded-full  relative top-[1px] left-[1px]">
                  <Image
                    src="/eye.png"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  ></Image>
                </div>
                <Image
                  src="/laptop.png"
                  alt="image"
                //   layout="fill"
                //   objectFit="cover"
                width={220} height={220}
                  className="p-[30px] absolute left-[15px] top-0"
                ></Image>
              </div>
            </div>
            <div className="h-[41px] bg-black flex justify-center items-center gap-[5px] rounded-b-[4px]">
              <ShoppingCart size={22} className="text-white" cursor="pointer" />
              <div className="text-white text-[14px]">Add To Cart</div>
            </div>
            <div className="w-[200px] h-[56px]   flex flex-col gap-[8px] mt-[16px] text-16px font-semibold">
              <div className="h-[56px] ">ASUS FHD Gaming Laptop</div>
              <div className="text-red-600">
                $960 <span className="line-through text-gray-500">$1160</span>
               
              </div>
              <div className="flex gap-1">
              <Star size={16} fill="#FFAD33" color="#FFAD33" /><Star size={16} fill="#FFAD33" color="#FFAD33" /><Star size={16} fill="#FFAD33" color="#FFAD33" /><Star size={16} fill="#FFAD33" color="#FFAD33" />
              <Star size={16} fill="#FFAD33" color="#FFAD33" /> 
              <div className="text-gray-500 relative bottom-[5px] left-[5px]"> (65)</div>
              </div>
            
                    
              
            </div>
          </div>


 {/* dragon  */}
 <div className="w-[260] h-[322px]  rounded-[4px]">
            <div className="h-[209px] flex justify-end p-[12px] bg-[#f5f5f5] relative rounded-t-[4px] ">
              {/* <button className="w-[55px] h-[26px] bg-[#DB4444] text-white rounded-[4px] text-[12px] ">
                -35%
              </button> */}
              <div className="p-[3px] border-[3px] border-white bg-white rounded-full h-[34px] w-[34px]">
                <div className="w-[20px] h-[20px] rounded-full   relative top-[1px] left-[1px]">
                  <Image
                    src="/eye.png"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  ></Image>
                </div>
                <Image
                  src="/card3.png"
                  alt="image"
                  layout="fill"
                  objectFit="cover"
                  className="p-[30px] mt-[10px] "
                ></Image>
              </div>
            </div>
            <div className="h-[41px] bg-black flex justify-center items-center gap-[5px] rounded-b-[4px]">
              <ShoppingCart size={22} className="text-white" cursor="pointer" />
              <div className="text-white text-[14px]">Add To Cart</div>
            </div>
            <div className="w-[200px]  h-[56px]  flex flex-col gap-[8px] mt-[16px] text-16px font-semibold">
              <div className="h-[56px] ">IPS LCD Gaming Monitor</div>
              <div className="text-red-600">
                $1160 
              </div>
              <div className="flex gap-1">
              <Star size={16} fill="#FFAD33" color="#FFAD33" /><Star size={16} fill="#FFAD33" color="#FFAD33" /><Star size={16} fill="#FFAD33" color="#FFAD33" /><Star size={16} fill="#FFAD33" color="#FFAD33" />
              <Star size={16} fill="#FFAD33" color="#FFAD33" /> 
              <div className="text-gray-500 relative bottom-[5px] left-[5px]"> (65)</div>
              </div>
            </div>
          </div>

 {/* red gamepad  */}
 <div className="w-[260] h-[322px]  rounded-[4px]">
            <div className="h-[209px] flex justify-between p-[12px] bg-[#f5f5f5] relative rounded-t-[4px] ">
              <button className="w-[55px] h-[26px] bg-[#00FF66] text-white rounded-[4px] text-[12px] ">
                NEW
              </button>
              <div className="p-[3px] border-[3px] border-white bg-white rounded-full h-[34px] w-[34px]">
                <div className="w-[20px] h-[20px] rounded-full  relative top-[1px] left-[1px]">
                  <Image
                    src="/eye.png"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  ></Image>
                </div>
                <Image
                  src="/card1.png"
                  alt="image"
                  layout="fill"
                  objectFit="cover"
                  className="p-[30px] "
                ></Image>
              </div>
            </div>
            <div className="h-[41px] bg-black flex justify-center items-center gap-[5px] rounded-b-[4px]">
              <ShoppingCart size={22} className="text-white" cursor="pointer" />
              <div className="text-white text-[14px]">Add To Cart</div>
            </div>
            <div className="w-[200px] h-[56px]  flex flex-col gap-[8px] mt-[16px] text-16px font-semibold">
              <div className="h-[56px] ">HAVIT HV-G92 Gamepad</div>
              <div className="text-red-600">
                $560 
              </div>
              <div className="flex gap-1">
              <Star size={16} fill="#FFAD33" color="#FFAD33" /><Star size={16} fill="#FFAD33" color="#FFAD33" /><Star size={16} fill="#FFAD33" color="#FFAD33" /><Star size={16} fill="#FFAD33" color="#FFAD33" />
              <Star size={16} fill="#FFAD33" color="#FFAD33" /> 
              <div className="text-gray-500 relative bottom-[5px] left-[5px]"> (65)</div>
              </div>
            </div>
          </div>


           {/* keyboard */}
        <div className="w-[260] h-[322px]  rounded-[4px]">
            <div className="h-[209px] flex justify-end p-[12px] bg-[#f5f5f5] relative rounded-t-[4px] ">
              {/* <button className="w-[55px] h-[26px] bg-[#DB4444] text-white rounded-[4px] text-[12px] ">
                -35%
              </button> */}
              <div className="p-[3px] border-[3px] border-white bg-white rounded-full h-[34px] w-[34px]">
                <div className="w-[20px] h-[20px] rounded-full   relative top-[1px] left-[1px]">
                  <Image
                    src="/eye.png"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  ></Image>
                </div>
                <Image
                  src="/card2.png"
                  alt="image"
                  layout="fill"
                  objectFit="cover"
                  className="p-[20px] "
                ></Image>
              </div>
            </div>
            <div className="h-[41px] bg-black flex justify-center items-center gap-[5px] rounded-b-[4px]">
              <ShoppingCart size={22} className="text-white" cursor="pointer" />
              <div className="text-white text-[14px]">Add To Cart</div>
            </div>
            <div className="w-[200px] h-[56px] flex flex-col gap-[8px] mt-[16px] text-16px font-semibold">
              <div className="h-[56px] ">AK-900 Wired Keyboard</div>
              <div className="text-red-600">
                $200 
              </div>
              <div className="flex gap-1">
              <Star size={16} fill="#FFAD33" color="#FFAD33" /><Star size={16} fill="#FFAD33" color="#FFAD33" /><Star size={16} fill="#FFAD33" color="#FFAD33" /><Star size={16} fill="#FFAD33" color="#FFAD33" />
              <Star size={16} fill="#FFAD33" color="#FFAD33" /> 
              <div className="text-gray-500 relative bottom-[5px] left-[5px]"> (65)</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default Wishlist;
