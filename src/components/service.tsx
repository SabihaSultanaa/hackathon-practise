import React from "react";
import Image from "next/image";
function Service() {
  return (
    <>
      <div className="mr-[114px] ml-[80px] mt-[150px] mb-[140px]">
        <div className="flex items-center justify-between w-[943] h-[161px] ">
          {/* free fast delivery  */}
          <div className="w-[249px] h-[161px] gap-[8px] flex flex-col">
            <div className="w-[80px] h-[80px] relative mb-[16px] left-[75px]">
              <Image
                src="/truck.png"
                alt="image"
                layout="fill"
                objectFit="cover "
              ></Image>
            </div>
            <div className="font-semibold text-[20px] leading-[28px] w-[242px] h-[28px] ">
              FREE AND FAST DELIVERY
            </div>
            <div className="text-[14px] leading-[21px] pl-[3px] w-[249px] h-[21px] font-semibold ">
              Free delivery for all orders over $140
            </div>
          </div>
          {/* cutomer service  */}
          <div className="w-[249px] h-[161px] gap-[8px] flex flex-col">
            <div className="w-[80px] h-[80px] relative mb-[16px] left-[80px]">
              <Image
                src="/headp.png"
                alt="image"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
            <div className="font-semibold text-[20px] leading-[28px] w-[247px] h-[28px] ">
              24/7 CUSTOMER SERVICE
            </div>
            <div className="text-[14px] leading-[21px] text-center w-[219px] h-[21px] pl-[15px] font-semibold">
              Friendly 24/7 customer support
            </div>
          </div>

          {/* money back  */}
          <div className="w-[249px] h-[161px] gap-[8px] flex flex-col">
            <div className="w-[80px] h-[80px] relative mb-[16px] left-[80px]">
              <Image
                src="/tick.png"
                alt="image"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
            <div className="font-semibold text-[20px] leading-[28px] w-[256px] h-[28px]">
              MONEY BACK GUARANTEE
            </div>
            <div className="text-[14px] leading-[21px] text-center w-[220px] h-[21px] pl-[15px] font-semibold">
              We reurn money within 30 days
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
