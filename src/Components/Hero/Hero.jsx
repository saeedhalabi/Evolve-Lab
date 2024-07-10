import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import InnovationPana from "../../assets/Innovation-pana 1.png";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5, // Delay each child animation by 0.5 seconds
        staggerChildren: 0.2, // Stagger each animation by 0.2 seconds
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="hero">
      <Navbar />
      <motion.div
        className="d-flex justify-content-center align-items-center flex-column mt-5"
        style={{ minHeight: "40vh" }}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 className="text-center fw-bold" variants={itemVariants}>
          Innovate Hub
        </motion.h1>
        <motion.h2
          className="fs-6 text-center text-wrap text-white fw-light mt-4"
          variants={itemVariants}
        >
          Submit and share your innovative ideas with the team
        </motion.h2>
        <motion.img
          src={InnovationPana}
          className="mt-5"
          alt=""
          width={200}
          variants={itemVariants}
        />
        <motion.button
          className="submit-btn mt-5 px-4 py-2 border-0 text-center"
          variants={itemVariants}
        >
          Submit Your Idea{" "}
          <span style={{ marginLeft: "5px" }}>
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9086 0.42877C15.8407 0.299535 15.7387 0.191296 15.6138 0.115733C15.4889 0.0401694 15.3457 0.000152221 15.1997 0H0.798363C0.652625 0.000601886 0.509807 0.0409145 0.385269 0.116602C0.260732 0.19229 0.159186 0.30049 0.0915527 0.429565C0.0239192 0.55864 -0.0072432 0.703708 0.00141677 0.849166C0.0100767 0.994625 0.0582314 1.13497 0.140702 1.25511L7.34137 11.6544C7.41477 11.761 7.51298 11.8481 7.62755 11.9083C7.74212 11.9685 7.8696 12 7.99903 12C8.12846 12 8.25595 11.9685 8.37051 11.9083C8.48508 11.8481 8.58329 11.761 8.65669 11.6544L15.8574 1.25511C15.9406 1.13522 15.9894 0.99479 15.9985 0.849097C16.0075 0.703405 15.9764 0.558026 15.9086 0.42877ZM7.99903 9.79373L2.3249 1.59989H13.6732L7.99903 9.79373Z"
                fill="white"
              />
            </svg>
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
