import React from "react";
import Image from "next/image";
import { Heart, ShoppingCart, Star } from "lucide-react";
import RedHeading from "@/components/redHeading";

function ProductDetail() {
  return (
    <>
      <div>
        <div className="mx-[135px] my-[80px]">
          <div className="w-[363px] h-[21px] text-gray-500 text-14px">
            Account &nbsp; / &nbsp; Gaming &nbsp; / &nbsp;{" "}
            <span className="text-black font-normal">
              Havic HV G-92 Gamepad
            </span>
          </div>
        </div>

        <section className="flex gap-[16px]  mx-[135px] my-[80px]">
          <div className=" flex flex-col gap-[16px]">
            <div className="w-[170px] h-[138px] bg-[#f5f5f5] relative rounded-[4px] flex justify-center items-center">
              <Image
                src="/last1.png"
                alt="image"
                width={121}
                height={114}
              ></Image>
            </div>
            <div className="w-[170px] h-[138px] bg-[#f5f5f5] relative rounded-[4px] flex justify-center items-center">
              <Image
                src="/last2.png"
                alt="image"
                width={121}
                height={114}
              ></Image>
            </div>
            <div className="w-[170px] h-[138px] bg-[#f5f5f5]  relative rounded-[4px] flex justify-center items-center">
              <Image
                src="/last3.png"
                alt="image"
                width={121}
                height={114}
              ></Image>
            </div>
            <div className="w-[170px] h-[138px]  bg-[#f5f5f5] relative rounded-[4px] flex justify-center items-center">
              <Image
                src="/last4.png"
                alt="image"
                width={121}
                height={114}
              ></Image>
            </div>
          </div>
          <div className="w-[500px] h-[600px] relative bg-[#f5f5f5]  rounded-[4px] flex justify-center items-center">
            <Image
              src="/last5.png"
              alt="image"
              width={446}
              height={315}
            ></Image>
          </div>
    {/* third new div corner  */}
    <div className="w-[500px] h-[600px]  ml-[60px]">
                <div className="text-[24px] font-semibold tracking-[1px]">
           
                  Havic HV G-92 Gamepad
                 </div>

               <div className="flex gap-1 mt-[16px]">
              <Star size={16} fill="#FFAD33" color="#FFAD33" />
              <Star size={16} fill="#FFAD33" color="#FFAD33" />
              <Star size={16} fill="#FFAD33" color="#FFAD33" />
              <Star size={16} fill="#FFAD33" color="#FFAD33" />
              <Star size={16} fill="#bebebe" color="#bebebe" />
              <div className="text-gray-500 relative bottom-[5px] left-[5px] text-[16px]">
                (150 Reviews) | <span className="text-[#00FF66]">In Stock</span>{" "}
              </div>
                </div>

            <div className="text-[24px] font-normal tracking-[1px]">
              $192.00{" "}
            </div>

            <div className="text-[14px] mt-[10px] w-[373px] h-[63px] text-justify">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </div>

            <div className="mt-[24px] border-t-[1px] border-t-gray-400 w-[390px] "></div>

            {/* colours  */}
            <div className=" flex gap-[10px] w-[155px] h-[20px] border-3  items-center mt-[24px]">
              <div className="text-[20px] mr-[8px]">Colours:</div>
              <div className="rounded-full h-[15px] w-[15px] bg-[#A0BCE0] border-[2px] border-white focus:outline-black outline cursor-pointer "></div>
              <div className="rounded-full h-[20px] w-[20px] bg-[#E07575] cursor-pointer"></div>
            </div>
            {/* size  */}
            <div className="mt-[24px] w-[296px] h-[32px]  flex gap-[16px] items-center text-center">
              <div className="text-[20px]">Size:</div>

              <div
                className="w-[32px] h-[32px] border-1 rounded-[4px] text-[14px] border-2 border-gray-500 
                pt-[3px] hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444]  cursor-pointer
                 transition ease-in-out delay-50 font-semibold"
              >
                {" "}
                XS{" "}
              </div>

              <div className="w-[32px] h-[32px] border-1 rounded-[4px] text-[14px] border-2 border-gray-500 pt-[3px] hover:bg-[#DB4444] hover:text-white  hover:border-[#DB4444]  cursor-pointer transition ease-in-out delay-50 font-semibold">
                S
              </div>

              <div className="w-[32px] h-[32px] border-1 rounded-[4px] text-[14px] border-2 border-[#DB4444] pt-[3px] bg-[#DB4444] text-white cursor-pointer font-semibold ">
                M
              </div>

              <div className="w-[32px] h-[32px] border-1 rounded-[4px] text-[14px] border-2 border-gray-500 pt-[3px] hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444]  cursor-pointer transition ease-in-out delay-50 font-semibold">
                L
              </div>

              <div className="w-[32px] h-[32px] border-1 rounded-[4px] text-[14px] border-2 border-gray-500 pt-[3px] hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444]  cursor-pointer transition ease-in-out delay-50 font-semibold">
                XL
              </div>
            </div>

            {/* 1 2 3 , buynow, heart  */}
            <div className="mt-[24px] text-[24px] font-semibold w-[400px] h-[44px] gap-[16px]
             flex justify-center items-center ">
                {/* 1 2 +  */}
                <div className="rounded-[4px] flex border-2 border-gray-400 ">
              <div className="w-[40px] h-[44px]  text-[40px] flex items-center 
              justify-center pb-[35px] font-bold rounded-tl-[4px] border-2 border-r-gray-400 ">_</div>
              <div className="w-[80px] h-[44px]   flex items-center justify-center">2</div>
              <div className="w-[41px] h-[44px] bg-[#DB4444] text-white text-[40px] flex items-center 
              justify-center pb-[8px] rounded-tr-[3px] ">+</div>
              </div>
           
            {/* buy now  */}
            <div className="w-[165px] h-[44px] bg-[#DB4444] text-white text-[16px] px-[40px] py-[10px] rounded-[4px]">Buy Now</div>
            {/* heart icon  */}
            <div className="w-[40px] h-[40px] border-[1px] border-gray-500 rounded-[4px] p-[4px]">
            <Heart size={30} className="hover:text-gray-700" cursor="pointer"/></div>
            </div>

            {/* free delivery  */}
            <div className="mt-[40px] h-[90px] w-[400px] border-gray-300 border-[2px] rounded-t-[4px] flex gap-[16px] items-center">
                <div className="w-[40] h-[40px] ml-[12px] mt-[10px]"><Image src="/delivery.png" alt="image" width={30} height={30} /></div>
                {/* two content  */}
                <div>
                <div className="text-[16px] font-semibold pb-[8px]">Free Delivery</div>
                <div className="underline text-[12px] font-semibold cursor-pointer">Enter your postal code for Delivery Availability</div>
                </div>

            </div>
            {/* return delivery  */}
            <div className=" h-[90px] w-[400px]  flex gap-[16px]  items-center border-gray-300 border-[2px] border-t-white rounded-b-[4px]">


            <div className="w-[40] h-[40px] ml-[12px] mt-[10px ]"><Image src="/return.png" alt="image" width={30} height={30} /></div>
                {/* two content  */}
                <div>
                <div className="text-[16px] font-semibold pb-[8px]">Free Delivery</div>
                <div className="underline text-[12px] font-semibold cursor-pointer">Enter your postal code for Delivery Availability</div>
                </div>
            </div>
           
          </div>
        </section>

        {/* second part of cards  */}
        <div className="mx-[135px] mt-[40px] mb-[140px]">
            <RedHeading text="Related item" textColor="red" />
            <div className="mt-[80px] gap-[30px] flex ">
            {/* red gamepad  */}
        <div className="w-[260] h-[322px]  rounded-[4px]">
            <div className="h-[209px] flex justify-between p-[12px] bg-[#f5f5f5] relative rounded-t-[4px] ">
              <button className="w-[55px] h-[26px] bg-[#DB4444] text-white rounded-[4px] text-[12px] transition ease-in-out delay-50 ">
                -40%
              </button>
              <Heart size={28} className="bg-white rounded-full p-[5px] relative top-[-5px] right-[-87px] " cursor="pointer" />
              <div className="p-[3px] border-[3px] border-white bg-white rounded-full h-[26px] w-[26px] mt-[35px] ">
                <div className="w-[20px] h-[20px] rounded-full  relative top-[-2px] left-[-3px]">
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
                //   layout="fill"
                //   objectFit="cover"
                width={230} height={230}
                  className="p-[20px] absolute left-[10px] top-[18px]"
                ></Image>
              </div>
            </div>
            <div className="h-[41px] bg-[#f5f5f5] flex justify-center items-center gap-[5px] rounded-b-[4px]">
              <ShoppingCart size={22} className="text-white" cursor="pointer" />
              <div className="text-white text-[14px]">Add To Cart</div>
            </div>
            <div className="w-[200px] h-[56px]   flex flex-col gap-[8px] mt-[16px] text-16px font-semibold">
              <div className="h-[56px] ">HAVIT HV-G92 Gamepad</div>
              <div className="text-red-600">
                $120  &nbsp; <span className="line-through text-gray-400">$160</span>
               
              </div>
              <div className="flex gap-1">
              <Star size={16} fill="#FFAD33" color="#FFAD33" /><Star size={16} fill="#FFAD33" color="#FFAD33" /><Star size={16} fill="#FFAD33" color="#FFAD33" /><Star size={16} fill="#FFAD33" color="#FFAD33" />
              <Star size={16} fill="#FFAD33" color="#FFAD33" /> 
              <div className="text-gray-400 relative bottom-[5px] left-[5px]"> (88)</div>
              </div>
            
                    
              
            </div>
          </div>


 {/* keyboard  */}
 <div className="w-[260] h-[322px]  rounded-[4px]">
            <div className="h-[209px] flex justify-between p-[12px] bg-[#f5f5f5] relative rounded-t-[4px] ">
              <button className="w-[55px] h-[26px] bg-[#DB4444] text-white rounded-[4px] text-[12px] ">
                -35%
              </button>
              <Heart size={28} className="bg-white rounded-full p-[5px] relative top-[-5px] right-[-87px] " cursor="pointer" />
              <div className="p-[3px] border-[3px] border-white bg-white rounded-full h-[26px] w-[26px] mt-[30px]">
                <div className="w-[20px] h-[20px] rounded-full   relative top-[-3px] left-[-3px]">
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
                  className="p-[30px] mt-[10px] "
                ></Image>
              </div>
            </div>
            <div className="h-[41px] bg-black flex justify-center items-center gap-[5px] rounded-b-[4px]">
              <ShoppingCart size={22} className="text-white" cursor="pointer" />
              <div className="text-white text-[14px]">Add To Cart</div>
            </div>
            <div className="w-[200px]  h-[56px]  flex flex-col gap-[8px] mt-[16px] text-16px font-semibold">
              <div className="h-[56px] ">AK-900 Wired Keyboard</div>
              <div className="text-red-600">
                $960 &nbsp; <span className="line-through text-gray-400">$1160</span>
              </div>
              <div className="flex gap-1">
              <Star size={16} fill="#FFAD33" color="#FFAD33" /><Star size={16} fill="#FFAD33" color="#FFAD33" /><Star size={16} fill="#FFAD33" color="#FFAD33" /><Star size={16} fill="#FFAD33" color="#FFAD33" />
              <Star size={16} fill="#bebebe" color="#bebebe" /> 
              <div className="text-gray-400 relative bottom-[5px] left-[5px]"> (75)</div>
              </div>
            </div>
          </div>

 {/* dragon  */}
 <div className="w-[260] h-[322px]  rounded-[4px]">
            <div className="h-[209px] flex justify-between p-[12px] bg-[#f5f5f5] relative rounded-t-[4px] ">
              <button className="w-[55px] h-[26px] bg-[#DB4444] text-white rounded-[4px] text-[12px] ">
                30%
              </button>
              <Heart size={28} className="bg-white rounded-full p-[5px] relative top-[-5px] right-[-87px] " cursor="pointer" />
              <div className="p-[3px] border-[3px] border-white bg-white rounded-full  h-[24px] w-[26px] mt-[30px]">
                <div className="w-[20px] h-[20px] rounded-full  relative top-[-3px] right-[3px]">
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
                  className="p-[30px] mt-[30px]"
                ></Image>
              </div>
            </div>
            <div className="h-[41px] bg-[#f5f5f5] flex justify-center items-center gap-[5px] rounded-b-[4px]">
              <ShoppingCart size={22} className="text-white" cursor="pointer" />
              <div className="text-white text-[14px]">Add To Cart</div>
            </div>
            <div className="w-[200px] h-[56px]  flex flex-col gap-[8px] mt-[16px] text-16px font-semibold">
              <div className="h-[56px] ">IPS LCD Gaming Monitor</div>
              <div className="text-red-600">
                $370  &nbsp; <span className="line-through text-gray-400">$400</span> 
              </div>
              <div className="flex gap-1">
              <Star size={16} fill="#FFAD33" color="#FFAD33" /><Star size={16} fill="#FFAD33" color="#FFAD33" /><Star size={16} fill="#FFAD33" color="#FFAD33" /><Star size={16} fill="#FFAD33" color="#FFAD33" />
              <Star size={16} fill="#FFAD33" color="#FFAD33" /> 
              <div className="text-gray-400 relative bottom-[5px] left-[5px]"> (99)</div>
              </div>
            </div>
          </div>


           {/* cd */}
        <div className="w-[260] h-[322px]  rounded-[4px]">
            <div className="h-[209px] flex justify-end p-[12px] bg-[#f5f5f5] relative rounded-t-[4px] ">
              {/* <button className="w-[55px] h-[26px] bg-[#DB4444] text-white rounded-[4px] text-[12px] ">
                -35%
              </button> */}

              <Heart size={28} className="bg-white rounded-full p-[5px] relative top-[-5px] right-[-25px] " cursor="pointer" />
              <div className="p-[3px] border-[3px] border-white bg-white rounded-full h-[24px] w-[26px] mt-[30px]">
                
                <div className="w-[20px] h-[20px] rounded-full   relative top-[-3px] right-[3px]">

                
                  <Image
                    src="/eye.png"
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
                  className="p-[25px] mt-[18px]"
                ></Image>
              </div>
            </div>
            <div className="h-[41px] bg-[#f5f5f5] flex justify-center items-center gap-[5px] rounded-b-[4px]">
              <ShoppingCart size={22} className="text-white" cursor="pointer" />
              <div className="text-white text-[14px]">Add To Cart</div>
            </div>
            <div className="w-[200px] h-[56px] flex flex-col gap-[8px] mt-[16px] text-16px font-semibold">
              <div className="h-[56px] ">RGB liquid CPU Cooler</div>
              <div className="text-red-600">
                $160  &nbsp; <span className="line-through text-gray-400">$170</span> 
              </div>
              <div className="flex gap-1">
              <Star size={16} fill="#FFAD33" color="#FFAD33" /><Star size={16} fill="#FFAD33" color="#FFAD33" /><Star size={16} fill="#FFAD33" color="#FFAD33" /><Star size={16} fill="#FFAD33" color="#FFAD33" />
              <Star size={16} fill="#FFAD33" color="#FFAD33" /> 
              <div className="text-gray-400 relative bottom-[5px] left-[5px]"> (65)</div>
              </div>
            </div>
          </div>

        </div>





        </div>
        {/* ending div  */}
      </div>
    </>
  );
}

export default ProductDetail;
