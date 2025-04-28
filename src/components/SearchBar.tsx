import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import { getAllPokemonTypes } from '../services/pokemonService';

interface SearchBarProps {
  onSearch: (term: string) => void;
  onTypeFilter: (type: string) => void;
  selectedType: string;
}

const SearchBar = ({ onSearch, onTypeFilter, selectedType }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonTypes, setPokemonTypes] = useState<string[]>([]);
  
  useEffect(() => {
    const fetchTypes = async () => {
      const types = await getAllPokemonTypes();
      setPokemonTypes(types);
    };
    
    fetchTypes();
  }, []);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };
  
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onTypeFilter(e.target.value);
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-8 p-5 bg-white rounded-lg shadow-md"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search Pokémon by name..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-all"
          />
        </div>
        
        <div className="md:w-1/3">
          <select
            value={selectedType}
            onChange={handleTypeChange}
            className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:border-primary transition-all appearance-none bg-white"
          >
            <option value="">All Types</option>
            {pokemonTypes.map(type => (
              <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
            ))}
          </select>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchBar;