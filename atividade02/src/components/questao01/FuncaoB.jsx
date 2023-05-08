import MinhaCor from "./MeuContexto"
import { useContext } from "react"

const FuncaoB = () => {
    const cores = useContext(MinhaCor)
    /*return (
        <MinhaCor.Consumer>
            {
                ({cores}) => {
                    return (
                        <h1 style={{backgroundColor:cores.bkgB}}>Função B</h1>
                    )
                }
            }
        </MinhaCor.Consumer>
    )*/
    return (
        <div>
            <h1 style={{backgroundColor:cores.bkgB}}>Função B</h1>
        </div>
    )
}

export default FuncaoB