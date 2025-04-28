import { motion } from 'framer-motion';
import TypeBadge from './TypeBadge';
import { Pokemon } from '../types/pokemon';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };
  
  const formatPokemonId = (id: number) => {
    return `#${id.toString().padStart(3, '0')}`;
  };
  
  return (
    <motion.div 
      variants={item}
      className="pokemon-card bg-card rounded-lg overflow-hidden shadow-md"
    >
      <div className="p-4 bg-gray-100 flex justify-center">
        <motion.img
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={pokemon.sprite}
          alt={pokemon.name}
          className="h-32 w-32 object-contain"
          loading="lazy"
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-bold capitalize">
            {pokemon.name}
          </h2>
          <span className="text-sm font-medium text-gray-500">
            {formatPokemonId(pokemon.id)}
          </span>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-3">
          {pokemon.types.map(type => (
            <TypeBadge key={type} type={type} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PokemonCard;