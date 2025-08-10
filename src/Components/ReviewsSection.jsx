import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Ayesha Rahman",
    photo: "https://i.pravatar.cc/100?img=5",
    review: "The recipes here are amazing! I tried the butter chicken and it tasted just like a restaurant dish.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Chowdhury",
    photo: "https://i.pravatar.cc/100?img=12",
    review: "Easy-to-follow instructions and great presentation. My kids loved the chocolate cake recipe.",
    rating: 4,
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    photo: "https://i.pravatar.cc/100?img=20",
    review: "The vegan pasta recipe was simply delicious! Perfect for a healthy dinner.",
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-lime-50 via-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <motion.h2
          className="text-3xl font-bold text-center text-green-800 mb-10"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🍽 What Our Food Lovers Say 🍽
        </motion.h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <motion.div
              key={r.id}
              className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-green-400"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={r.photo}
                alt={r.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-green-300"
              />
              <h3 className="font-semibold text-lg text-green-800">{r.name}</h3>
              <p className="text-gray-600 mt-2 italic">"{r.review}"</p>

              {/* Rating */}
              <div className="flex justify-center mt-3">
                {Array.from({ length: r.rating }, (_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
                {Array.from({ length: 5 - r.rating }, (_, i) => (
                  <span key={i} className="text-gray-300 text-lg">★</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
