import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { IoArrowForward } from 'react-icons/io5';

const NewArriable = () => {
    return (
        <div className='mt-10 xl:mt-0 mx-auto xl:max-w-292 '>
        <div className="flex items-center justify-between ml-2">
        <div className="xl:max-w-115.75">
          <h3 className="text-xl xl:text-[36px] font-bold tracking-[0.03em]">
             New Arrival
          </h3>
        </div>

        <div className="flex gap-2 mr-2 xl:mr-0">
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
       <div className="xl:w-57 h-2.75 bg-[#1163CF] mt-9 mb-13 ml-2 mr-2 xl:mr-0" />

         <div className="flex  gap-7.5 xl:max-w-286 xl:h-161.75 ml-6.5 ">
  
  {/* Left Image */}
  <div className=" xl:w-165.5  h-full overflow-hidden flex items-center justify-center">
    <Image
      src="/n3 1.png"
      alt=""
      width={662}
      height={674}
      className="h-full w-full object-cover"
    />
  </div>

  {/* Right Image */}
  <div className=" xl:w-113  h-full overflow-hidden flex items-center justify-center">
    <Image
      src="/n2 1.png"
      alt=""
      width={452}
      height={674}
      className="h-full w-full object-cover"
    />
  </div>

</div>

<div className='xl:w-289.25 xl:h-144.5 ml-6.5 border mt-7'>
<Image
      src="/n4 1.png"
      alt=""
      width={1157}
      height={578}
      className="h-full w-full object-cover"
    />
</div>

        </div>
    );
};

export default NewArriable;