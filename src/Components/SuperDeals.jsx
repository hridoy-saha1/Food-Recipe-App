import React from "react";

const products = [
  {
    id: 1,
    name: "Organic coconut",
    img: "https://www.greendna.in/cdn/shop/products/coconutdi.jpg?v=1595938752",
    priceRange: "$10.00 - $70.00",
    rating: 4,
    sold: 365,
    available: 634,
  },
  {
    id: 2,
    name: "Almond organic",
    img: "https://i.ibb.co/0n42B9h/almond.png",
    priceRange: "$10.00 - $70.00",
    rating: 4,
    sold: 365,
    available: 634,
  },
  {
    id: 3,
    name: "Fresh Fruit Sweet 1Kg",
    img: "https://i.ibb.co/yfHgTCh/fruit.png",
    priceRange: "$10.00 - $70.00",
    rating: 4,
    sold: 365,
    available: 634,
  },
  {
    id: 4,
    name: "Organic coconut",
    img: "https://i.ibb.co/9h6ZxZs/dried-apricots.png",
    priceRange: "$10.00 - $70.00",
    rating: 4,
    sold: 365,
    available: 634,
  },
  {
    id: 5,
    name: "Almond organic",
    img: "https://i.ibb.co/3Cd8VQv/tomato.png",
    priceRange: "$10.00 - $70.00",
    rating: 4,
    sold: 365,
    available: 634,
  },
];

// Helper to render stars
function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg
        key={i}
        aria-hidden="true"
        className={`w-5 h-5 ${i <= fullStars ? "text-yellow-400" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.19c.969 0 1.371 1.24.588 1.81l-3.394 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118L10 13.347l-3.394 2.46c-.784.57-1.838-.196-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L3.595 9.4c-.783-.57-.38-1.81.588-1.81h4.19a1 1 0 00.95-.69l1.286-3.974z" />
      </svg>
    );
  }
  return <div className="flex">{stars}</div>;
}

export default function SuperDeals() {
  return (
    <section className="p-6 max-w-7xl mx-auto border rounded-md border-red-500">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-1">Super Deals Of The Week</h2>
          <p className="text-gray-600 text-sm">
            Dont miss this opportunity at a special discount just for this week
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-red-600 text-white rounded-full px-5 py-2 font-semibold flex items-center gap-2">
            <span className="font-bold">00</span>Hours
            <span>:</span>
            <span className="font-bold">00</span>Mins
            <span>:</span>
            <span className="font-bold">00</span>Secs
          </div>
          <button className="border rounded-full w-9 h-9 flex justify-center items-center hover:bg-gray-100">
            ←
          </button>
          <button className="border rounded-full w-9 h-9 flex justify-center items-center hover:bg-gray-100">
            →
          </button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {products.map(({ id, name, img, priceRange, rating, sold, available }) => {
          // Calculate progress for sold (percentage)
          const total = sold + available;
          const soldPercent = (sold / total) * 100;

          return (
            <div
              key={id}
              className="border-r last:border-r-0 pr-3 flex flex-col items-center text-center"
            >
              <img src={img} alt={name} className="h-36 object-contain mb-3" />
              <StarRating rating={rating} />
              <p className="font-bold mt-1 mb-1">{name}</p>
              <p className="text-red-700 font-semibold mb-2">{priceRange}</p>

              <div className="w-full bg-gray-200 h-2 rounded-full mb-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-red-500 to-yellow-400 h-full"
                  style={{ width: `${soldPercent}%` }}
                />
              </div>

              <div className="flex justify-between w-full text-xs text-gray-700 font-semibold">
                <span>
                  Sold: <span className="font-bold">{sold}</span>
                </span>
                <span>
                  Available: <span className="font-bold">{available}</span>
                </span>
              </div>

              <button className="mt-3 bg-green-700 text-white p-2 rounded-full hover:bg-green-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 5M17 13l1.4 5M6 21a1 1 0 100-2 1 1 0 000 2zm12 0a1 1 0 100-2 1 1 0 000 2z"
                  />
                </svg>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
