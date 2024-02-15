import {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"

export default function LastWinner() {
    const [winList, setWinList] = useState([]);

    useEffect(() => {
        const fetchWinners = async () => {
            try {
                const response = await axios.get('http://localhost:3000/winner');
                console.log(response.data)
                setWinList(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchWinners();
    }, []);


    return (
        <div>
            {winList.length ? <div>
                <Link to="/"> Back to Pokemon</Link>
                <p>{winList[0].winner}</p>
                <div>
                {winList.map((item, index) => {
                    return <div key={index}>
                        <p>{item.winner}</p>
                        <p>{item.opponent}</p>
                        <p>{item.date}</p>
                    </div>
                })}
                </div>
            </div> : null}
        </div>
    )
}