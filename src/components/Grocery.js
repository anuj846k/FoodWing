import React from "react";
import { motion } from "framer-motion";
import { useSpring,animated } from "react-spring";
import {
  FiShoppingBag,
  FiTruck,
  FiCreditCard,
  FiPercent,
} from "react-icons/fi";

const Grocery = () => {
  const cardSpring = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 500 },
  });

  return (
    <motion.div
      className="p-4 w-full items-center mb-32 h-auto flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="h-80 w-full rounded-md mb-10 flex flex-col md:flex-row shadow-lg py-8 px-4 md:px-10 relative"
        style={{
          backgroundImage: `url("https://imgs.search.brave.com/tBK063Iho9PbzRkVXFzlB7rS2FNxDq4lieZKrfOQlFc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzQ5LzI2LzI4/LzM2MF9GXzI0OTI2/Mjg3NV8ySGZXeXN4/OGdneUZZaVlwZU5a/Q2FNYmM5TW04akZa/Yi5qcGc")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute  w-full h-full rounded-md"></div>
        <div className="z-10 md:w-1/2 md:text-left relative">
          <h1 className="text-4xl md:text-6xl font-bold text-black-800 mb-4">
            Welcome to
            <span className="text-green-600 mx-4 animate-pulse font-bold">
              GroceryMart !!
            </span>
          </h1>
          <p className="text-lg md:text-xl mt-10 font-bold text-black relative z-10 bg-white shadow-2xl rounded-full p-4">
            Your one-stop shop for all your grocery needs. Discover fresh
            produce, pantry staples, and more.
          </p>
        </div>
      </div>
      <animated.div
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10"
        style={cardSpring}
      >
        <GroceryCard
          icon={<FiShoppingBag size={50} />}
          title="Wide Selection"
          description="Discover a wide range of fresh produce, pantry staples, and household essentials."
        />
        <GroceryCard
          icon={<FiTruck size={65} />}
          title="Fast Delivery"
          description="Get your groceries delivered right to your doorstep quickly and reliably."
        />
        <GroceryCard
          icon={<FiCreditCard size={60} />}
          title="Secure Payments"
          description="Shop with confidence knowing your transactions are secure with various payment options."
        />
        <GroceryCard
          icon={<FiPercent size={65} />}
          title="Great Deals"
          description="Enjoy exclusive discounts and special offers on quality products."
        />
      </animated.div>
    </motion.div>
  );
};

const GroceryCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-md p-6 border-2 border-green-500 hover:bg-green-100 hover:shadow-lg cursor-pointer">
      <div className="flex items-center mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-lg text-gray-700">{description}</p>
    </div>
  );
};

export default Grocery;
