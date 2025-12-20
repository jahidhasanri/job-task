import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { IoArrowForward } from 'react-icons/io5';

const TopElecto = () => {
    return (
        <div className='mx-auto xl:max-w-315.5 lg:max-w-full mt-10 xl:mt-0  px-4 xl:px-0 '>
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

       <div className="xl:max-w-315.5 mx-auto flex flex-col md:flex-row gap-5 xl:gap-10.25 xl:ml-1.25">
  {/* Card 1 */}
  <div
    className="xl:w-97 h-54.25 bg-cover bg-center "
    style={{ backgroundImage: "url('/4 1.png')" }}
  >
    <div className="text-white xl:w-46.5  xl:ml-2.75 xl:mt-14.5">
      <h2 className="text-xl font-bold text-[#F5D51D] mt-14 ml-2 xl:mt-0 xl:ml-0 text-[24px] ">10% Off On Hp series</h2>
    </div>
  </div>

  {/* Card 2 */}
  <div
    className=" bg-cover bg-center  xl:w-98 xl:h-54.25 md:flex bg-[#FFCABA]"
>
    <div className="text-white">
      <h2 className="text-xl mt-10 mx-2 xl:mx-0 xl:text-[23px] font-bold xl:w-48.75 xl:h-26.5 xl:mt-15.75 xl:ml-4 text-[#DA1919] ">10% Off On Apple Mackbook series</h2>
    </div>
    <div className=''>
        <Image src="/3 1.png" className='h-36 md:h-50  ml-8  xl:ml-0 xl:mt-4.25' alt=""  width={218} height={200}/>
    </div>
  </div>

  {/* Card 3 */}
   <div className="md:flex  bg-[#FFE5C2] xl:w-98 xl:h-54.25  ">
      <div className='xl:w-42.5 xl:ml-4.25'>
      <h2 className="text-black mt-10 mx-2 xl:mx-0 font-bold text-[23px] xl:mt-15.75 leading-tight xl:max-w-165">
        10% Off On <br /> Iphone series
      </h2>
      </div>
      <div className="shrink-0 xl:h-55">
        <Image
          src="/2_10-removebg-preview.png"
          alt="iPhone Offer"
          width={170}
          height={250}
          className="object-cover h-full mr-13  md:h-50  ml-8  xl:ml-0"
        />
      </div>

    </div>
</div>
        <hr className='xl:mt-21 xl:mb-9.75 xl:w-292.5 xl:ml-1.25' />

        </div>
    );
};

export default TopElecto;