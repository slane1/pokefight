import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    
    const artworkurl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png`;
    const artworkurll = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png`;
    
    return (
        <div className='overflow-hidden'>
            {winList.length ? 
            <div className="">
                <div className="text-center p-5">
                    
                    <h1 className="p-5">The Winner History</h1>

                    <button className=" ">
                    <Link to="/" > Back to Pokefight</Link>
                    </button>

                </div>
                <p className="hidden">{winList[0].winner}</p>
                <div className='grid grid-cols-1 md:grid-cols-2 md:p-8 lg:grid-cols-4 lg:p-10 gap-4 bg-blue-800 rounded p-4 overflow-hidden' >  {/** container */}
                    {/* <div className='sm:grid-cols-1 md:grid-cols-4  lg:grid-cols-6 gap-8 p-10'> */}
              
                    {winList.map((item, index) => {
                        return (
                        <div className="grid grid-col-1 items-center 
                                        bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 
                                        dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                            key={index}>

                      
                                {/* <div className='flex flex-row justify-center w-auto  '>  */}
                                <div className='flex flex-row justify-center w-auto  bg-white rounded-t '> {/* 1 container*/}
                                    <div className="w-26 h-auto "><img className=""
                                         src={artworkurl}
                                        // alt={item.name.english}
                                        />
                                    </div>
                                    <div className="w-26 h-auto" ><img className=""
                                         src={artworkurll}
                                       // alt={item.name.english}
                                       />
                                   </div>        
                                </div>
                                <div className='flex flex-row justify-between p-4 leading-normal'>  {/* 2 container*/}
                                                    {/* <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{item.date}</p> */}
                                    <div className=''>
                                                        <div class=" items-baseline border-b border-slate-200">
                                                        <p className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{item.winner}</p>
                                                        </div>
                                                        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>hp</p>
                                                        <p className='mb-1 font-normal text-gray-700 dark:text-gray-400'>attack</p>
                                                        <p className='mb-1 font-normal text-gray-700 dark:text-gray-400'>speed</p>
                                    </div> 
                                                    VS 
                                    <div>
                                                    <p className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{item.opponent}</p>
                                                    <div class=" items-baseline border-b border-slate-200">
                                                        <p className=''>hp</p>
                                                    </div>
                                                        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>attack</p>
                                                        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>speed</p>
                                     </div>  
                                </div>
                            
                        </div>
                            )
                        })}
                </div>
            </div> 
            : null}
        </div>
    )
}
