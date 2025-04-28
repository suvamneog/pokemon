import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="bg-primary shadow-md">
      <div className="container mx-auto px-4 py-5 flex items-center">
        <motion.div
          initial={{ rotate: -10 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.5 }}
          className="mr-3"
        >
          <img 
            src="/pokeball.svg" 
            alt="PokéExplorer Logo" 
            className="w-10 h-10" 
          />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white"
        >
          PokéExplorer
        </motion.h1>
      </div>
    </header>
  );
};

export default Header;