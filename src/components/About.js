import { FaHistory, FaMapMarkerAlt } from "react-icons/fa";
import { GrRestaurant } from "react-icons/gr";
import { RiCustomerService2Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useSpring, animated  } from "react-spring";

const AboutUs = () => {
  const cardSpring = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 500 },
  });

  const logoSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { duration: 500, delay: 200 },
  });

  return (
    <motion.div
      className="p-4 w-full items-center h-auto flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-96 w-full rounded-md flex items-center justify-around shadow-lg">
        <h1 className="text-center md:text-left w-full md:w-1/2 text-4xl md:text-6xl p-4 md:p-10 font-bold text-gray-800">
          Welcome to
          <span className="text-orange-500 mx-4 animate-pulse font-bold">
            FoodWing
          </span>
          ~ Where Every Meal Takes Flight
        </h1>
        <animated.img
          className="transition duration-300 transform hover:scale-110 h-40 w-40 md:h-64 md:w-64 rounded-full border-4 p-1 cursor-pointer border-orange-500 shadow-lg"
          src="https://logowik.com/content/uploads/images/free-food-delivery699.logowik.com.webp"
          alt="FoodWing Logo"
          style={logoSpring}
        />
      </div>
      <animated.div
        className="w-full h-auto flex flex-wrap justify-evenly mt-10"
        style={cardSpring}
      >
        <div className="mb-8 w-72 rounded-md p-4 border-2 border-orange-500 hover:bg-orange-100 hover:shadow-lg cursor-pointer">
          <h3 className="text-3xl font-semibold mb-2 flex items-center">
            <FaHistory size={50} className="inline-block mr-2" />
            Our Story
          </h3>
          <p className="text-lg max-w-2xl mx-auto">
            Inspired by our love for great food and technology, FoodWing was
            created to bring the best of both worlds together. From humble
            beginnings to becoming a favorite food app, our journey is fueled by
            a passion for culinary excellence and customer satisfaction.
          </p>
        </div>
        <div className="mb-8 w-72 rounded-md p-4 border-2 border-orange-500 hover:bg-orange-100 hover:shadow-lg cursor-pointer">
          <h3 className="text-3xl font-semibold mb-2 flex items-center">
            <GrRestaurant size={65} className="inline-block mr-3" />
            Wide Range of Restaurants
          </h3>
          <p className="text-lg max-w-2xl mx-auto">
            FoodWing collaborates with a diverse selection of restaurants,
            ranging from local eateries to popular chains, offering users a wide
            variety of cuisines and dining options to choose from. Whether
            craving sushi, pizza, or authentic Indian curry, users can find it
            all on FoodWing.
          </p>
        </div>
        <div className="mb-8 w-72 rounded-md p-4 border-2 border-orange-500 hover:bg-orange-100 hover:shadow-lg cursor-pointer">
          <h3 className="text-3xl font-semibold mb-2 flex items-center">
            <FaMapMarkerAlt size={60} className="inline-block mr-2" />
            Real-Time Order Tracking
          </h3>
          <p className="text-lg max-w-2xl mx-auto">
            With FoodWing, users can track their orders in real-time from the
            moment they are placed to the minute they arrive at their doorstep.
            This transparency and visibility into the delivery process enhance
            user confidence and satisfaction.
          </p>
        </div>
        <div className="mb-8 w-72 rounded-md p-4 border-2 border-orange-500 hover:bg-orange-100 hover:shadow-lg cursor-pointer">
          <h3 className="text-3xl font-semibold mb-2 flex items-center">
            <RiCustomerService2Fill size={65} className="inline-block mr-2" />
            Customer Support
          </h3>
          <p className="text-lg max-w-2xl mx-auto">
            FoodWing prioritizes customer satisfaction and provides dedicated
            customer support to address any queries, concerns, or issues
            promptly. Whether it's assistance with orders, refunds, or feedback,
            users can rely on FoodWing's responsive support team for assistance.
          </p>
        </div>
      </animated.div>
    </motion.div>
  );
};

export default AboutUs;
