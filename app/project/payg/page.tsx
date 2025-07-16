import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PayGProject = () => {
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
            <path d="M19 12H5"/>
            <path d="m12 19-7-7 7-7"/>
          </svg>
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-700 mb-4">
            PayG
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A Health Insurance Web Application for managing Subscription and Payments
          </p>
        </div>

        {/* Main Project Image */}
        <div className="mb-12">
          <div className="relative overflow-hidden rounded-lg shadow-2xl" style={{ zIndex: 60 }}>
            <Image
              src="/payg.png"
              alt="PayG Health Insurance Dashboard"
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
                PayG is an innovative health insurance management platform designed to simplify 
                subscription management and payment processing.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-white mb-6">Technical Stack</h2>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'PostgreSQL', 'Prisma ORM', 'JWT Auth'].map((tech) => (
                  <span key={tech} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* <div className="mt-6">
                <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Subscription management and plan comparison</li>
                  <li>• Claims tracking and management system</li>
                  <li>• Customer dashboard with policy details</li>
                  <li>• Mobile-responsive design</li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        {/* <div className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center">Platform Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#2A0E61]/30 rounded-lg p-6 border border-[#2A0E61]">
              <div className="text-yellow-400 mb-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Plan Management</h3>
              <p className="text-gray-300">
                Comprehensive insurance plan management with customizable coverage options and pricing tiers.
              </p>
            </div>
            <div className="bg-[#2A0E61]/30 rounded-lg p-6 border border-[#2A0E61]">
              <div className="text-green-400 mb-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Secure Payments</h3>
              <p className="text-gray-300">
                Integrated payment processing with multiple payment methods and automated billing cycles.
              </p>
            </div>
            <div className="bg-[#2A0E61]/30 rounded-lg p-6 border border-[#2A0E61]">
              <div className="text-blue-400 mb-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19v2h-1.5v17.5H4V4H2.5V2h4c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2h4v2zM6 4v15.5h12V4H6z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Claims Processing</h3>
              <p className="text-gray-300">
                Streamlined claims submission and tracking with automated approval workflows.
              </p>
            </div>
          </div>
        </div> */}

        {/* Development Status */}
        <div className="p-6 mb-8">
          <div className="flex items-center mb-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 mr-2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
            <h3 className="text-blue-400 font-semibold">Development Status</h3>
          </div>
          <p className="text-blue-300">
            This project has been successfully developed and is currently in the pre-deployment phase. 
            The application is fully functional and awaiting final approval for public release from stakeholders.
          </p>
        </div>

        {/* Technology Deep Dive */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center">Technical Implementation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1A1A2E]/50 rounded-lg p-6 border border-[#2A0E61]">
              <h3 className="text-xl font-semibold text-white mb-4">Frontend Architecture</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• React for the frontend</li>
                <li>• CSS for responsive design</li>
                <li>• Custom hooks for state management</li>
                <li>• Optimized performance with code splitting</li>
              </ul>
            </div>
            <div className="bg-[#1A1A2E]/50 rounded-lg p-6 border border-[#2A0E61]">
              <h3 className="text-xl font-semibold text-white mb-4">Backend & Database</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Node.js with Express framework</li>
                <li>• PostgreSQL for relational data management</li>
                <li>• JWT authentication and authorization</li>
                <li>• RESTful API design principles</li>
                <li>• Hosted Backend on Render</li>
                <li>• Hosted Database on Raiilway</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayGProject;



