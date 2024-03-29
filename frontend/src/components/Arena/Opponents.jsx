import { useContext, useState, useEffect } from "react";
import { FightContext } from "../../contexts/FightContext";
import { Link } from "react-router-dom";
import typeMatchups from "../../utility/types";
import axios from "axios";

export default function Opponents() {
  const { opponent, fighter, createOpponent } = useContext(FightContext);
  const myfighter = fighter[0];
  const myopponent = opponent[0];
  const [fighterHP, setFighterHP] = useState(myfighter.hp);
  const [opponentHP, setOpponentHP] = useState(myopponent.hp);
  const [winner, setWinner] = useState(null);
  const [fightlog, setFightlog] = useState([]);
  const myfighterart = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${myfighter.id}.png`;
  const myopponentart = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${myopponent.id}.png`;

  useEffect(() => {
    if (winner) {
      console.log(`${winner} wins!`);
    } else {
      const fighterlife = percent(fighterHP, myfighter.hp);
      const opponentlife = percent(opponentHP, myopponent.hp);
    }
  }, [fighterHP, opponentHP, winner, fightlog]);

  useEffect(() => {
    if (winner) {
      console.log(`${winner} wins!`);
      const postWinner = async () => {
        try {
          const response = await axios.post(`http://localhost:3000/winner/`, {
            winner: winner,
            opponent: {
              id: myopponent.id,
              name: myopponent.name,
              type: myopponent.type,
              hp: myopponent.hp,
              attack: myopponent.attack,
              defense: myopponent.defense,
              speed: myopponent.speed,
            },
            fighter: {
              id: myfighter.id,
              name: myfighter.name,
              type: myfighter.type,
              hp: myfighter.hp,
              attack: myfighter.attack,
              defense: myfighter.defense,
              speed: myfighter.speed,
            },
          });
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      };
      postWinner();
    }
  }, [winner]);

  function percent(value, total) {
    return (value / total) * 100;
  }

  function checkType(attacker, defender) {
    const attackerType = attacker.type.toLowerCase();
    const defenderType = defender.type.toLowerCase();
    const multiplier = typeMatchups[attackerType][defenderType];
    if (multiplier === undefined) {
      console.log("Fallback triggered");
      return 1;
    }
    console.log(multiplier);
    return multiplier;
  }

  function damageCalculation(attacker, defender) {
    const multiply = checkType(attacker, defender);
    const damage = Math.floor(
      (attacker.attack / defender.defense) * 10 * multiply
    );
    return damage;
  }

  function engage(attacker, defender) {
    if (attacker === myfighter) {
      const damage = damageCalculation(attacker, defender);
      if (opponentHP - damage <= 0) {
        setWinner(myfighter.name);
      } else {
        setOpponentHP((prev) => prev - damage);
      }
    } else {
      const damage = damageCalculation(attacker, defender);
      if (fighterHP - damage <= 0) {
        setWinner(myopponent.name);
      } else {
        setFighterHP((prev) => prev - damage);
      }
    }
  }

  function fight() {
    if (!fightlog) {
      setTimeout(() => {
        fightlog.push(
          `Der Kampf zwischen ${myfighter.name} und ${myopponent.name} beginnt!`
        );
      }, 1000);
    } else {
      setTimeout(() => {
        fightlog.push(`${myfighter.name} greift ${myopponent.name} an!`);
        engage(myfighter, myopponent);
      }, 100);
      setTimeout(() => {
        fightlog.push(`${myopponent.name} getroffen!`);
      }, 1500);
      setTimeout(() => {
        fightlog.push(`${myopponent.name} greift ${myfighter.name} an!`);
        engage(myopponent, myfighter);
        fightlog.push(`${myfighter.name} getroffen!`);
      }, 800);
    }
  }

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col justify-center align-middle p-4 bg-blue-800 bg-opacity-50 rounded-lg">
        <p className="text-center text-2xl md:text-3xl lg:text-4xl mt-1 mb-3">
          {" "}
          <a href="/" className="text-gold font-bold">
            POKE Fight
          </a>
        </p>
        {fighter.length ? (
          <div className="flex justify-center align-middle gap-20">
            <div className="fighter">
              <div
                key={myfighter.id}
                className="itemcard rounded-md bgBorder-gradient border-gradient"
              >
                <div className="imgcontainer bgBorder-gradient border border-solid p-4 Imageborder-gradient rounded-md bg-white bg-opacity-50">
                  <img src={myfighterart} alt={myfighter.name} />
                  <p className="text-sm text-gold font-bold font-mono">
                    PokeID {myfighter.id}
                  </p>
                </div>
                <div className="textcontainer border border-solid border-black p-4 rounded-bl rounded-br bg-red-300 bg-gradient">
                  <div className="textcontainer border border-solid border-white p-4 rounded-bl rounded-br bg-red-300">
                    <h4 className="text-black text-center font-bold text-sm font-mono p-2">
                      {myfighter.name}
                    </h4>
                    <h4 className="text-black text-left text-xs font-mono">
                      Attack {myfighter.attack}
                    </h4>
                    <h4 className="text-black text-left text-xs font-mono">
                      Defense {myfighter.defense}
                    </h4>
                    <h4 className="text-black text-left text-xs font-mono">
                      Speed {myfighter.speed}
                    </h4>
                  </div>
                  <div className="types text-sm p-3 flex">
                    <p className="text-black font-bold font-mono">
                      Type: {myfighter.type}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col min-w-80 text-center align-baseline justify-between">
              {fightlog.length ? (
                <div className="flex flex-col align-middle justify-center max-h-[500px] overflow-y-auto f">
                  {fightlog.map((round, index) => (
                    <p key={index}>{round}</p>
                  ))}
                </div>
              ) : (
                <p>To start the fight press the button below!</p>
              )}
              {winner ? (
                <div className="mt-3 font-bold ">
                  <p className="text-2xl animate-bounce">
                    The winner is: {winner}
                  </p>
                  <button className="mt-5 text-white">
                    <Link className="text-white" to="/">
                      Try another Pokemon
                    </Link>
                  </button>
                </div>
              ) : null}
              {!winner ? (
                <button className="mt-5" onClick={fight}>
                  Fight!
                </button>
              ) : null}
            </div>
            <div className="opponent">
              <div
                key={myopponent.id}
                className="itemcard rounded-md bgBorder-gradient border-gradient"
              >
                <div className="imgcontainer bgBorder-gradient border border-solid p-4 Imageborder-gradient rounded-md bg-white bg-opacity-50">
                  <img src={myopponentart} alt={myopponent.name} />
                  <p className="text-sm text-gold font-bold font-mono">
                    PokeID {myopponent.id}
                  </p>
                </div>
                <div className="textcontainer border border-solid border-black p-4 rounded-bl rounded-br bg-red-300 bg-gradient">
                  <div className="textcontainer border border-solid border-white p-4 rounded-bl rounded-br bg-red-300">
                    <h4 className="text-black text-center font-bold text-sm font-mono p-2">
                      {myopponent.name}
                    </h4>
                    <h4 className="text-black text-left text-xs font-mono">
                      Attack {myopponent.attack}
                    </h4>
                    <h4 className="text-black text-left text-xs font-mono">
                      Defense {myopponent.defense}
                    </h4>
                    <h4 className="text-black text-left text-xs font-mono">
                      Speed {myopponent.speed}
                    </h4>
                  </div>
                  <div className="types text-sm p-3 flex">
                    <p className="text-black font-bold font-mono">
                      Type: {myopponent.type}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
