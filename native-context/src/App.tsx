import { useState, useEffect, createContext, useContext } from "react";

interface Pokemon {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

function usePokemon(): { pokemon: Pokemon[] } {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  useEffect(() => {
    fetch("/pokemon.json")
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, []);
  return { pokemon };
}

const ThemeContext = createContext("light");

const PokemonList = ({ pokemon }: { pokemon: Pokemon[] }) => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      {pokemon.map((p) => (
        <div key={p.id}>
          <h2>
            {p.name}:{theme}
          </h2>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const { pokemon } = usePokemon();
  return (
    <ThemeContext.Provider value="dark">
      <PokemonList pokemon={pokemon} />
    </ThemeContext.Provider>
  );
};

export default App;
