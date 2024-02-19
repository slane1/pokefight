
export default function WinnerItem({item}) {
 const artworkfighter = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.fighter.id}.png`;
 const artworkopponent = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.opponent.id}.png`;
    return (
<div className="flex">
<div>
    <div key={item.fighter.id} className="itemcard bgBorder-gradient border-gradient">
      <div className="imgcontainer Imageborder-shadow">
      <img src={artworkfighter} alt={item.fighter.name.english} className="flex border-rounded-md rounded-md"/>
        <p className="text-sm text-gold font-bold font-mono">
          PokeID {item.fighter.id}
        </p>
      </div>
      <div className="textcontainer border border-solid border-black p-6 rounded-bl rounded-br bg-red-300 bg-gradient Imageborder-shadow">
        <div className="textcontainer border border-solid border-white p-4 rounded-bl rounded-br bg-red-300 ">
          <h4 className="text-black text-center font-bold text-sm font-mono p-2">
            {item.fighter.name}
          </h4>
          <h4 className="text-black text-left text-xs font-mono">
            Attack {item.fighter.attack}
          </h4>
          <h4 className="text-black text-left text-xs font-mono">
            Defense {item.fighter.defense}{" "}
          </h4>
          <h4 className="text-black text-left text-xs font-mono">
            Speed {item.fighter.speed}{" "}
          </h4>
          <h4 className="text-black text-left text-xs font-mono">
          </h4>
          <h4 className="text-black text-left text-xs font-mono">
          </h4>
          <div className="types text-sm p-3 flex">
          <p className="text-black font-bold font-mono">Type:</p>
          <p>{item.fighter.type}</p>
          </div>
        </div>
      </div>
    </div>
</div>
<div className="flex flex-col align-middle justify-center mr-10 ml-10 text-center">
  <p className="mb-10 text-xl">VS</p>
  <p>Winner:</p>
  <p className="mt-1 font-bold">{item.winner}</p>
  </div>
<div>
            <div key={item.opponent.id} className="itemcard bgBorder-gradient border-gradient">
      <div className="imgcontainer Imageborder-shadow">
        <img src={artworkopponent} alt={item.opponent.name.english} className="flex border-rounded-md rounded-md"/>
        <p className="text-sm text-gold font-bold font-mono">
          PokeID {item.opponent.id}
        </p>
      </div>
      <div className="textcontainer border border-solid border-black p-6 rounded-bl rounded-br bg-red-300 bg-gradient Imageborder-shadow">
        <div className="textcontainer border border-solid border-white p-4 rounded-bl rounded-br bg-red-300 ">
          <h4 className="text-black text-center font-bold text-sm font-mono p-2">
            {item.opponent.name}
          </h4>
          <h4 className="text-black text-left text-xs font-mono">
            Attack {item.opponent.attack}
          </h4>
          <h4 className="text-black text-left text-xs font-mono">
            Defense {item.opponent.defense}{" "}
          </h4>
          <h4 className="text-black text-left text-xs font-mono">
            Speed {item.opponent.speed}{" "}
          </h4>
          <h4 className="text-black text-left text-xs font-mono">
          </h4>
          <h4 className="text-black text-left text-xs font-mono">
          </h4>
          <div className="types text-sm p-3 flex">
          <p className="text-black font-bold font-mono">Type:</p>
          <p>{item.opponent.type}</p>
          </div>
        </div>
      </div>
    </div>
</div>
</div>
    );
}