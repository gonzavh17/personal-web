import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

type AnimatedInViewProps = {
  children: ReactNode;
};

const AnimatedInView = ({ children }: AnimatedInViewProps) => {
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5, damping: 100, delay: .40 }}
        >
          {children}
        </motion.div>
      )}
    </InView>
  );
};

export default AnimatedInView;