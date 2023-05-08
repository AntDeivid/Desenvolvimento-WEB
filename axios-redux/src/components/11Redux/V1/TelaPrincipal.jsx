import { useState } from "react"
import BotaoDecrementar from "./BotaoDecrementar"
import BotaoIncrementar from "./BotaoIncrementar"
import Imagem from "./Imagem"

const TelaPrincipal = () => {
    const [id, setID] = useState(1)
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td colSpan={2}>
                            <Imagem id={id}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <BotaoIncrementar />
                        </td>
                        <td>
                            <BotaoDecrementar />
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default TelaPrincipal