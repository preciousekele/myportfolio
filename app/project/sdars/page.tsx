import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SDARSProject = () => {
  return (
    <div className="min-h-screen bg-[#030014] py-0">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back Button */}
        <Link 
          href="/#projects"
          className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
           style={{ position: 'relative', zIndex: 50 }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M19 12H5"></path>
            <path d="m12 19-7-7 7-7"></path>
          </svg>
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-700 mb-4">
            SDARS
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A Full-Stack Development of a University Disciplinary Record System for Misconducts
          </p>
        </div>

        {/* Main Project Image */}
        <div className="mb-12">
          <div className="relative overflow-hidden rounded-lg shadow-2xl" style={{ zIndex: 60 }}>
            <Image
              src="/sdars.png"
              alt="SDARS Dashboard"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-semibold text-white mb-6">Project Overview</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                SDARS (Student Disciplinary Action Record System) is a comprehensive web application 
                designed to streamline the management of student disciplinary records within university systems.
              </p>
              <p>
                The system provides a secure, efficient platform for tracking student misconduct cases, 
                managing disciplinary actions, and maintaining comprehensive records for administrative purposes.
              </p>
              <p>
                Due to the sensitive nature of student records and privacy requirements, this application 
                is designed for internal university use only and requires proper authentication and authorization.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-white mb-6">Technical Stack</h2>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisama ORM', 'JWT Auth', 'Tailwind CSS', 'CSS'].map((tech) => (
                  <span key={tech} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Secure user authentication and role-based access control</li>
                  <li>• Comprehensive case management system</li>
                  <li>• Advanced reporting and analytics dashboard</li>
                  <li>• Real-time notifications and case tracking</li>
                  <li>• Data visualization with charts and graphs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Screenshots Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center">System Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#2A0E61]/30 rounded-lg p-6 border border-[#2A0E61]">
              <h3 className="text-xl font-semibold text-white mb-3">Dashboard Analytics</h3>
              <p className="text-gray-300">
                Real-time analytics showing case trends, resolution rates, and departmental statistics.
              </p>
            </div>
            <div className="bg-[#2A0E61]/30 rounded-lg p-6 border border-[#2A0E61]">
              <h3 className="text-xl font-semibold text-white mb-3">Case Management</h3>
              <p className="text-gray-300">
                Comprehensive case tracking from initial report to final resolution with timeline view.
              </p>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="">
          <div className="flex items-center mb-2">
            <h3 className="text-red-400 font-semibold">Privacy Notice</h3>
          </div>
          <p className="text-red-300 mb-4">
            This application handles sensitive student information and disciplinary records. 
            Live access is restricted to authorized university personnel only. The system complies 
            with educational privacy regulations and data protection standards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SDARSProject;