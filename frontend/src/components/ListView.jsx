import { useState, useContext, useEffect } from 'react'
import { DataContext } from '../contexts/DataContext'
import { FightContext } from '../contexts/FightContext'
// Import the InfiniteScroll component from the react-infinite-scroll-component package at https://github.com/ankeetmaini/react-infinite-scroll-component
import InfiniteScroll from 'react-infinite-scroll-component';
import Selection from './Selection';
import ListItem from './ListItem'
import {Link} from "react-router-dom"

export default function ListView() {
    const { entries } = useContext(DataContext);
    const { fighter } = useContext(FightContext);
    // useState for storing the new reduced data for infinite scroll component
    const [data, setData] = useState([]);
    // useState for checking if there is more data to fetch or end of array has been reached
    const [hasMore, setHasMore] = useState(true);

    // Function to fetch and reduce data from entries
    const fetchReduced = () => {
        // initial variables, fetch 30 entries each time
        const initialIndex = data.length;
        const finalIndex = initialIndex + 16;
        // slice the entries to get the reduced data
        const slicedData = entries.slice(initialIndex, finalIndex);
        // set the data to the state
        setData(prevData => [...prevData, ...slicedData]);
        // check if entries is populated and that there no more data to fetch, if not, set hasMore to false
    if (entries.length > 1 && finalIndex >= entries.length) {
        setHasMore(false);
    }};
    // useEffect to fetch reduced data, makes sure that the data are fetched when entries is actually populated
    useEffect(() => {
        fetchReduced();
    }, [entries]);

    return (
        <>

          <Selection/>
          <p className='text-center text-gold text-2xl md:text-3xl lg:text-4xl font-bold my-4 md:my-6 lg:my-8'>POKE INDEX</p>
          <div className='overflow-hidden'>
          {fighter.length ? <Link to="arena"> <button>fight</button> </Link> : null}
          {fighter !== null && (<>
          <Link to="arena">
            <button classsName="flex">fight2</button>
          </Link>
          </>)}
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
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-blue-800 rounded p-4 md:p-8 lg:p-10'
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