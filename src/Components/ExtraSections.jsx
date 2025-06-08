import React from 'react';

const ExtraSections = () => {
  const cookingTips = [
    {
      title: "👨‍🍳 Always Preheat Your Pan",
      tip: "Ensure your pan is hot before adding ingredients for even cooking and better flavor.",
    },
    {
      title: "🧂 Season Throughout",
      tip: "Don’t just season at the end — layer flavors throughout the cooking process.",
    },
    {
      title: "🔪 Keep Your Knife Sharp",
      tip: "A sharp knife improves safety and makes prep faster and more enjoyable.",
    },
    {
      title: "📏 Follow Measurements",
      tip: "Use exact measurements in baking, and trust your taste buds in cooking!",
    },
  ];

  const cuisines = [
    {
      name: "Bangladeshi",
      image: "https://i.ibb.co/CfpS5Lz/asp8rf11m2u7xj1fyq8s.webp",
    },
    {
      name: "Italian",
      image: "https://i.ibb.co/C39mSgqb/istockphoto-519526540-612x612.jpghttps://i.ibb.co/84TGDhqk/l-intro-1745944560.jpg",
    },
    {
      name: "Mexican",
      image: "https://i.ibb.co/CpSwDNVH/must-try-traditional-mexican-dishes-tacos-al-pastor.jpg",
    },
    {
      name: "Indian",
      image: "https://i.ibb.co/LdfL17Sd/SS-dosa.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 mt-24 space-y-24">
      
      {/* 💡 Cooking Tips Section */}
      <section className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-10">💡 Quick Cooking Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {cookingTips.map((tip, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-emerald-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-left border"
            >
              <h3 className="text-xl font-semibold mb-2 text-emerald-700">{tip.title}</h3>
              <p className="text-gray-600">{tip.tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🍽️ Popular Cuisines Section */}
      <section>
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-10">🍽️ Popular Cuisines</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cuisines.map((cuisine, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl hover:scale-105 transition duration-300"
            >
              <img
                src={cuisine.image}
                alt={cuisine.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-emerald-700">{cuisine.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ExtraSections;
