import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Props {
  src: string;
  title: string;
  description: string;
  href: string;
}

const ProjectCard = ({ src, title, description, href }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex flex-col h-full hover:scale-105 transition-transform duration-300 group focus-within:scale-105">
      <div className="h-60 overflow-hidden relative">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        <Link 
          href={href} 
          className="absolute top-4 right-4 bg-blue-800 p-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:bg-blue-900"
        >
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="hover:scale-110 transition-transform duration-200"
          >
            <path d="M7 7h10v10"/>
            <path d="M7 17 17 7"/>
          </svg>
        </Link>
      </div>

      <div className="relative p-4 flex-1">
        <h1 className="text-2xl font-semibold text-white group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;