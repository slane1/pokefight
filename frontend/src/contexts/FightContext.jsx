import React, { createContext, useState, useEffect } from 'react';
export const FightContext = createContext();

export default function FightContextProvider({ children }) {
    const [fighter, setFighter] = useState([])
    const [opponent, setOpponent] = useState([]);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
    function createOpponent(entries){
        const opponentList = entries;
        const randomIndex = getRandomInt(opponentList.length);
        const randomOpponent = opponentList[randomIndex];
        console.log(randomOpponent);
        setOpponent([
            {
              id: randomOpponent.id,
              name: randomOpponent.name.english,
              type: randomOpponent.type[0],
              hp: randomOpponent.base.HP,
              attack: randomOpponent.base.Attack,
              defense: randomOpponent.base.Defense,
              speed: randomOpponent.base.Speed,
            },
          ]);
    }


    return (
        <FightContext.Provider 
        value={{ 
            fighter, 
            setFighter,
            opponent,
            createOpponent
            }}>
        {children}
        </FightContext.Provider>
    );
}