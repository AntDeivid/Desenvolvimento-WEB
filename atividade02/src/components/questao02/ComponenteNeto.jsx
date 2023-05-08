import { useContext } from "react"
import PokemonContext from "./Contexto"

const Neto = () => {

    const numero = useContext(PokemonContext) + 2

    return (
        <div>
            <h1>Componente Neto</h1>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}
                style={{ width: "400px" }}
                alt=""
            />
        </div>
    );
}

export default Neto