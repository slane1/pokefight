import { useState, useContext, useEffect } from 'react'
import { DataContext } from '../contexts/DataContext'
// Import the InfiniteScroll component from the react-infinite-scroll-component package at https://github.com/ankeetmaini/react-infinite-scroll-component
import InfiniteScroll from 'react-infinite-scroll-component';
import Selection from './Selection';
import ListItem from './ListItem'

export default function ListView() {
    const { entries } = useContext(DataContext);
    // useState for storing the new reduced data for infinite scroll component
    const [data, setData] = useState([]);
    // useState for checking if there is more data to fetch or end of array has been reached
    const [hasMore, setHasMore] = useState(true);

    // Function to fetch and reduce data from entries
    const fetchReduced = () => {
        // initial variables, fetch 30 entries each time
        const initialIndex = data.length;
        const finalIndex = initialIndex + 30;
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
    <div>
        <Selection />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam adipisci, numquam ratione ex provident cupiditate suscipit consequuntur cum. Enim itaque ducimus, unde nobis blanditiis autem ipsum, quidem ex magni ullam vitae! Nihil quae, qui officia praesentium deserunt aut aliquid dicta adipisci libero iste odit reprehenderit, explicabo autem neque natus eaque!</p>
        <InfiniteScroll
            dataLength={data.length}
            next={fetchReduced}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
            <p style={{ textAlign: 'center' }}>
            <b>Alles angezeigt</b>
            </p>
            }
        >
        {data.map((item) => (
            <ListItem item={item} key={item.id} />
        ))}
        </InfiniteScroll>
    </div>
    );
}