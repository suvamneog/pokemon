import { motion } from 'framer-motion';

const LoadingState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="w-20 h-20 mb-6"
      >
        <img src="/pokeball.svg" alt="Loading..." className="w-full h-full" />
      </motion.div>
      <p className="text-lg font-medium text-gray-600">Loading Pokémon...</p>
    </div>
  );
};

export default LoadingState;