import React from 'react';
import ServiceCard from '../sub/ServiceCard';

const Services = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-8 md:py-20"
      id="services"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-6 md:py-20">
        Services
      </h1>
      
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 items-stretch">
        <ServiceCard
          title="Frontend Development"
          description="Proficient in ReactJS, HTML, CSS, and other JavaScript, with a keen eye for detail and a passion for creating visually appealing and intuitive interfaces."
        />
        
        <ServiceCard
          title="Backend Development"
          description="Experienced in database management, API development, and optimizing application performance for seamless user experiences."
        />
        
        <ServiceCard
          title="Responsive Web Design"
          description="Proficient in crafting visually stunning and user-friendly websites and applications with a keen focus on responsive design."
        />
      </div>
    </div>
  );
};

export default Services;