import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { IoArrowForward } from 'react-icons/io5';

const TopElecto = () => {
    return (
        <div className='mx-auto xl:max-w-315.5 lg:max-w-full  px-4 xl:px-0 '>
              <div className="flex items-center justify-between">
        <div className="xl:max-w-115.75">
          <h3 className="text-xl xl:text-[24px] font-bold tracking-[0.03em]">
            Top Electronic Brands
          </h3>
        </div>

        <div className="flex gap-2">
          <Button
            size="icon"
            className="w-11.5 h-11.5 rounded-full bg-[#f5f5f5]"
            variant="outline"
          >
            <IoMdArrowBack />
          </Button>
          <Button
            size="icon"
            className="w-11.5 h-11.5 rounded-full bg-[#f5f5f5]"
            variant="outline"
          >
            <IoArrowForward />
          </Button>
        </div>
      </div>
       <div className="xl:w-66 h-2.75 bg-[#1163CF] mt-1 mb-19.5" />

       <div className="max-w-315.5 mx-auto flex flex-col xl:flex-row gap-5 xl:gap-10.25 ml-1.25">
  {/* Card 1 */}
  <div
    className="w-97 h-54.25 bg-cover bg-center "
    style={{ backgroundImage: "url('/4 1.png')" }}
  >
    <div className="text-white xl:w-46.5 border xl:ml-2.75 xl:mt-14.5">
      <h2 className="text-xl font-bold text-[#F5D51D] text-[24px] ">10% Off On Hp series</h2>
    </div>
  </div>

  {/* Card 2 */}
  <div
    className=" bg-cover bg-center  xl:w-98 h-54.25 flex bg-[#FFCABA]"
    // style={{ backgroundImage: "url('/3 1.png')" }}
>
    <div className="text-white">
      <h2 className="text-xl xl:text-[23px] font-bold xl:w-48.75 xl:h-26.5 border xl:mt-15.75 xl:ml-4 text-[#DA1919] ">10% Off On Apple Mackbook series</h2>
    </div>
    <div className=''>
        <Image src="/3 1.png" className=' mt-4.25' alt=""  width={218} height={200}/>
    </div>
  </div>

  {/* Card 3 */}
   <div className="flex items-center justify-between bg-[#FFE5C2] w-97 h-54.25 rounded-md px-6">
      
      {/* Left Content */}
      <h2 className="text-black font-bold text-[24px] leading-tight max-w-170">
        10% Off On <br /> Iphone series
      </h2>

      {/* Right Image */}
      <div className="shrink-0 xl:h-55">
        <Image
          src="/2_10-removebg-preview.png"
          alt="iPhone Offer"
          width={180}
          height={250}
          className="object-cover h-full mr-4"
        />
      </div>

    </div>
</div>
        <hr className='xl:mt-21 mb-9.75 xl:w-292.5 xl:ml-1.25' />

        </div>
    );
};

export default TopElecto;