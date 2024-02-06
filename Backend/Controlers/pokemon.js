import Pokemons from './Database/PokemonData.json';


export const allPokemons = (req, res) => {
    const allPokemons = req.params.pokemon_type;
    const filteredPokemon = Pokemons[pokemonType.toLowerCase()];
  
    res.send(`
      <h1>List of ${allPokemons}</h1>
      <ul>
        ${filteredPokemon.map((pokemon, index) => `
          <li>
            <a href="/pokemon/${allPokemons}/${index}">
              ${pokemon.name}
            </a>
          </li>
        `).join('')}
      </ul>
    `);
  };


export const getPokemonById = (req, res) => {
    const pokemonId = req.params.pokemon_id;
    const pokemon = Pokemons[pokemonId];

    res.send (`
      <h1>${pokemon.name}</h1>
      <ul>
        <li>Type: ${pokemon.type}</li>
        <li>Base: ${pokemon.base}</li>
      </ul>
    `);
  };