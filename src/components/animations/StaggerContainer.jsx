import { motion } from 'framer-motion';

const StaggerContainer = ({ children, className = "", delay = 0, staggerDelay = 0.1 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delay,
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = "", direction = "up" }) => {
  const directions = {
    up: { y: 40, opacity: 0 },
    down: { y: -40, opacity: 0 },
    left: { x: 40, opacity: 0 },
    right: { x: -40, opacity: 0 },
    scale: { scale: 0.8, opacity: 0 }
  };

  return (
    <motion.div
      variants={{
        hidden: directions[direction],
        visible: { 
          x: 0, 
          y: 0, 
          scale: 1, 
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.25, 0, 1]
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default StaggerContainer;
