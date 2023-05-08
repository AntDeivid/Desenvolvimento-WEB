import PokemonContext from "./Contexto";
import Filho from "./ComponenteFilho";

const Avo = () => {

    const numero = 1

    return (
        <PokemonContext.Provider value = {numero}>
            <div>
                <h1>Componente Avo</h1>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}
                    style={{width:"400px"}}
                    alt=""
                />
                <Filho />
            </div>
        </PokemonContext.Provider>
        
    )
}

export default Avo