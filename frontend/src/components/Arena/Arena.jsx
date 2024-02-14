import FightContextProvider from "../../contexts/FightContext"
import Fight from "./Fight"
import Opponents from "./Opponents"

export default function Arena() {
    return (
        <>
        <FightContextProvider>
            <Opponents />
            <Fight />
        </ FightContextProvider>
        </>
    )
}