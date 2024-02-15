import Fight from "./Fight"
import Opponents from "./Opponents"
import "./Arena.css"



export default function Arena() {
    return (
        <div className="flex items-stretch p-4 md:p-8 lg:p-12 bg-blue-500 shadow-lg bg-ArenaFight">
            <div className="p-4 md:p-8 lg:p-12 flex-grow bg-blue-800 bg-opacity-50 rounded-lg">
                <h1 className="text-center text-gold font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4 md:mb-6 lg:mb-8">Arena</h1>
                <Opponents />
                <Fight />
            </div>
        </div>
    );
}