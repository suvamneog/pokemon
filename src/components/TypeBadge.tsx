interface TypeBadgeProps {
  type: string;
}

const TypeBadge = ({ type }: TypeBadgeProps) => {
  // Map the type to its corresponding Tailwind color class
  const getTypeColor = (type: string): string => {
    const typeColorMap: Record<string, string> = {
      normal: 'bg-normal text-white',
      fire: 'bg-fire text-white',
      water: 'bg-water text-white',
      electric: 'bg-electric text-black',
      grass: 'bg-grass text-white',
      ice: 'bg-ice text-black',
      fighting: 'bg-fighting text-white',
      poison: 'bg-poison text-white',
      ground: 'bg-ground text-black',
      flying: 'bg-flying text-white',
      psychic: 'bg-psychic text-white',
      bug: 'bg-bug text-white',
      rock: 'bg-rock text-white',
      ghost: 'bg-ghost text-white',
      dragon: 'bg-dragon text-white',
      dark: 'bg-dark text-white',
      steel: 'bg-steel text-black',
      fairy: 'bg-fairy text-black',
    };
    
    return typeColorMap[type] || 'bg-gray-500 text-white';
  };
  
  return (
    <span className={`${getTypeColor(type)} text-xs font-medium px-3 py-1 rounded-full capitalize`}>
      {type}
    </span>
  );
};

export default TypeBadge;