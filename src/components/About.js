import { FaHistory, FaMapMarkerAlt } from "react-icons/fa";
import { GrRestaurant } from "react-icons/gr";
import { RiCustomerService2Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";

const AboutUs = () => {
  const cardSpring = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 500 },
  });

  const logoSpring = useSpring({
    from: { opacity: 0, transform: 'scale(0.3)' },
    to: async (next, cancel) => {
      await next({ opacity: 1, transform: 'scale(1.1)' });
      await next({ transform: 'scale(1)' });
    },
    config: { duration: 700, delay: 100 },
    reset: true,
  });

  return (
    <motion.div
      className="p-4 w-full flex flex-col items-center h-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-96 w-full rounded-md flex flex-col md:flex-row items-center md:justify-between shadow-lg">
        <h1 className="text-center md:text-left w-full md:w-1/2 text-3xl md:text-6xl p-4 md:p-10 font-bold text-gray-800">
          Welcome to
          <span className="text-orange-500 mx-4 animate-pulse font-bold">
            FoodWing
          </span>
          ~ Where Every Meal Takes Flight
        </h1>
        <animated.img
          className="transition duration-300 md:mr-5 transform hover:scale-110 h-40 w-40 md:h-64 md:w-64 rounded-full border-4 p-1 cursor-pointer border-orange-500 shadow-lg"
          src="https://logowik.com/content/uploads/images/free-food-delivery699.logowik.com.webp"
          alt="FoodWing Logo"
          style={logoSpring}
        />
      </div>

      <animated.div
        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10"
        style={cardSpring}
      >
        <AboutCard
          icon={<FaHistory size={50} />}
          title="Our Story"
          description="Inspired by our love for great food and technology, FoodWing was created to bring the best of both worlds together. From humble beginnings to becoming a favorite food app, our journey is fueled by a passion for culinary excellence and customer satisfaction."
        />

        <AboutCard
          icon={<GrRestaurant size={50} />}
          title="Wide Range of Restaurants"
          description="FoodWing collaborates with a diverse selection of restaurants, ranging from local eateries to popular chains, offering users a wide variety of cuisines and dining options to choose from. Whether craving sushi, pizza, or authentic Indian curry, users can find it all on FoodWing."
        />

        <AboutCard
          icon={<FaMapMarkerAlt size={50} />}
          title="Real-Time Order Tracking"
          description="With FoodWing, users can track their orders in real-time from the moment they are placed to the minute they arrive at their doorstep. This transparency and visibility into the delivery process enhance user confidence and satisfaction."
        />

        <AboutCard
          icon={<RiCustomerService2Fill size={50} />}
          title="Customer Support"
          description="FoodWing prioritizes customer satisfaction and provides dedicated customer support to address any queries, concerns, or issues promptly. Whether it's assistance with orders, refunds, or feedback, users can rely on FoodWing's responsive support team for assistance."
        />
      </animated.div>
    </motion.div>
  );
};

const AboutCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="bg-white rounded-md p-6 border-2 border-orange-500 hover:bg-orange-100 hover:shadow-lg cursor-pointer"
      whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0,0,0,0.2)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-lg text-gray-700">{description}</p>
    </motion.div>
  );
};

export default AboutUs;
