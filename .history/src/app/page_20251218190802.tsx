import React from 'react';
import { CategorySidebar } from '../components/CategorySidebar';
import { Slider } from '../components/Slider';

const HomePage = () => {
  return (
    <div>
      <CategorySidebar></CategorySidebar>
      <Slider></Slider>
      <h2>this is home page</h2>
    </div>
  );
};

export default HomePage;