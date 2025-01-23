"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  
  

  const toggleSection = (section: string) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  

  return (
    <main className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Workflow Logo"
            width={40}
            height={40}
            className="w-10"
          />
          <span className="text-xl font-medium inline-flex items-baseline">
            <span>OUTHAD AI</span>
            <sup className="text-sm ml-1 text-blue-500">DEV</sup>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="relative group font-medium">
            <span className="text-gray-800 hover:text-blue-600 transition-colors duration-200">Product</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
          </a>
          <a href="#features" className="relative group font-medium">
            <span className="text-gray-800 hover:text-blue-600 transition-colors duration-200">Use cases</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
          </a>
          {/* <a href="#" className="relative group font-medium">
            <span className="text-gray-800 hover:text-blue-600 transition-colors duration-200">Integration</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
          </a>
          <a href="#" className="relative group font-medium">
            <span className="text-gray-800 hover:text-blue-600 transition-colors duration-200">Pricing</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
          </a>
          <a href="#" className="relative group font-medium">
            <span className="text-gray-800 hover:text-blue-600 transition-colors duration-200">Docs</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
          </a> */}
        </div>

        <div className="flex items-center gap-4">
          <button onClick={() => window.open('https://cal.com/tanzilouthad', '_blank')} className="button-secondary font-medium">Schedule Demo</button>
          <button onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })} className="button-primary font-medium">Join Waitlist</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Left Column */}
        <div className="flex-1 space-y-8">
          <h1 className="text-5xl md:text-7xl font-medium leading-[1.1]">
            Definning the next <br/>
            age of <span className="italic">software</span><br/>
            with AI
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl font-normal">
            Build sophisticated AI applications with our comprehensive development platform. From AI Agents and automation to RAG engines and complex workflows, we empower you to create production-ready solutions with ease.
          </p>
          <div className="flex gap-4 pt-4">
            <button onClick={() => window.open('https://cal.com/tanzilouthad', '_blank')} className="button-primary font-medium">Get Started</button>
            <button onClick={() => window.open('https://dhkxxavs92m.typeform.com/to/EMu0WTAE?typeform-source=outhad.com', '_blank')} className="button-secondary font-medium">Join Waitlist</button>
          </div>
        </div>

        {/* Right Column - Workflow Diagram */}
        <div className="flex-1 ">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl relative ">
            {/* Top Icons */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
              </div>
              <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-teal-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z"/>
                </svg>
              </div>
              <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
                <p className="text-sm text-gray-600 max-w-2xl font-normal">
            and more
            </p>
            </div>

            {/* Workflow Steps */}
            <div className="space-y-6 relative">
              {/* Data Sources */}
              <div className="flex justify-between mb-12">
                <div className="space-y-4">
                  <div className="border border-gray-100 rounded-xl p-4 bg-gradient-to-r from-gray-50/50 to-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-sm">
                        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
                        </svg>
                      </div>
                      <span className="font-semibold">CRM Data</span>
                    </div>
                  </div>

                  <div className="border border-gray-100 rounded-xl p-4 bg-gradient-to-r from-gray-50/50 to-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-sm">
                        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                        </svg>
                      </div>
                      <span className="font-semibold">ERP Systems</span>
                    </div>
                  </div>

                  <div className="border border-gray-100 rounded-xl p-4 bg-gradient-to-r from-gray-50/50 to-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-sm">
                        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                        </svg>
                      </div>
                      <span className="font-semibold">Analytics Data</span>
                    </div>
                  </div>
                </div>

                {/* Central AI Processing */}
                <div className="flex items-center">
                  <div className="border-2 border-blue-500 rounded-xl p-6 bg-white shadow-xl">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                        </svg>
                      </div>
                      <span className="font-bold text-lg">Outhad AI</span>
                      <div className="text-sm text-gray-500 mt-2">Intelligent Processing</div>
                    </div>
                  </div>
                </div>

                {/* Use Cases */}
                <div className="space-y-4">
                  <div className="border border-gray-100 rounded-xl p-4 bg-gradient-to-r from-gray-50/50 to-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-sm">
                        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                        </svg>
                      </div>
                      <span className="font-semibold">Predictive Analytics</span>
                    </div>
                  </div>

                  <div className="border border-gray-100 rounded-xl p-4 bg-gradient-to-r from-gray-50/50 to-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-sm">
                        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                        </svg>
                      </div>
                      <span className="font-semibold">Process Automation</span>
                    </div>
                  </div>

                  <div className="border border-gray-100 rounded-xl p-4 bg-gradient-to-r from-gray-50/50 to-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-sm">
                        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                        </svg>
                      </div>
                      <span className="font-semibold">Intelligent Insights</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connecting Lines */}
              <div className="absolute inset-0">
                {/* Input Connections */}
                {/* CRM Data to Outhad AI */}
                <div className="absolute top-[2px] left-[28.5%] w-[3.8%] h-[2px]">
                  <div className="relative w-full h-full bg-gradient-to-r from-blue-500 to-purple-500">
                    <div className="absolute left-0 top-[-3px] w-2 h-2 rounded-full bg-white border-2 border-blue-500 animate-ping"></div>
                    <div className="absolute right-0 top-[-3px] w-2 h-2 rounded-full bg-white border-2 border-purple-500 animate-ping"></div>
                  </div>
                </div>

                {/* ERP Systems to Outhad AI */}
                <div className="absolute top-[90px] left-[28.5%] w-[3.5%] h-[2px]">
                  <div className="relative w-full h-full bg-gradient-to-r from-teal-500 to-purple-500">
                    <div className="absolute left-0 top-[-3px] w-2 h-2 rounded-full bg-white border-2 border-teal-500 animate-ping"></div>
                    <div className="absolute right-0 top-[-3px] w-2 h-2 rounded-full bg-white border-2 border-purple-500 animate-ping"></div>
                  </div>
                </div>

                {/* Analytics Data to Outhad AI */}
                <div className="absolute top-[180px] left-[28.5%] w-[4%] h-[2px]">
                  <div className="relative w-full h-full bg-gradient-to-r from-purple-500 to-purple-500">
                    <div className="absolute left-0 top-[-3px] w-2 h-2 rounded-full bg-white border-2 border-purple-500 animate-ping"></div>
                    <div className="absolute right-0 top-[-3px] w-2 h-2 rounded-full bg-white border-2 border-purple-500 animate-ping"></div>
                  </div>
                </div>

                {/* Output Connections */}
                {/* Outhad AI to Predictive Analytics */}
                <div className="absolute top-[2px] right-[35%] w-[3.8%] h-[2px]">
                  <div className="relative w-full h-full bg-gradient-to-r from-purple-500 to-green-500">
                    <div className="absolute left-0 top-[-3px] w-2 h-2 rounded-full bg-white border-2 border-purple-500 animate-ping"></div>
                    <div className="absolute right-0 top-[-3px] w-2 h-2 rounded-full bg-white border-2 border-green-500 animate-ping"></div>
                  </div>
                </div>

                {/* Outhad AI to Process Automation */}
                <div className="absolute top-[100px] right-[35%] w-[3.5%] h-[2px]">
                  <div className="relative w-full h-full bg-gradient-to-r from-purple-500 to-yellow-500">
                    <div className="absolute left-0 top-[-3px] w-2 h-2 rounded-full bg-white border-2 border-purple-500 animate-ping"></div>
                    <div className="absolute right-0 top-[-3px] w-2 h-2 rounded-full bg-white border-2 border-yellow-500 animate-ping"></div>
                  </div>
                </div>

                {/* Outhad AI to Intelligent Insights */}
                <div className="absolute top-[180px] right-[35%] w-[3.8%] h-[2px]">
                  <div className="relative w-full h-full bg-gradient-to-r from-purple-500 to-red-500">
                    <div className="absolute left-0 top-[-3px] w-2 h-2 rounded-full bg-white border-2 border-purple-500 animate-ping"></div>
                    <div className="absolute right-0 top-[-3px] w-2 h-2 rounded-full bg-white border-2 border-red-500 animate-ping"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </section>

      {/* Animated Marquee Banner */}
      <div className="w-full overflow-hidden bg-gradient-to-r from-gray-900 to-black py-3 mt-12 relative">
        <div className="animate-marquee whitespace-nowrap flex">
          <div className="flex space-x-4 mx-4">
            <span className="text-white/90 text-lg">
              Currently we are offering our product only to businesses
            </span>
            <span className="text-blue-400 text-lg">•</span>
            <span className="text-blue-400 text-lg">
              Join the waitlist to get early access
            </span>
            <span className="text-blue-400 text-lg">•</span>
          </div>
          {/* Duplicate content for seamless loop */}
          <div className="flex space-x-4 mx-4">
            <span className="text-white/90 text-lg">
              Currently we are offering our product only to businesses
            </span>
            <span className="text-blue-400 text-lg">•</span>
            <span className="text-blue-400 text-lg">
              Join the waitlist to get early access
            </span>
            <span className="text-blue-400 text-lg">•</span>
          </div>
          <div className="flex space-x-4 mx-4">
            <span className="text-white/90 text-lg">
              Currently we are offering our product only to businesses
            </span>
            <span className="text-blue-400 text-lg">•</span>
            <span className="text-blue-400 text-lg">
              Join the waitlist to get early access
            </span>
            <span className="text-blue-400 text-lg">•</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-medium mb-6">
            Discover What's Possible<br/>
            with <span className="italic">outhad ai</span>
          </h2>
          <p className="text-xl text-gray-600">
            Transform your workflows with AI-powered automation that handles repetitive tasks, 
            streamlines processes, and helps your team focus on what matters most.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {/* Marketing/Growth Section */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => toggleSection('marketing')}
              className="w-full py-6 flex items-center justify-between text-left"
            >
              <span className="text-2xl font-medium">Marketing/Growth</span>
              <span className="text-2xl">{openSection === 'marketing' ? '−' : '+'}</span>
            </button>
            {openSection === 'marketing' && (
              <div className="pb-6">
                <ul className="space-y-4">
                  <li className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      <span className="font-medium">Content Creation and Optimization</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-5">
                      Outhad's AI capabilities can significantly enhance content creation and optimization processes:
                    </p>
                    <ul className="ml-10 text-sm text-gray-600 space-y-1">
                      <li>• Automated content generation for blog posts, social media updates, and product descriptions</li>
                      <li>• AI-powered content optimization for SEO, readability, and engagement</li>
                      <li>• Personalized content recommendations based on user behavior and preferences</li>
                    </ul>
                  </li>
                  <li className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      <span className="font-medium">Social Media Management</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-5">
                      Outhad's AI capabilities can streamline social media management tasks:
                    </p>
                    <ul className="ml-10 text-sm text-gray-600 space-y-1">
                      <li>• Scheduling and automating posts across multiple platforms</li>
                      <li>• AI-driven content curation and suggestion</li>
                      <li>• Sentiment analysis and trend monitoring for better engagement</li>
                    </ul>
                  </li>
                  <li className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      <span className="font-medium">Email Marketing Automation</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-5">
                      Outhad's automation features can revolutionize email marketing efforts:
                    </p>
                    <ul className="ml-10 text-sm text-gray-600 space-y-1">
                      <li>• Personalized email content generation based on user data</li>
                      <li>• Automated segmentation and targeting of email lists</li>
                      <li>• A/B testing and optimization of email campaigns</li>
                    </ul>
                  </li>
                </ul>
                <div className="mt-8">
                  <p className="text-gray-600 mb-6">
                   Streamline your marketing efforts and accelerate business growth with AI-powered automation.
                  </p>
                  <button className="button-primary">Try Now</button>
                </div>
              </div>
            )}
          </div>

          {/* Sales Section */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => toggleSection('sales')}
              className="w-full py-6 flex items-center justify-between text-left"
            >
              <span className="text-2xl font-medium">Sales</span>
              <span className="text-2xl">{openSection === 'sales' ? '−' : '+'}</span>
            </button>
            {openSection === 'sales' && (
              <div className="pb-6">
                <ul className="space-y-4">
                  <li className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      <span className="font-medium">Lead Generation and Qualification</span>
                    </div>
                    <ul className="ml-10 text-sm text-gray-600 space-y-1">
                      <li>• AI-driven scoring to identify high-value leads</li>
                      <li>• Automated enrichment of lead data from multiple sources</li>
                      <li>• Personalized outreach recommendations based on prospect behavior</li>
                    </ul>
                  </li>
                  <li className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      <span className="font-medium">Sales Forecasting and Pipeline Management</span>
                    </div>
                    <ul className="ml-10 text-sm text-gray-600 space-y-1">
                      <li>• Predictive analytics to anticipate sales trends and revenue</li>
                      <li>• Real-time alerts and insights for deal prioritization</li>
                      <li>• Automated updates and reminders for follow-ups</li>
                    </ul>
                  </li>
                  <li className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      <span className="font-medium">Sales Coaching and Training</span>
                    </div>
                    <ul className="ml-10 text-sm text-gray-600 space-y-1">
                      <li>• Conversation intelligence to analyze and provide feedback on sales calls</li>
                      <li>• Automated onboarding materials tailored to individual rep performance</li>
                      <li>• AI-driven tips and best practices for ongoing skill development</li>
                    </ul>
                  </li>
                </ul>
                <div className="mt-8">
                  <p className="text-gray-600 mb-6">
                    Transform your sales process with AI-powered lead scoring, predictive forecasting, and intelligent coaching tools.
                  </p>
                  <button className="button-primary">Try Now</button>
                </div>
              </div>
            )}
          </div>

          {/* Operations Section */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => toggleSection('operations')}
              className="w-full py-6 flex items-center justify-between text-left"
            >
              <span className="text-2xl font-medium">Operations: Predictive Analytics and Forecasting</span>
              <span className="text-2xl">{openSection === 'operations' ? '−' : '+'}</span>
            </button>
            {openSection === 'operations' && (
              <div className="pb-6">
                <ul className="space-y-4">
                  <li className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      <span className="font-medium">Demand Planning and Inventory Forecasting</span>
                    </div>
                    <ul className="ml-10 text-sm text-gray-600 space-y-1">
                      <li>• Real-time stock level predictions based on historical and external data</li>
                      <li>• Automated reorder alerts and optimization of supply chain logistics</li>
                      <li>• Dynamic pricing suggestions to maximize revenue</li>
                    </ul>
                  </li>
                  <li className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      <span className="font-medium">Churn Analysis and Customer Retention</span>
                    </div>
                    <ul className="ml-10 text-sm text-gray-600 space-y-1">
                      <li>• Predictive modeling to identify at-risk customers</li>
                      <li>• Personalized campaigns to retain high-value accounts</li>
                      <li>• Automated follow-ups and win-back strategies</li>
                    </ul>
                  </li>
                  <li className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      <span className="font-medium">Risk Assessment and Fraud Detection</span>
                    </div>
                    <ul className="ml-10 text-sm text-gray-600 space-y-1">
                      <li>• Data-driven insights to pinpoint suspicious activities</li>
                      <li>• Automated flagging of high-risk transactions</li>
                      <li>• Ongoing model refinement based on new behavioral patterns</li>
                    </ul>
                  </li>
                </ul>
                <div className="mt-8">
                  <p className="text-gray-600 mb-6">
                    Easily scales operations without a proportional increase in workforce.
                  </p>
                  <button className="button-primary">Try Now</button>
                </div>
              </div>
            )}
          </div>
          {/* Business Intelligence and Data Enrichment */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => toggleSection('business')}
              className="w-full py-6 flex items-center justify-between text-left"
            >
              <span className="text-2xl font-medium">Business Intelligence and Data Enrichment +</span>
              <span className="text-2xl">{openSection === 'business' ? '−' : '+'}</span>
            </button>
            {openSection === 'business' && (
              <div className="pb-6">
                <ul className="space-y-4">
                  <li className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      <span className="font-medium">360-Degree Customer View</span>
                    </div>
                    <ul className="ml-10 text-sm text-gray-600 space-y-1">
                      <li>• AI-enhanced profiles combining data from multiple sources</li>
                      <li>• Real-time synchronization with CRMs, marketing tools, and data warehouses</li>
                      <li>• Automated enrichment (e.g., firmographics, contact details)</li>
                    </ul>
                  </li>
                  <li className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      <span className="font-medium">Advanced Reporting and Dashboards</span>
                    </div>
                    <ul className="ml-10 text-sm text-gray-600 space-y-1">
                      <li>• AI-driven data visualization to reveal hidden trends</li>
                      <li>• Automated report generation and scheduling</li>
                      <li>• Customized dashboards tailored to team or department goals</li>
                    </ul>
                  </li>
                  <li className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      <span className="font-medium">Data Quality and Governance</span>
                    </div>
                    <ul className="ml-10 text-sm text-gray-600 space-y-1">
                      <li>• Automatic cleansing and deduplication of records</li>
                      <li>• AI-based validation for ensuring accurate, up-to-date information</li>
                      <li>• Policy enforcement for data privacy and compliance</li>
                    </ul>
                  </li>
                </ul>
                <div className="mt-8">
                  <p className="text-gray-600 mb-6">
                    Transform your business intelligence with AI-powered data enrichment and analytics that scale effortlessly.
                  </p>
                  <button className="button-primary">Try Now</button>
                </div>
              </div>
            )}
          </div>
          {/* Industry-Specific Solutions */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => toggleSection('industry')}
              className="w-full py-6 flex items-center justify-between text-left"
            >
              <span className="text-2xl font-medium">Industry-Specific Solutions +</span>
              <span className="text-2xl">{openSection === 'industry' ? '−' : '+'}</span>
            </button>
            {openSection === 'industry' && (
              <div className="pb-6">
                <ul className="space-y-4">
                  {/* Healthcare */}
                  <li className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      <span className="font-medium">Healthcare</span>
                    </div>
                    <ul className="ml-10 text-sm text-gray-600 space-y-1">
                      <li>• Patient risk assessment and personalized treatment suggestions</li>
                      <li>• Secure analytics on patient data to improve outcomes</li>
                      <li>• Appointment scheduling and follow-up automation</li>
                    </ul>
                  </li>
                  {/* Finance */}
                  <li className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      <span className="font-medium">Finance</span>
                    </div>
                    <ul className="ml-10 text-sm text-gray-600 space-y-1">
                      <li>• Credit scoring and fraud detection using AI models</li>
                      <li>• Real-time market trend forecasting for trading and investments</li>
                      <li>• Automated compliance checks for regulatory requirements</li>
                    </ul>
                  </li>
                  {/* Retail and eCommerce */}
                  <li className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      <span className="font-medium">Retail and eCommerce</span>
                    </div>
                    <ul className="ml-10 text-sm text-gray-600 space-y-1">
                      <li>• Personalized product recommendations and dynamic pricing</li>
                      <li>• Inventory and supply chain optimization</li>
                      <li>• Automated customer segmentation for targeted promotions</li>
                    </ul>
                  </li>
                  {/* Manufacturing */}
                  <li className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      <span className="font-medium">Manufacturing</span>
                    </div>
                    <ul className="ml-10 text-sm text-gray-600 space-y-1">
                      <li>• Production line automation and quality control predictions</li>
                      <li>• Predictive maintenance for machinery and equipment</li>
                      <li>• Resource optimization based on real-time data</li>
                    </ul>
                  </li>
                  {/* Education */}
                  <li className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      <span className="font-medium">Education</span>
                    </div>
                    <ul className="ml-10 text-sm text-gray-600 space-y-1">
                      <li>• Personalized learning paths and AI-driven tutoring tools</li>
                      <li>• Automated grading and feedback on assignments</li>
                      <li>• Insights on student performance and engagement</li>
                    </ul>
                  </li>
                </ul>
                <div className="mt-8">
                  <p className="text-gray-600 mb-6">
                    Scale your business operations efficiently while maintaining a lean team structure.
                  </p>
                  <button className="button-primary">Try Now</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* After Features Section, before background elements */}
      <section id="waitlist" className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex gap-8 max-w-7xl mx-auto">
          {/* Waitlist Card */}
          <div className="flex-1 bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gray-800 to-black flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                </svg>
              </div>
              <h3 className="text-3xl font-medium mb-4">
                Join Our Waitlist
              </h3>
              <p className="text-gray-600 text-lg">
                Currently in private beta. Be among the first to experience the future of AI-powered automation.
              </p>
            </div>
            <div className="max-w-md mx-auto">
              <button 
                onClick={() => window.open('https://dhkxxavs92m.typeform.com/to/EMu0WTAE?typeform-source=outhad.com', '_blank')}
                className="w-full button-primary py-3 hover:scale-105 transform transition-all duration-200"
              >
                Join Waitlist
              </button>
            </div>
          </div>

          {/* Business Demo Card */}
          <div className="flex-1 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-xl text-white hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9" />
                </svg>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-3xl font-medium mb-4">
                  Book a Demo
                </h3>
                <p className="text-white/90 text-lg">
                  Transform your business with AI. See how Outhad AI streamlines operations.
                </p>
              </div>
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <svg className="w-5 h-5 text-white/90 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Personalized platform walkthrough</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <svg className="w-5 h-5 text-white/90 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Custom integration possibilities</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <svg className="w-5 h-5 text-white/90 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">ROI assessment for your business</span>
                  </div>
                </div>
                <button 
                  className="w-full bg-white text-gray-900 font-medium py-3 px-6 rounded-lg hover:bg-gray-100 hover:scale-105 transform transition-all duration-200"
                  onClick={() => window.open('https://cal.com/tanzilouthad', '_blank')}
                >
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative z-10 border-t border-gray-100/10 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.svg"
                  alt="Workflow Logo"
                  width={32}
                  height={32}
                  className="w-8"
                />
                <span className="text-lg font-medium inline-flex items-baseline">
                  <span>OUTHAD AI</span>
                  <sup className="text-xs ml-1 text-blue-500">DEV</sup>
                </span>
              </div>
              <p className="text-sm text-gray-500">
                Empowering businesses with intelligent automation solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-blue-500 transition-colors">Product</a></li>
                <li><a href="#features" className="hover:text-blue-500 transition-colors">Use Cases</a></li>
                <li><a href="#waitlist" className="hover:text-blue-500 transition-colors">Join Waitlist</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-medium mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <a href="mailto:hello@outhadai.com" className="hover:text-blue-500 transition-colors">
                    tanzil@outhad.com
                  </a>
                </li>
                <li>
                  <a href="https://cal.com/tanzilouthad" target="_blank" className="hover:text-blue-500 transition-colors">
                    Schedule a Call
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-medium mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://x.com/outhadai" 
                  target="_blank" 
                  className="text-gray-500 hover:text-blue-500 transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/company/outhadai" 
                  target="_blank" 
                  className="text-gray-500 hover:text-blue-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </a>
                <a 
                  href="https://github.com/Outhad-Search" 
                  target="_blank" 
                  className="text-gray-500 hover:text-blue-500 transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-100/10 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Outhad AI. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Background Gradient Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-[20%] w-[500px] h-[500px] bg-pink-100 rounded-full filter blur-3xl opacity-30"></div>

      {/* Background Dots Pattern */}
      <div className="absolute inset-0 w-full h-full" 
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}>
      </div>
    </main>
  );
}
