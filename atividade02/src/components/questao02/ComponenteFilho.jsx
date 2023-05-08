import { useContext } from "react"
import Neto from "./ComponenteNeto"
import PokemonContext from "./Contexto"

const Filho = () => {

    const numero = useContext(PokemonContext) + 1

    return (
        <div>
            <h1>Componente Filho</h1>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}
                style={{ width: "400px" }}
                alt=""
            />
            <Neto />
        </div>
    )
}

export default Filho