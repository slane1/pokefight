import { useEffect, useState } from "react";
import WinnerItem from "./WinnerItem";
import axios from "axios";
import { Link } from "react-router-dom";

export default function LastWinner() {
  const [winList, setWinList] = useState([]);

  useEffect(() => {
    const fetchWinners = async () => {
      try {
        const response = await axios.get("http://localhost:3000/winner");
        console.log(response.data);
        setWinList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWinners();
  }, []);

  return (
    <div className="">
            <a href="/">
        <p className="text-center text-gold text-2xl md:text-3xl lg:text-4xl font-bold my-4 md:my-6 lg:my-8">
          POKE INDEX
        </p>
      </a>
      {winList.length ? (
        <div className="mt-5">
              {winList.map((item, index) => (
                <div key={index} className="mb-5">
                  <WinnerItem item={item} />
                </div>
              ))}
        </div>
      ) : null}
    </div>
  );
}
