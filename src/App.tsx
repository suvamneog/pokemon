import { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PokemonList from './components/PokemonList';
import LoadingState from './components/LoadingState';
import ErrorState from './components/ErrorState';
import { fetchAllPokemon } from './services/pokemonService';
import { Pokemon } from './types/pokemon';

function App() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  
  useEffect(() => {
    const loadPokemon = async () => {
      try {
        setLoading(true);
        const data = await fetchAllPokemon();
        setPokemon(data);
        setFilteredPokemon(data);
      } catch (err) {
        setError('Failed to fetch Pokémon data. Please try again later.');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };
    
    loadPokemon();
  }, []);
  
  useEffect(() => {
    const results = pokemon.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === '' || p.types.includes(selectedType);
      return matchesSearch && matchesType;
    });
    
    setFilteredPokemon(results);
  }, [searchTerm, selectedType, pokemon]);
  
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };
  
  const handleTypeFilter = (type: string) => {
    setSelectedType(type);
  };
  
  if (error) {
    return <ErrorState message={error} />;
  }
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <SearchBar 
          onSearch={handleSearch} 
          onTypeFilter={handleTypeFilter} 
          selectedType={selectedType}
        />
        
        {loading ? (
          <LoadingState />
        ) : (
          <PokemonList pokemon={filteredPokemon} />
        )}
      </main>
    </div>
  );
}

export default App;