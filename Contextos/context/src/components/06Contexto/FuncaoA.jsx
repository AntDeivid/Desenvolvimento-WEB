import FuncaoB from "./FuncaoB"
import FuncaoC from "./FuncaoC"
import MinhaCor from "./MeuContexto"

const FuncaoA = () => {

    const cor = {cor:"white"}

    return (
        <MinhaCor.Provider value = {cor} nome = "Deivid">
            <div>
                <h1 style = {{backgroundColor:cor.cor}}>Função A</h1>
                <FuncaoB />
                <FuncaoC />
            </div>
        </MinhaCor.Provider>
    )
}

export default FuncaoA