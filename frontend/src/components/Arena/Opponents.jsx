import { useContext, useState, useEffect } from "react";
import { FightContext } from "../../contexts/FightContext";
import {Link} from "react-router-dom"
import axios from "axios"

export default function Opponents() {
  const { opponent, fighter } = useContext(FightContext);
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
      //setLoading(true);
      try {
        const response = await axios.post(`http://localhost:3000/winner/`, {winner: winner, opponent: myopponent.name});
        console.log(response);
        //setEntries(response.data);
        //setLoading(false);
      } catch (error) {
        console.log(error);
        //setLoading(false);
      }
    };
    postWinner();
  }
  
  }, [winner])
  

  

  function percent(value, total) {
    return (value / total) * 100;
  }

  function damageCalculation(attacker, defender) {
    const damage = Math.floor((attacker.attack / defender.defense) * 10);
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
    if (!fightlog){
      setTimeout(() => {fightlog.push(`Der Kampf zwischen ${myfighter.name} und ${myopponent.name} beginnt!`)}, 1000);
    } else{
        setTimeout(() => {
          fightlog.push(`${myfighter.name} greift ${myopponent.name} an!`);
          engage(myfighter, myopponent);
          fightlog.push(`${myopponent.name} getroffen!`)
        }, 500);
        setTimeout(() => {
          fightlog.push(`${myopponent.name} greift ${myfighter.name} an!`);
          engage(myopponent, myfighter);
          fightlog.push(`${myfighter.name} getroffen!`)
        }, 800);
      }
  }


  return (
    <div className="h-screen">
      <a href="/">
        <p className="text-center text-gold text-2xl md:text-3xl lg:text-4xl font-bold my-4 md:my-6 lg:my-8">
          POKE Fight
        </p>
      </a>
      {fighter.length ? (
        <div className="flex justify-center w-5/6  ">
          <div className="fighter w-2/6 flex justify-center">
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
                    Defense {myfighter.defense}{" "}
                  </h4>
                  <h4 className="text-black text-left text-xs font-mono">
                    Speed {myfighter.speed}{" "}
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
          <div className="w-2/6 ">
            
            <button className="w-2/6" onClick={fight}>Fight!</button>
              
            {fightlog.length ? <div className="w-6/6 h-4/6"> {fightlog.map((round, index) => <p key={index} >{round}</p>)}    </div>  : null}
            {winner ? <div><p>The winner is: {winner}</p> <a href="/">Try another Pokemon:</a></div> : ""}
            
          </div>
          <div className="opponent w-2/6">
            <div
              key={myopponent.id}
              className=" itemcard rounded-md bgBorder-gradient border-gradient"
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
                    Defense {myopponent.defense}{" "}
                  </h4>
                  <h4 className="text-black text-left text-xs font-mono">
                    Speed {myopponent.speed}{" "}
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
  );
}
