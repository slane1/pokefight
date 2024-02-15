import { useContext, useState, useEffect } from 'react'
import { FightContext } from "../../contexts/FightContext"

export default function Opponents() {
    const {opponent, fighter} = useContext(FightContext);
    const myfighter = fighter[0];
    const myopponent = opponent[0];
    const [fighterHP, setFighterHP] = useState(myfighter.hp);
    const [opponentHP, setOpponentHP] = useState(myopponent.hp);
    const [winner, setWinner] = useState(null);
    const myfighterart = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${myfighter.id}.png`
    const myopponentart = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${myopponent.id}.png`

    useEffect(() => {
        if (winner) {
            alert(`${winner} wins!`);
        }else{
            const fighterlife = percent(fighterHP, myfighter.hp);
            const opponentlife = percent(opponentHP, myopponent.hp);
        }
    },[fighterHP, opponentHP, winner]);

    function percent(value, total) {
        return (value / total) * 100;
    }

    function damageCalculation(attacker, defender) {
        const damage = Math.floor((attacker.attack / defender.defense) * 10);
        return damage;
    }

    function fight(attacker, defender) {
        if (attacker === myfighter) {
            const damage = damageCalculation(attacker, defender);
            if (opponentHP - damage <= 0) {
                setWinner(myfighter.name);
            } else {
            setOpponentHP(prev => prev - damage);
            }
        } else {
            const damage = damageCalculation(attacker, defender);
            if (fighterHP - damage <= 0) {
                setWinner(myopponent.name);
            } else {
            setFighterHP(prev => prev - damage);
            }
        }
    }


    return (
        <>
        {fighter.length ? <div className="flex gap-5 align-middle">
            <div className="fighter">
                <div key={myfighter.id} className="itemcard rounded-md bgBorder-gradient border-gradient">
                <div className="imgcontainer bgBorder-gradient border border-solid p-4 Imageborder-gradient rounded-md bg-white bg-opacity-50">
                <img src={myfighterart} alt={myfighter.name}/>
                <p className="text-sm text-gold font-bold font-mono">PokeID {myfighter.id}</p>
                </div>
                <div className="textcontainer border border-solid border-black p-4 rounded-bl rounded-br bg-red-300 bg-gradient">
                <div className="textcontainer border border-solid border-white p-4 rounded-bl rounded-br bg-red-300">
                <h4 className="text-black text-center font-bold text-sm font-mono p-2">{myfighter.name}</h4>
                <h4 className="text-black text-left text-xs font-mono">Attack {myfighter.attack}</h4>
                <h4 className="text-black text-left text-xs font-mono">Defense {myfighter.defense} </h4>
                <h4 className="text-black text-left text-xs font-mono">Speed {myfighter.speed} </h4>                    
                </div>                
                <div className="types text-sm p-3 flex">
                    <p className="text-black font-bold font-mono">Type: {myfighter.type}</p>
                </div>
            </div>
            </div>
            
        </div>
            <div className="opponent">
                <div key={myopponent.id} className="itemcard rounded-md bgBorder-gradient border-gradient">
                    <div className="imgcontainer bgBorder-gradient border border-solid p-4 Imageborder-gradient rounded-md bg-white bg-opacity-50">
                    <img src={myopponentart} alt={myopponent.name}/>
                    <p className="text-sm text-gold font-bold font-mono">PokeID {myopponent.id}</p>
                    </div>
                    <div className="textcontainer border border-solid border-black p-4 rounded-bl rounded-br bg-red-300 bg-gradient">
                    <div className="textcontainer border border-solid border-white p-4 rounded-bl rounded-br bg-red-300">
                    <h4 className="text-black text-center font-bold text-sm font-mono p-2">{myopponent.english}</h4>
                    <h4 className="text-black text-left text-xs font-mono">Attack {myopponent.attack}</h4>
                    <h4 className="text-black text-left text-xs font-mono">Defense {myopponent.defense} </h4>
                    <h4 className="text-black text-left text-xs font-mono">Speed {myopponent.speed} </h4>                   
                    </div>                
                    <div className="types text-sm p-3 flex">
                        <p className="text-black font-bold font-mono">Type: {myopponent.type}</p>
                    </div>
                </div>
                </div>
            </div>
        </div> : null}
        </>
)
}

