import { FightContext } from "../contexts/FightContext";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

export default function ListItem({ item }) {
  const { entries } = useContext(DataContext);
  const artworkurl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`;
  const { setFighter } = useContext(FightContext);
  const { createOpponent } = useContext(FightContext);

  const selectPokemon = (item) => {
    const { name, type, base, id } = item;
    console.log("selected id: ", item);
    setFighter([
      {
        id: id,
        name: name.english,
        type: type[0],
        hp: base.HP,
        attack: base.Attack,
        defense: base.Defense,
        speed: base.Speed,
      },
    ]);
  };

  return (
    <div key={item.id} className="itemcard bgBorder-gradient border-gradient">
      <div className="imgcontainer Imageborder-shadow">
        <img src={artworkurl} alt={item.name.english} className="flex border-rounded-md rounded-md"/>
        <p className="text-sm text-gold font-bold font-mono">
          PokeID {item.id}
        </p>
      </div>
      <div className="textcontainer border border-solid border-black p-6 rounded-bl rounded-br bg-red-300 bg-gradient Imageborder-shadow">
        <div className="textcontainer border border-solid border-white p-4 rounded-bl rounded-br bg-red-300 ">
          <h4 className="text-black text-center font-bold text-sm font-mono p-2">
            {item.name.english}
          </h4>
          <h4 className="text-black text-left text-xs font-mono">
            Attack {item.base.Attack}
          </h4>
          <h4 className="text-black text-left text-xs font-mono">
            Defense {item.base.Defense}{" "}
          </h4>
          <h4 className="text-black text-left text-xs font-mono">
            Speed {item.base.Speed}{" "}
          </h4>
          <h4 className="text-black text-left text-xs font-mono">
            Sp. Defense {item.base["Sp. Defense"]}
          </h4>
          <h4 className="text-black text-left text-xs font-mono">
            Sp. Attack {item.base["Sp. Attack"]}
          </h4>
          <div className="types text-sm p-3 flex">
          <p className="text-black font-bold font-mono">Type:</p>
          <p>{item.type[0]}</p>
          </div>
          <button className="sexyBorder mt-5" onClick={() => {selectPokemon(item); createOpponent(entries)}}>Select</button>
        </div>
      </div>
    </div>
  );
}
