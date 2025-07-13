import React from 'react';

interface Props {
  title: string;
  description: string;
}

const ServiceCard = ({ title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex flex-col h-full">
      <div className="p-8">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-blue-500 rounded-sm mr-3 flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          <div className="w-6 h-6 bg-blue-500 rounded-sm opacity-70"></div>
        </div>
        <h1 className="text-2xl font-semibold text-white mb-4">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;