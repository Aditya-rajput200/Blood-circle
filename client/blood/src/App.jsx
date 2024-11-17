

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./login";
import Signup from "./Signup";
import LandingCards from './LandingCards';
import { Spotlight } from "./components/ui/Spotlight";
import {WavyBackground} from "./components/ui/wavy-background"
import { AnimatedTooltipPreview } from "./test";
// import Navbar from './components/Navbar';
// import Register from './components/Register';

// import UserDashboard from './components/UserDashboard';
// import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <div className="!bg-black text-white">
     <Spotlight/>
    
      {/* Navbar */}
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a href="/donor">Donor</a></li>
        <li><a href="/user">User</a></li>
        <li><a href="/hospital-registration">Hospital Registration</a></li>
      </ul>
    </div>
    <a href="/" className="btn btn-ghost font-bold text-red-800 text-xl">Blood Circle</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-bold">
      <li><a href="/donor">Donor</a></li>
      <li><a href="/user">User</a></li>
      <li><a href="/hospital-registration">Hospital Registration</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a href="/login" className="btn bg-red-700 text-white hover:bg-red-900 border-red-900">Login</a>
    <a href="/signup" className="btn bg-red-700 text-white hover:bg-red-900 border-red-900">Signup</a>
  </div>
</div>
<Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>


{/* heroSection */}

<section>
  
  <div className="hero bg-base-200 min-h-screen py-19 mt-105 dark:bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">Making Every Drop <br /> Count🩸</h1>
        
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <button className="btn bg-red-700 text-white hover:bg-red-900 border-red-900">
          Donate Now
        </button>
      </div>
    </div>
  </div>

  <LandingCards/>

  <div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="https://i.pinimg.com/736x/6d/8b/a9/6d8ba9167220a74688d3d0680be29dff.jpg"
      className="max-w-sm rounded-md shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">World Blood Donors Day</h1>
      
        <ul>World blood donor day is celebrated annually to mark the birthday anniversary of Karl Landsteiner on 14th June 1868.</ul>
        <br/>
        <ul>Landsteiner was awarded by the Nobel Prize for his discovery of ABO blood group system.</ul>
        <br/>
        <ul> The event was carried out for the first time in the year 2005 by a collaborative initiative of the World Health Organisation, the international federation of Red Cross and Red Crescent Societies to raise awareness of the need for safe blood and blood products, and to thank blood donors for their voluntary, life-saving gifts of blood.</ul>
      
      <button className="btn  bg-red-700 text-white hover:bg-red-900 border-red-900">Donate</button>
    </div>
  </div>
</div>
  
</section>

{/* Stat */}

<div className="flex justify-center items-center  py-4">
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



{/*Testimonials */}
<div className="testi">
  <h3 className="text-center text-2xl p-4 font-bold">Our Testimony</h3>
<AnimatedTooltipPreview/>

</div>


{/* Footer */}
<div className="divider divider-primary"></div>
<footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Volunteer Team</a>
    {/* <a className="link link-hover"></a> */}
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>





    </div>
  )
}

export default App;