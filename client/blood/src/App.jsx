import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Donor from './components/pages/Donate';
import User from './components/pages/User'; // Import your User component
import HospitalRegistration from './components/pages/Login'; 
import Donate from './components/pages/Donate';
import Login from "./components/pages/HospitalRegistration";
import { useNavigate } from 'react-router-dom';
import Signup from "./components/pages/Signup";
import LandingCards from './LandingCards';
import { Spotlight } from "./components/ui/Spotlight";
import { WavyBackground } from "./components/ui/wavy-background";
import { AnimatedTooltipPreview } from "./test";


function App() {
  return (
    <Router> {/* Wrap everything in Router */}
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

        {/* Routes */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/donor" element={<Donor />} />
          <Route path="/user" element={<User />} />
          <Route path="/donate" element={<Donate />} /> {/* Correct Donate Route */}
          <Route path="/hospital-registration" element={<HospitalRegistration />} />
        </Routes>

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
                
                {/* Donate Now Button */}
                <DonateButton />
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
                
                {/* Donate Now Button */}
                <DonateButton />
              </div>
            </div>
          </div>
        </section>

        {/* Stat Section */}
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
        <div className="testi">
          <h3 className="text-center text-2xl p-4 font-bold">Our Testimony</h3>
          <AnimatedTooltipPreview />
        </div>

        {/* Footer */}
        <div className="divider divider-"></div>
        <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
          <nav className="grid grid-flow-col gap-4">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Volunteer Team</a>
          </nav>
          <nav>
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.37 4.569 3.414-1.684 1.317-3.798 1.963-5.972 1.963-.389 0-.773-.023-1.152-.068 2.141 1.376 4.688 2.18 7.401 2.18 8.895 0 13.78-7.406 13.78-13.78 0-.21-.005-.42-.015-.628C23.173 6.402 23.62 5.555 24 4.557z"></path>
                </svg>
              </a>
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M0 1.988C0 1.446.45 1 .998 1h22.004c.548 0 .998.446.998.988v20.024c0 .543-.45.988-.998.988H.998C.45 22 0 21.554 0 21.012V1.988zm4.63 13.02h2.632V7.74h-2.632v7.268zm1.318-8.043h1.25c.312 0 .544.262.544.585v5.825c0 .323-.232.584-.544.584h-1.25c-.312 0-.544-.261-.544-.584v-5.825c0-.323.232-.585.544-.585zm5.062 8.043h2.632v-5.01c0-1.138-.587-1.825-1.704-1.825-1.213 0-1.826.939-1.826 1.876v5.961h2.632v-7.268h-2.632v.987z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </footer>
      </div>
    </Router>
  );
}

const DonateButton = () => {
  const navigate = useNavigate();
  return (
    <button className="btn btn-outline border-white" onClick={() => navigate("/donate")}>
      Donate Now
    </button>
  );
}

export default App;  