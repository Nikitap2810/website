import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {  ArrowLeft,  } from "lucide-react";
import RVL1 from "../assets/rvl1.jpeg"
import IIC1 from "../assets/iic1.jpeg"
import OUD1 from "../assets/oud1.jpg"
import N211 from "../assets/n211.jpeg"
import N212 from "../assets/n212.jpeg"
import N213 from "../assets/n213.jpeg"
import NIR1 from "../assets/nir1.jpeg"
import NIR2 from "../assets/nir2.jpeg"
import NIR3 from "../assets/nir3.jpeg"


const projects = [
  {
    id: 1,
    name: "RealEstate Verified Leads",
    description: `A mobile platform designed to streamline the management of verified property leads for real estate brokers and agents. It provides real-time status tracking and smart filtering to enhance deal conversion efficiency and communication.`,
    summary: [
      "Lead Management: Enables brokers to track and update property leads in real-time.",
      "Smart Filtering: Helps agents prioritize high-potential clients through dynamic filters.",
      "Status Updates: Real-time property status visibility for better coordination.",
      "Built with React Native for cross-platform compatibility and performance.",
      "Integrated REST APIs for data syncing and live updates.",
    ],
    images: [RVL1],
    link: 'https://play.google.com/store/apps/details?id=com.realestateverifiedleads&hl=en_IN'
  },
  {
    id: 2,
    name: "Oudbyidol",
    description: `A feature-rich e-commerce mobile application built for a perfume brand, offering a seamless shopping experience with advanced features like wishlists, smart search, and a smooth checkout process.`,
    summary: [
      "Product Listings: Displays detailed product cards with images, prices, and descriptions.",
      "Wishlist & Reviews: Allows users to save favorite products and leave feedback.",
      "Smart Search: Implements fuzzy matching for efficient product discovery.",
      "React Native frontend with Redux for state management.",
      "Checkout: Integrated payment gateway and cart functionality.",
    ],
    images: [OUD1],
    link: ''
  },
  {
    id: 3,
    name: "Islamic Quiz IIC",
    description: `An interactive quiz-based educational app focused on Islamic studies, designed to engage students through gamified learning techniques like leaderboards and timed quizzes.`,
    summary: [
      "Gamified Quizzes: Engaging quiz formats with timers and scoring systems.",
      "Leaderboard: Motivates users through competitive rankings.",
      "Offline Mode: Supports learning without internet connection.",
      "Used React Native and local storage (AsyncStorage) for persistence.",
      "Tested across multiple OS versions for stability.",
    ],
    images: [IIC1],
    link: 'https://play.google.com/store/apps/details?id=com.zaidpatel_iic.iic_islamic_information_center&hl=en_IN'
  },
  {
    id: 4,
    name: "N21",
    description: `A fashion-focused e-commerce website offering curated luxury collections with advanced filtering, responsive UI, and a smooth shopping flow. Built for https://n21.in.`,
    summary: [
      "Product Filtering: Advanced multi-criteria filters for quick discovery.",
      "Responsive Design: Optimized for mobile and desktop devices.",
      "React.js + Next.js frontend for performance and SSR.",
      "Integration with secure payment systems.",
      "Admin Panel support for order and inventory management.",
    ],
    images: [N211, N212, N213],
    link: 'https://n21.in'
  },
  {
    id: 5,
    name: "Nirvanti",
    description: `An elegant lifestyle and wellness e-commerce platform (https://nirvanti.in), showcasing handcrafted products with a clean, secure, and responsive user experience.`,
    summary: [
      "Product Catalog: Displays premium handcrafted wellness items.",
      "Secure Transactions: Implemented payment gateway and validation flows.",
      "Mobile-First UI: Designed for optimal mobile UX with React.js.",
      "Seamless Checkout: Simple and intuitive purchase process.",
      "Integrated analytics and user tracking for marketing insights.",
    ],
    images: [NIR1, NIR2, NIR3],
    link: 'https://nirvanti.in'
  }
];


const Projects = ({goBack}) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
      <div className="h-full w-full flex items-center justify-center bg-gray-100">
      <div className="h-full w-full bg-white shadow-lg overflow-hidden ">
        {/* Header */}
        <div className="bg-blue-500 text-white h-1/6 flex w-full relative items-center justify-center text-center">
          <button
    onClick={goBack}
    className="text-white font-semibold text-xl flex items-center space-x-2 absolute left-4 bottom-8 "
  >
    <ArrowLeft size={20} />
  </button>
          <h1 className="text-2xl font-bold mt-4">Projects</h1>
        </div>

      {!selectedProject ? (
        <div className="flex flex-col overflow-y-auto h-[cal(100vh-4rem)]">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer m-2"
              onClick={() => handleProjectClick(project)}
            >
              <Carousel
                infinite
                showDots
                autoPlay
                autoPlaySpeed={3000}
                containerClass="carousel-container"
                responsive={{
                  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
                  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
                  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
                }}
              >
                {project.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.name} ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                ))}
              </Carousel>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
                <p className="text-gray-600 truncate">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-6 bg-white shadow-lg rounded-lg h-5/6  overflow-auto">
          <button
            onClick={handleCloseDetails}
            className="bg-red-500 text-white px-4 py-2 rounded mb-4"
          >
            Close Details
          </button>
          <h2 className="text-2xl font-bold mb-4">{selectedProject.name}</h2>
          <p className="mb-4">{selectedProject.description}</p>
          <h3 className="text-lg font-semibold mb-2">Summary:</h3>
          <ul className="list-disc pl-6 mb-4">
            {selectedProject.summary.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold mb-2">Link:</h3>
          <ul className="list-disc">
           <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {selectedProject.link}
                </a>
          
          </ul>
        </div>
      )}
    </div>
    </div>


  );
};

export default Projects;
