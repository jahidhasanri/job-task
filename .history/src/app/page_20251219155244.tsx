import React from 'react';
import { CategorySidebar } from '../components/CategorySidebar';
import { Slider } from '../components/Slider';
import { TopCategory } from '../components/TopCategory';



const HomePage = () => {
  return (
    <div>
      <section className="mx-auto max-w-360 xl:px-0 ">
<div className="flex flex-col lg:flex-row gap-6">
<CategorySidebar></CategorySidebar>
      <Slider></Slider>
</div>
</section>
      <TopCategory></TopCategory>
      
      <h2>this is home page</h2>
    </div>
  );
};

export default HomePage;