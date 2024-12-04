import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-red-500 via-red-600 to-red-800 min-h-screen flex items-center justify-center text-white relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-20 bg-[url('https://images.healthshots.com/healthshots/en/uploads/2022/06/14155840/blood-donation-1.jpg')] bg-cover bg-center"></div>
      
      <div className="container mx-auto px-4 py-16 text-center z-10">
        {/* Heading */}
        <h1 className="text-6xl font-extrabold drop-shadow-lg leading-tight">
          Save Lives, <br /> <span className="text-yellow-300">Donate Blood</span>
        </h1>
        
        {/* Subheading */}
        <p className="mt-6 text-xl font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Join us in celebrating <strong>World Blood Donation Day</strong>. Your contribution can save lives.
        </p>
        
        {/* Buttons */}
        <div className="mt-10 flex justify-center space-x-4">
          <Link
            to="/awareness"
            className="bg-white text-red-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 hover:text-red-700 transition transform hover:scale-105"
          >
            Learn More
          </Link>
          <Link
            to="/donate"
            className="bg-yellow-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-600 transition transform hover:scale-105"
          >
            Donate Now
          </Link>
        </div>
      </div>
      
      {/* Footer Note */}
      <footer className="absolute bottom-4 w-full text-center font-semibold text-lg text-white">
        Together, we can make a difference!
      </footer>
    </div>
  );
};

export default Home;
