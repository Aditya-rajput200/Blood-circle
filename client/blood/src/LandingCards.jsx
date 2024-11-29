import React from "react";

const LandingCards = () => {
  const cards = [
    {
      title: "Donate Blood",
      description: "Donate blood today. Help save lives.",
      buttonText: "Learn more",
      image: "https://i.pinimg.com/736x/e1/5b/52/e15b52c1d97d694a9ac9fe71db9b9f58.jpg", // Replace with your image URL
      buttonLink: "/donate-blood",
    },
    {
      title: "Volunteer Team",
      description: "We are always looking for your help.",
      buttonText: "Become a Volunteer",
      image: "https://i.pinimg.com/736x/13/e7/6e/13e76e585d372062bd5f0b08f5da8cec.jpg", // Replace with your image URL
      buttonLink: "/volunteer",
    },
    {
      title: "Donate Money",
      description: "Your financial gift can help others.",
      buttonText: "Donate now",
      image: "https://i.pinimg.com/736x/83/08/52/83085201047a440bde9d1a70d71446b7.jpg", // Replace with your image URL
      buttonLink: "/donate-money",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="card bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
        >
          <img
            src={card.image}
            alt={card.title}
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
            <p className="text-gray-600 my-2">{card.description}</p>
            <a
              href={card.buttonLink}
              className="btn bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-900"
            >
              {card.buttonText}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandingCards;
