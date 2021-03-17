import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

import "./TitleAbhaya.css";
import { Autoplay } from "swiper";

const title = {
  hidden: {},

  visible: {
    x: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const childContainerAnimation = {
  hidden: {
    height: 50,
  },

  visible: (child) => {
    return {
      height: child.length > 0 ? 40 : 0,
      transition: {
        duration: 1,
      },
    };
  },
};

const childAnimation = {
  hidden: {
    height: 0,
  },

  visible: {
    height: "auto",
    color: ["#edebed", "#857b88", "#c9b270", "#989aa6"],
    rotateX: [0, 0, 0, 180, 0],
    transition: {
      color: {
        yoyo: Infinity,
        duration: 20,
      },
      height: {
        duration: 0.5,
      },
      rotateX: {
        duration: 3,
      },
    },
  },
  exit: {
    opacity: 0,
  },
};

const TitleAbhaya = ({
  text,
  fontSize = "",
  extraClasses = "",
  children,
  className = "",
  otherChilds = ["same", "", "shit"],
}) => {
  let childs = text ? text : children;
  childs = Array.isArray(childs) ? childs : [childs];
  const [textToShow, setTextToShow] = useState(childs);
  const [toggle, setToggle] = useState(false);
  const intervalRelief = useRef(null);

  useEffect(() => {
    const changer = ["bring", "", "true"];
    const timeout = setInterval(() => {
      console.log("intervaaaall run");

      setToggle((newToggle) => {
        const changeTo = Math.random() > 0.5 ? changer : otherChilds;
        const newText = newToggle ? childs : changeTo;
        setTextToShow(newText);
        return !newToggle;
      });
    }, 9000);

    intervalRelief.current = timeout;
    return () => {
      // clearInterval(intervalRelief?.current);
    };
  }, []);

  return (
    <motion.h2
      variants={title}
      animate="visible"
      initial="hidden"
      className={`title-abhaya ${extraClasses} ${className}`}
    >
      {textToShow.map((child, index) => {
        return (
          <motion.div
            animate={{ height: child.length > 0 ? 50 : 0 }}
            transition={{ duration: 1 }}
            className="title-abhaya__child-wrapper"
          >
            <AnimatePresence exitBeforeEnter>
              <motion.span
                key={child.toLowerCase()}
                className="title-abhaya__span"
                variants={childAnimation}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {child}
              </motion.span>
            </AnimatePresence>
          </motion.div>
        );
      })}
    </motion.h2>
  );
};

TitleAbhaya.propTypes = {};

export default TitleAbhaya;
