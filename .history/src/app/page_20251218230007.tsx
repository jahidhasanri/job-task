import React from 'react';
import { CategorySidebar } from '../components/CategorySidebar';
import { Slider } from '../components/Slider';

const HomePage = () => {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-4  xl:max-w-388 xl:px-0 ">
<div className="flex flex-col lg:flex-row gap-6">
<CategorySidebar></CategorySidebar>
      <Slider></Slider>
</div>
</section>
      
      <h2>this is home page</h2>
    </div>
  );
};

export default HomePage;