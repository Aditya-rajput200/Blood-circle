import React from "react";

const Awareness = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-red-600 text-center">
        Why Donate Blood?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <img src="/images/world-blood-day.jpg" alt="World Blood Day" className="rounded shadow-lg" />
        <div>
          <p className="text-lg text-gray-700">
            Every 2 seconds, someone in the world needs blood. Blood donation is a simple act of kindness that can save lives.
          </p>
          <ul className="mt-4 space-y-2">
            <li>💉 One donation can save up to 3 lives.</li>
            <li>❤️ It's quick, easy, and safe.</li>
            <li>🌍 Blood cannot be manufactured; it can only come from donors.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Awareness;
