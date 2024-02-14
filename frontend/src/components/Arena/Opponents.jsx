import { useContext, useEffect } from 'react'
import { FightContext } from "../../contexts/FightContext"

export default function Opponents() {
    const {opponent, fighter} = useContext(FightContext);
    const myfighter = fighter[0];
    const myopponent = opponent;
    const myfighterart = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${myfighter.id}.png`
    const myopponentart = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${myopponent.id}.png`
    useEffect(() => {
      
      console.log("Figher", fighter);
      console.log("Oppo", opponent);
    
      return () => {
        
      }
    }, [fighter])
    

    return (
        <>
         {fighter.length ? <div className="pokemons">
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
                    <p className="text-black font-bold font-mono">Types:</p>
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
                        <p className="text-black font-bold font-mono">Types:</p>
                    </div>
                </div>
                </div>
            </div>
        </div> : null}
        </>
)
}

