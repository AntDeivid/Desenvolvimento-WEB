import MinhaCor from "./MeuContexto"
//import { useContext } from "react"

const FuncaoB = () => {
    return (
        <MinhaCor.Consumer>
            {
                ({cores}) => {
                    return (
                        <h1 style={{backgroundColor:cores.bkgB}}>Função B</h1>
                    )
                }
            }
        </MinhaCor.Consumer>
    )
    /*const {cores} = useContext(MinhaCor)
    return (
        <h1 style={{color:cores.bkgB}}>Função B</h1>
    )*/
}

export default FuncaoB