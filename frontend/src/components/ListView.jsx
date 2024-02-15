import { useState, useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataContext";
import { FightContext } from "../contexts/FightContext";
// Import the InfiniteScroll component from the react-infinite-scroll-component package at https://github.com/ankeetmaini/react-infinite-scroll-component
import InfiniteScroll from "react-infinite-scroll-component";
import Selection from "./Selection";
import ListItem from "./ListItem";
import { Link, useSearchParams } from "react-router-dom";

export default function ListView() {
  const { entries, setEntries } = useContext(DataContext);
  const { fighter } = useContext(FightContext);
  // useState for storing the new reduced data for infinite scroll component
  const [data, setData] = useState([]);
  // useState for checking if there is more data to fetch or end of array has been reached
  const [hasMore, setHasMore] = useState(true);

  //params for search
  const [searchParams, setSearchParams] = useSearchParams();
  //data for search
  const [searchData, setSearchData] = useState({ pokemon: "" });

  // useEffect to fetch reduced data, makes sure that the data are fetched when entries is actually populated
  useEffect(() => {
    fetchReduced();
  }, [entries]);

  // Function to fetch and reduce data from entries
  const fetchReduced = () => {
    // initial variables, fetch 30 entries each time
    const initialIndex = data.length;
    const finalIndex = initialIndex + 16;
    // slice the entries to get the reduced data
    const slicedData =
      entries.length > 1 ? entries.slice(initialIndex, finalIndex) : entries;
    // set the data to the state
    setData((prevData) => [...prevData, ...slicedData]);
    // check if entries is populated and that there no more data to fetch, if not, set hasMore to false
    if (entries.length > 1 && finalIndex >= entries.length) {
      setHasMore(false);
    }
  };

  //searchfunctionallity:
  const onChange = (e) => {
    const { name, value } = e.target;
    setSearchData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const [key, value] = Object.entries(searchData)[0];
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
        setData([]);
      }
      return prevParams;
    });
  };
  useEffect(() => {
    const pokemon = searchParams.get("pokemon");
    const type = searchParams.get("type");
    if (searchParams.get("pokemon") || searchParams.get("type")) {
      setData([]);
      setEntries((prev) =>
        prev.filter(
          (entry) =>
            (pokemon && entry.name.english === pokemon) ||
            (type && entry.type[0] === type)
        )
      );
    }
  }, [searchParams]);

  //filterpokemon
  const typeFilter = searchParams.get("type");

  const handleFilterChange = (type, filter) => {
    setSearchParams((prevParams) => {
      if (filter === null) {
        prevParams.delete(type);
      } else {
        prevParams.set(type, filter);
      }
      return prevParams;
    });
  };

  return (
    <>
      <Selection />
      <a href="/">
        <p className="text-center text-gold text-2xl md:text-3xl lg:text-4xl font-bold my-4 md:my-6 lg:my-8">
          POKE INDEX
        </p>
      </a>
      <div className="overflow-hidden">
        {fighter.length ? (
          <Link to="arena">
            <button className="start-fight-button">
              fight with {fighter[0].name}
            </button>
          </Link>
        ) : null}
        <div className=" flex justify-center items-center gap-5">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="w-3/12 h-16 rounded-full border-gray-400 border-solid border flex flex-row items-center"
          >
            <input
              type="text"
              placeholder="Search for Pokemon"
              className="focus:outline-none bg-transparent"
              onChange={onChange}
              name="pokemon"
              value={searchData.pokemon}
            />
            <button
              className="p-3 rounded-full
           hover:bg-teal-400 "
            >
              search
            </button>
          </form>
          <div>
            <button
              onClick={() => handleFilterChange("type", "Grass")}
              className={`simple
            ${typeFilter === "grass" ? "border-b-2 border-gray-600" : ""}`}
            >
              <p>Grass</p>
            </button>
            <button
              onClick={() => handleFilterChange("type", "Ground")}
              className={`simple
            ${typeFilter === "ground" ? "border-b-2 border-gray-600" : ""}`}
            >
              <p>Groud</p>
            </button>
            <a href="/">
              <button
                className={`justify-self-auto ${
                  typeFilter
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                Clear filter
              </button>
            </a>
          </div>
        </div>
        <InfiniteScroll
          dataLength={data.length}
          next={fetchReduced}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p className="text-left">
              <b>Alles angezeigt</b>
            </p>
          }
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-blue-800 rounded p-4 md:p-8 lg:p-10"
        >
          {data.map((item) => (
            <ListItem
              item={item}
              key={item.id}
              className="aspect-w-1 aspect-h-1 md:aspect-w-1 md:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1"
            />
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
}
