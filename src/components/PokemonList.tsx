import { motion } from 'framer-motion';
import PokemonCard from './PokemonCard';
import EmptyState from './EmptyState';
import { Pokemon } from '../types/pokemon';

interface PokemonListProps {
  pokemon: Pokemon[];
}

const PokemonList = ({ pokemon }: PokemonListProps) => {
  if (pokemon.length === 0) {
    return <EmptyState />;
  }
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      {pokemon.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </motion.div>
  );
};

export default PokemonList;