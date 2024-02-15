import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function LastWinner() {
  const [winList, setWinList] = useState([]);

  useEffect(() => {
    const fetchWinners = async () => {
      try {
        const response = await axios.get("http://localhost:3000/winner");
        setWinList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWinners();
  }, []);

  return (
    <div>
      {winList.length ? (
        <div>
          <a href="/"> Back to Pokemon</a>
          <table>
            <thead>
              <tr>
                <th>Gewinner</th>
                <th>Gegner</th>
                <th>Datum</th>
              </tr>
            </thead>
            <tbody>
              {winList.map((item, index) => (
                <tr key={index}>
                  <td>{item.winner}</td>
                  <td>{item.opponent}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}
