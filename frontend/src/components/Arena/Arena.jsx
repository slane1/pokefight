import Opponents from "./Opponents";
import "./Arena.css";

export default function Arena() {
  return (
    <>
    <div className="flex h-screen justify-center align-middle w-screen flex-col p-4 bg-blue-500 shadow-lg bg-ArenaFight">
        <Opponents />
      </div>
    </>
  );
}
