import React, { createContext, useState, useEffect } from 'react';
export const FightContext = createContext();

export default function FightContextProvider({ children }) {
    const [fighter, setFighter] = useState([])
    // const [fighter, setFighter] = useState([
    //     {
    //         id: 25,
    //         name: 'Pikachu',
    //         type: 'Electric',
    //         hp: 35,
    //         attack: 55,
    //         defense: 40,
    //         speed: 90,
    //     }
    // ]);
    const [opponent, setOpponent] = useState([
        {
            id: 4,
            name: 'Charmander',
            type: 'Fire',
            hp: 39,
            attack: 52,
            defense: 43,
            speed: 65,
        }
    ]);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
    function createOpponent(entries){
        const opponentList = entries;
        const randomIndex = getRandomInt(opponentList.length);
        const randomOpponent = opponentList[randomIndex];
        setOpponent(randomOpponent);
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