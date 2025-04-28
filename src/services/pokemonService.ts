import { Pokemon } from '../types/pokemon';

// Function to fetch all pokemon (first 150)
export const fetchAllPokemon = async (): Promise<Pokemon[]> => {
  try {
    // Fetch the list of the first 150 pokemon
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
    
    if (!response.ok) {
      throw new Error('Failed to fetch Pokemon list');
    }
    
    const data = await response.json();
    
    // For each pokemon in the list, fetch its detailed info
    const pokemonPromises = data.results.map(async (pokemon: { url: string, name: string }) => {
      const detailResponse = await fetch(pokemon.url);
      
      if (!detailResponse.ok) {
        throw new Error(`Failed to fetch details for ${pokemon.name}`);
      }
      
      const pokemonData = await detailResponse.json();
      
      // Format the data into our Pokemon type
      return {
        id: pokemonData.id,
        name: pokemonData.name,
        sprite: pokemonData.sprites.front_default,
        types: pokemonData.types.map((typeInfo: { type: { name: string } }) => typeInfo.type.name),
      };
    });
    
   
    return await Promise.all(pokemonPromises);
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
    throw error;
  }
};

// Function to get all unique pokemon types from the first 150 pokemon
export const getAllPokemonTypes = async (): Promise<string[]> => {
  try {
    // Fetch all pokemon first
    const allPokemon = await fetchAllPokemon();
    
    // Extract all types and remove duplicates
    const allTypes = new Set<string>();
    
    allPokemon.forEach(pokemon => {
      pokemon.types.forEach(type => {
        allTypes.add(type);
      });
    });
    
    // Convert Set to array and sort alphabetically
    return Array.from(allTypes).sort();
  } catch (error) {
    console.error('Error getting Pokemon types:', error);
    return [];
  }
};