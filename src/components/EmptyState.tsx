import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';

const EmptyState = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-16 text-center"
    >
      <div className="bg-gray-100 p-8 rounded-lg max-w-md">
        <div className="bg-gray-200 rounded-full p-4 inline-block mb-4">
          <FaSearch className="text-gray-500 text-4xl" />
        </div>
        <h2 className="text-xl font-bold text-gray-700 mb-2">No Pokémon Found</h2>
        <p className="text-gray-600">
          We couldn't find any Pokémon matching your search criteria. Try adjusting your filters or search term.
        </p>
      </div>
    </motion.div>
  );
};

export default EmptyState;