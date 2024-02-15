import { FightContext } from "../contexts/FightContext";
import { useContext } from "react";

export default function ListItem({ item }) {
  const artworkurl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`;
  // TODO: Place artworkurl in the img src={} attribute and remove it from alt={} attribute
  // TODO: Place the item.name.english in the img alt=""

  const { setFighter } = useContext(FightContext);

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
    <div
      key={item.id}
      className="itemcard bgBorder-gradient border-gradient"
    >
      <div className="imgcontainer Imageborder-shadow">
        <img src={artworkurl} alt={item.name.english} className="flex border-rounded-md rounded-md" />
        <p className="text-sm text-gold font-bold font-mono">
          PokeID {item.id}
        </p>
      </div>
      <div className="textcontainer border border-solid border-black p-4 rounded-bl rounded-br bg-red-300 bg-gradient Imageborder-shadow">
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
        </div>

        <div className="types text-sm p-3 flex">
          <p className="text-black font-bold font-mono">Types:</p>
          {item.type.map((item) => (
            <p key={item}>{item} </p>
          ))}
                    <div className="sexyBorder relative">
                  <button onClick={() => selectPokemon(item)}>Select</button>
                    </div>
                    
                        
        </div>
      </div>
    </div>
  );
}
