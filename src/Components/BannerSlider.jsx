
import React from "react";
import Slider from "react-slick";

const BannerSlider = () => {
  const banners = [
    {
      id: 1,
      title: "Delicious Bangladeshi Recipes",
      image: "https://i.ibb.co/h1sC4TFN/img81389-whqc-660x440q80.jpg",
    },
    {
      id: 2,
      title: "Taste Italian Classics",
      image: "https://i.ibb.co/DfqmKfgh/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg",
    },
    {
      id: 3,
      title: "Hot & Cheesy Pizzas",
      image: "https://i.ibb.co/C39mSgqb/istockphoto-519526540-612x612.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="mb-8 rounded-xl overflow-hidden shadow-md">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id}>
            <div className="relative">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-2xl md:text-4xl font-bold">
                {banner.title}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
