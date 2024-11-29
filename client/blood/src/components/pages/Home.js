import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  // Add global loading state
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

    
const cards = [
    {
      title: "Donate Blood",
      description: "Donate blood today. Help save lives.",
      buttonText: "Learn more",
      image: "https://i.pinimg.com/736x/e1/5b/52/e15b52c1d97d694a9ac9fe71db9b9f58.jpg", // Replace with real image URLs
    },
    {
      title: "Volunteer Team",
      description: "We are always looking for your help.",
      buttonText: "Become a Volunteer",
      image: "https://i.pinimg.com/736x/13/e7/6e/13e76e585d372062bd5f0b08f5da8cec.jpg",
    },
    {
      title: "Donate Money",
      description: "Your financial gift can help.",
      buttonText: "Donate now",
      image: "https://i.pinimg.com/736x/2f/30/8a/2f308aef28800761a43de843b59e75bb.jpg",
    },
  ];

  return (
    <div className="!bg-black text-white">

      {/* Show loading overlay if isLoading is true */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="loader border-t-4 border-b-4 border-red-500 w-12 h-12 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Main Sections */}
      <section>
        {/* Hero Section */}
        <div className="hero bg-base-200 min-h-screen dark:bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex items-center justify-center">
  <div className="hero-content text-center">
    <div className="max-w-xl mx-auto">
      <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-500 to-red-700 drop-shadow-md">
        Making Every Drop Count 
      </h1>
      <li className='list-none'>
      <p className="py-6 text-lg text-white-600 dark:text-gray-300 font-medium leading-relaxed">
         This project bridges the gap between blood donors and recipients by providing real-time updates, efficient donor matching, and seamless
        communication.
      </p>
      </li>
      <button
        className="btn btn-outline bg-red-700 text-white mt-6 hover:bg-red-900 border-red-900 border-white transition duration-300 ease-in-out transform hover:scale-105"
        onClick={() => navigate("/donor")}
      >
        Donate Now
      </button>
    </div>
  </div>
</div>



        <div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="https://i.pinimg.com/736x/1a/a8/bc/1aa8bcc04bfe53f33b66ac2de00e7f97.jpg"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">World Donors Day</h1>
      <p className="py-6">
      World blood donor day is celebrated annually to mark the birthday anniversary of Karl Landsteiner on 14th June 1868.<br/>
      The event was carried out for the first time in the year 2005 by a collaborative initiative of the World Health Organisation, the international federation of Red Cross and Red Crescent Societies to raise awareness of the need for safe blood and blood products, and to thank blood donors for their voluntary, life-saving gifts of blood.
    
      </p>
      <button className="btn  bg-red-700 text-white ml-5 hover:bg-red-900 border-red-900">Donate Now</button>
    </div>
  </div>
</div>
<div className=" bg-black-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  {card.title}
                </h2>
                <p className="text-gray-600 mt-2">{card.description}</p>
                <button className="mt-4 px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600">
                  {card.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

        {/* Landing Cards */}
        
        <div className="flex justify-center items-center py-4">
          <div className="stats shadow">
            <div className="stat place-items-center">
              <div className="stat-title">Donors</div>
              <div className="stat-value">31K</div>
              <div className="stat-desc">From October 1st to November 1st</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title">Users</div>
              <div className="stat-value text-white">4,200</div>
              <div className="stat-desc text-white">↗︎ 40 (2%)</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title">New Registers</div>
              <div className="stat-value">1,200</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="testimonial text-white py-10">
          <h3 className="text-center text-3xl font-bold pb-8">Our Testimonies</h3>
          {/* <AnimatedTooltipPreview /> */}
        </div>
        <div className="divider divider-gray"></div>
        {/* Footer */}
        <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
          <nav className="grid grid-flow-col gap-4">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <div className="grid grid-flow-col gap-4">
            <a href="#" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="#" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a href="#" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
          <aside>
            <p>Copyright © {new Date().getFullYear()} - All rights reserved by ACME Industries Ltd</p>
          </aside>
        </footer>
      </section>
    </div>
  );
};

export default HomePage;
