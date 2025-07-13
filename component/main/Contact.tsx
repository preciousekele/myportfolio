"use client";

import emailjs from 'emailjs-com';
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import {
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
  RxEnvelopeClosed,
} from 'react-icons/rx';

// Define types
interface FormData {
  firstName: string;
  email: string;
  subject: string;
  message: string;
}

interface SocialLink {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
  color: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log('Input change:', e.target.name, e.target.value);
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowSuccess(false);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    try {
      const templateParams = {
        from_name: formData.firstName,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('Email sent:', result.text);

      // Reset form
      setFormData({
        firstName: '',
        email: '',
        subject: '',
        message: ''
      });

      // Show success
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error('Email failed:', error);
      alert('Oops! Message failed to send. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks: SocialLink[] = [
    {
      name: 'Email',
      icon: RxEnvelopeClosed,
      url: 'mailto:preshekele@gmail.com',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: RxLinkedinLogo,
      url: 'https://linkedin.com/in/precious-ekele-1b8070258',
      color: 'hover:text-gray-400'
    },
    {
      name: 'GitHub',
      icon: RxGithubLogo,
      url: 'https://github.com/preciousekele',
      color: 'hover:text-gray-400'
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: 'https://wa.me/message/QZRGTTVMHW2LM1',
      color: 'hover:text-gray-400'
    },
    {
      name: 'Instagram',
      icon: RxInstagramLogo,
      url: 'https://www.instagram.com/_heispresh_?igsh=d2F3bWs4YWgycWw0',
      color: 'hover:text-gray-400'
    },
  ];

  const handleSocialClick = (url: string, name: string) => {
    console.log('Social link clicked:', name, url);
    try {
      if (url.startsWith('mailto:')) {
        window.location.href = url;
      } else {
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    } catch (error) {
      console.error('Error opening link:', error);
      window.location.href = url;
    }
  };

  return (
    <div className="bg-[#030014] text-white relative z-50" id="contact">
      <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-8 lg:py-20 relative z-50">
        {/* Mobile Layout - Single Column */}
        <div className="block lg:hidden">
          {/* Header */}
          <div className="text-center mb-4 sm:mb-6">
            <div className="relative inline-block">
              <div className="absolute -top-2 -left-2 w-4 h-4 sm:w-6 sm:h-6 bg-blue-500 rounded-full opacity-20"></div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Connect with me.
              </h1>
            </div>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3 sm:mb-4 px-2">
              I will read all emails. Send me any message you want and I will get back to you.
            </p>

            <div className="space-y-1 mb-4 sm:mb-6">
              <p className="text-blue-400 text-sm sm:text-base">
                Just enter your <span className="font-semibold">Name</span>, <span className="font-semibold">Email</span> and the
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                <span className="font-semibold">message</span> you want to send me.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black/50 backdrop-blur-sm rounded-lg sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-gray-800 mb-4 sm:mb-6 relative z-50">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-center">Send Me A Message</h2>

            {/* Success Message */}
            {showSuccess && (
              <div className="mb-3 sm:mb-4 p-2 sm:p-3">
                <p className="text-green-400 text-center font-medium text-sm sm:text-base">
                  Message sent successfully! I will get back to you soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 relative z-50">
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-900 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-white placeholder-gray-400 relative z-50 text-sm sm:text-base"
                    autoComplete="given-name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-900 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-white placeholder-gray-400 relative z-50 text-sm sm:text-base"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-900 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-white placeholder-gray-400 text-sm sm:text-base"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  rows={4}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-900 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-white placeholder-gray-400 resize-none text-sm sm:text-base"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-2 border-white border-t-transparent"></div>
                ) : (
                  <>
                    <RxEnvelopeClosed className="w-4 h-4 sm:w-5 sm:h-5" />
                    Contact Me
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="text-center mb-4 sm:mb-6">
            <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-blue-500 mb-3 sm:mb-4 md:mb-6 mx-auto"></div>
            <p className="text-gray-400 mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">or write me on my social networks</p>

            <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <button
                    key={social.name}
                    onClick={() => handleSocialClick(social.url, social.name)}
                    className={`p-2 sm:p-2.5 md:p-3 bg-gray-800 rounded-lg transition-all duration-300 ${social.color} hover:shadow-lg border border-transparent hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    aria-label={social.name}
                    title={social.name}
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Desktop Layout - Two Columns */}
        <div className="hidden lg:grid grid-cols-2 gap-12 items-center">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-20"></div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Connect with me
              </h1>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I will read all emails. Send me any message you want and I will get back to you.
              </p>

              <div className="space-y-2">
                <p className="text-blue-400">
                  Just enter your <span className="font-semibold">Name</span>, <span className="font-semibold">Email</span> and the
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold">message</span> you want to send me.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <div className="w-24 h-1 bg-blue-500 mb-6"></div>
              <p className="text-gray-400 mb-6">or write me on my social networks</p>

              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <button
                      key={social.name}
                      onClick={() => handleSocialClick(social.url, social.name)}
                      className={`p-3 bg-gray-800 rounded-lg transition-all duration-300 ${social.color} border border-transparent hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                      aria-label={social.name}
                      title={social.name}
                    >
                      <IconComponent className="w-6 h-6" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-8 text-center">Send Me A Message</h2>

            {/* Success Message */}
            {showSuccess && (
              <div className="mb-6 p-4">
                <p className="text-green-400 text-center font-medium">
                  ✓ Message sent successfully! I will get back to you soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-white placeholder-gray-400"
                    autoComplete="given-name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-white placeholder-gray-400"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-white placeholder-gray-400"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-white placeholder-gray-400 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                ) : (
                  <>
                    <RxEnvelopeClosed className="w-5 h-5" />
                    Contact Me
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;