import { motion } from 'framer-motion';
import { FaExclamationTriangle } from 'react-icons/fa';

interface ErrorStateProps {
  message: string;
}

const ErrorState = ({ message }: ErrorStateProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-20"
    >
      <div className="bg-red-100 p-6 rounded-lg text-center max-w-md">
        <FaExclamationTriangle className="text-red-500 text-5xl mx-auto mb-4" />
        <h2 className="text-xl font-bold text-red-700 mb-2">Oops! Something went wrong</h2>
        <p className="text-red-600">{message}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          Try Again
        </button>
      </div>
    </motion.div>
  );
};

export default ErrorState;