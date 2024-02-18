import Fight from "./Fight";
import Opponents from "./Opponents";
import "./Arena.css";

export default function Arena() {
  return (
    <>
    <div className="flex h-screen justify-center align-middle w-screen flex-col p-4 bg-blue-500 shadow-lg bg-ArenaFight">
      <div className="flex flex-col justify-center align-middle p-4 bg-blue-800 bg-opacity-50 rounded-lg">
       <h1 className="text-center text-gold font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4 md:mb-6 lg:mb-8">
          Arena
         </h1>
        <Opponents />
      </div>
    </div>
    </>
  );
}
