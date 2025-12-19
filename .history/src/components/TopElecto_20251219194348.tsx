import { Button } from '@/components/ui/button';
import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { IoArrowForward } from 'react-icons/io5';

const TopElecto = () => {
    return (
        <div className='mx-auto xl:max-w-315.5 lg:max-w-full  px-4 xl:px-0'>
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

       <div className="max-w-[1262px] mx-auto flex flex-col xl:flex-row gap-5 xl:gap-[41px] px-4">
  {/* Card 1 */}
  <div
    className="flex items-center bg-[url('/card1-bg.png')] bg-cover bg-center w-full xl:w-[386px] h-[200px] p-4"
  >
    <div className="text-white">
      <h2 className="text-xl font-bold">Card 1 Title</h2>
      <p className="text-sm">Some description here</p>
    </div>
  </div>

  {/* Card 2 */}
  <div
    className="flex items-center bg-[url('/card2-bg.png')] bg-cover bg-center w-full xl:w-[388px] h-[200px] p-4"
  >
    <div className="text-white">
      <h2 className="text-xl font-bold">Card 2 Title</h2>
      <p className="text-sm">Some description here</p>
    </div>
  </div>

  {/* Card 3 */}
  <div
    className="flex items-center bg-[url('/card3-bg.png')] bg-cover bg-center w-full xl:w-[388px] h-[200px] p-4"
  >
    <div className="text-white">
      <h2 className="text-xl font-bold">Card 3 Title</h2>
      <p className="text-sm">Some description here</p>
    </div>
  </div>
</div>


        </div>
    );
};

export default TopElecto;