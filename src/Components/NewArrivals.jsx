import React from 'react';

const newArrivals = [
  {
    id: 1,
    date: '18 Nov 2025',
    author: 'Hridoy',
    comments: 15,
    title: 'Crunchy chicken fried',
    description:
      'Crunchy Chicken Fried is a golden-brown, crispy delight made from tender, juicy chicken pieces coated in a flavorful, seasoned batter. Each bite delivers a satisfying crunch, followed by the succulent, well-cooked chicken inside.',
    image: 'https://i.ibb.co.com/M5gQmL3k/Drumsticks-liquidation-plan-05.jpg',
  },
  {
    id: 2,
    date: '18 Nov 2018',
    author: 'Arghya',
    comments: 30,
    title: 'Classic Margherita Pizza Recipe',
    description:
      'Classic Margherita Pizza is a timeless Italian favorite that celebrates simplicity and fresh flavors. It features a thin, soft, and slightly crispy crust topped with a vibrant tomato sauce, fresh mozzarella cheese, and fragrant basil leaves.',
    image: 'https://i.ibb.co.com/ksQmD2KG/20220211142645-margherita-9920-e41233d5-dcec-461c-b07e-03245f031dfe.webp',
  },
  {
    id: 3,
    date: '18 Nov 2018',
    author: 'Ram M',
    comments: 0,
    title: 'Classic Smashed Cheeseburger',
    description:
      'Classic Smashed Cheeseburger is a juicy, flavor-packed burger that’s crispy on the edges and tender in the middle. Made by smashing fresh beef patties on a hot griddle, it creates a caramelized crust that locks in the savory juices.',
    image: 'https://i.ibb.co.com/ksQmD2KG/20220211142645-margherita-9920-e41233d5-dcec-461c-b07e-03245f031dfe.webphttps://i.ibb.co.com/27gpf7sF/Smashburger-recipe-120219.webp',
  },
];

const NewArrivals = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">New Arrivals</h2>
        <div className="flex justify-center items-center gap-1 text-yellow-500 text-xl">
          <span>★</span>
          <span className="text-gray-400">★</span>
          <span>★</span>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {newArrivals.map((item) => (
          <div key={item.id} className=" rounded bg-amber-100 shadow-sm overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center gap-3 text-gray-500 text-sm mb-2">
                <span className="bg-red-700 text-white px-2 py-1 text-xs rounded">
                  {item.date}
                </span>
                <span>👤 {item.author}</span>
                <span>💬 {item.comments} Comments</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-8 gap-2">
        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        <span className="w-3 h-3 bg-red-700 rounded-full"></span>
      </div>
    </section>
  );
};

export default NewArrivals;
