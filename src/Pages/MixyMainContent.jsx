import React, { useState } from "react";
import SuperDeals from "../Components/SuperDeals";

const categories = [
  { id: 1, name: "Meats & Seafood", img: "https://media.istockphoto.com/id/1156027693/photo/fresh-salmon-steak-with-a-variety-of-seafood-and-herbs.jpg?s=612x612&w=0&k=20&c=FnY31V37yG5Ip4ejRttubUHBS8PPTaZfHHukDsEDjc0=" },
  { id: 2, name: "Beverages", img: "https://i.ibb.co/hRvcYFH1/download.jpg" },
  { id: 3, name: "Bread & Bakery", img:"https://i.ibb.co/SDQkYsgS/download.jpg" },
  { id: 4, name: "Frozen Foods", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhqJ6VkOxZYq2KSBY9cAd37PqhBOEb_0xsRg&s" },
  { id: 5, name: "Fresh Vegetables", img: "https://4.imimg.com/data4/AY/TE/IMOB-27708947/c__data_users_defapps_appdata_internetexplorer_temp_sav-500x500.jpg" },
];

const featuredProducts = [
  {
    id: 1,
    name: "Organic Avocado",
    price: "$4.99",
    img: "https://farmersbox.co.nz/cdn/shop/files/Hass-Avocado.jpg?v=1751339982",
  },
  {
    id: 2,
    name: "Fresh Strawberries",
    price: "$7.99",
    img: "https://www.allrecipes.com/thmb/oG4LKyxXjFehRf46rtksge5ep84=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/How-To-Store-Strawberries-4x3-1615f2fed54d4215ba9e831a52c18ff6.jpg",
  },
  {
    id: 3,
    name: "Red Apples",
    price: "$5.49",
    img: "https://botanix.com/cdn/shop/files/Malus-domestica-Red-Gala_fe2a1904-c46a-49f6-aa4d-cc4cd8ce111c.jpg?v=1713453664&width=1946",
  },
];

export default function MixyMainContent() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if product already in cart
      if (prevCart.find(item => item.id === product.id)) {
        return prevCart; // avoid duplicates
      }
      return [...prevCart, product];
    });
  };

  return (
    <>
    <div className="min-h-screen flex flex-col bg-white text-gray-800 font-sans max-w-6xl mx-auto px-4 py-10 relative">

      {/* Cart Icon */}
      <button
        onClick={() => setShowCart(!showCart)}
        className="fixed top-25 right-4 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 focus:outline-none z-50 flex items-center"
        aria-label="Toggle cart"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 5M17 13l1.4 5M6 21a1 1 0 100-2 1 1 0 000 2zm12 0a1 1 0 100-2 1 1 0 000 2z" />
        </svg>
        {cart.length > 0 && (
          <span className="ml-1 bg-red-500 rounded-full px-2 text-xs font-bold">{cart.length}</span>
        )}
      </button>

      {/* Cart Dropdown */}
      {showCart && (
        <div className="fixed top-25 right-4 w-72 bg-white border border-gray-300 rounded shadow-lg z-50 p-4 max-h-96 overflow-y-auto">
          <h3 className="font-semibold text-lg mb-3">Your Cart</h3>
          {cart.length === 0 ? (
            <p className="text-gray-500">Cart is empty.</p>
          ) : (
            <ul>
              {cart.map(item => (
                <li key={item.id} className="flex items-center mb-3">
                  <img src={item.img} alt={item.name} className="w-12 h-12 rounded object-cover mr-3" />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-green-700">{item.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <button
            onClick={() => setShowCart(false)}
            className="mt-3 bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded"
          >
            Close
          </button>
        </div>
      )}

      {/* Categories Section */}
      <section className="py-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-700">Shop by Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {categories.map(({ id, name, img }) => (
            <div key={id} className="rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
              <img src={img} alt={name} className="w-full h-40 object-cover" />
              <div className="p-3 text-center font-semibold text-lg bg-green-50">{name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 rounded-lg mt-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-800">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {featuredProducts.map(({ id, name, price, img }) => (
            <div key={id} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
              <img
                src={img}
                alt={name}
                className="w-full h-40 object-cover object-top rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{name}</h3>
              <p className="text-green-700 font-bold mb-4">{price}</p>
              <button
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold"
                onClick={() => addToCart({ id, name, price, img })}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
      
       <SuperDeals></SuperDeals>
      {/* Promotional Banner */}
      <section className="bg-green-700 text-white py-8 flex flex-col md:flex-row justify-between items-center rounded-md mt-12 shadow-lg px-6">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-semibold">Free shipping on orders over $25!</h3>
          <p>Need help? Call Us: <a href="tel:+888554168" className="underline">+8 88 55 4168</a></p>
        </div>
        <button className="bg-white text-green-700 px-6 py-3 rounded-md font-bold hover:bg-gray-200 transition">
          Shop Now
        </button>
      </section>
    </div>
    </>
  );
}
