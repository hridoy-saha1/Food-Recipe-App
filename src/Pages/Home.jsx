import React from 'react';
import { useLoaderData } from 'react-router';
import RecipeCard from '../Components/RecipeCard';
import BannerSlider from '../Components/BannerSlider';
import ExtraSections from '../Components/ExtraSections';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

// Framer Motion variants for animation
const headingVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      delay: 0.3,
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};

const Home = () => {
  const topRecipes = useLoaderData();

  return (
    <>
      <title>Home</title>
      <div className="container mx-auto px-4 py-6">

        {/* Slide in Banner */}
        <motion.div
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 70, duration: 0.8 }}
        >
          <BannerSlider />
        </motion.div>

        {/* Animated Heading */}
        <motion.h1
          className="text-4xl font-bold mb-10 text-center text-blue-800"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          ✨ Top Recipes of the Week ✨
        </motion.h1>

        {/* Animated Recipe Grid with Stagger */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {topRecipes.map((recipe) => (
            <motion.div key={recipe._id} variants={itemVariants}>
              <RecipeCard recipes={recipe} />
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
        <motion.div
          className="text-center mb-8"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/allRecipe">
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-2 rounded-lg shadow-lg"
              whileHover={{ boxShadow: '0px 8px 24px rgba(0,0,0,0.2)' }}
              transition={{ duration: 0.3 }}
            >
              See All Recipes
            </motion.button>
          </Link>
        </motion.div>

        {/* Extra Sections */}
        <ExtraSections />
      </div>
    </>
  );
};

export default Home;
