import React from 'react';
import { CategorySidebar } from '../components/CategorySidebar';
import { Slider } from '../components/Slider';
import { TopCategory } from '../components/TopCategory';
import TopElecto from '../components/TopElecto';
import BestSellingProducts from '../components/BestSellingProducts';
import NewArriable from '../components/NewArriable';
import AllProducts from '../components/AllProducs';



const HomePage = () => {
  return (
    <div>
      <section className="mx-auto max-w-360 xl:px-0 ">
<div className="flex flex-col lg:flex-row gap-7.25">
{/* <CategorySidebar></CategorySidebar> */}
      {/* <Slider></Slider> */}
</div>
</section>
      {/* <TopCategory></TopCategory>
      <TopElecto></TopElecto>
      <BestSellingProducts></BestSellingProducts>
      <NewArriable></NewArriable>
      <AllProducts></AllProducts> */}
    </div>
  );
};

export default HomePage;