import { useState, useEffect } from "react"

const VotacaoCidades = () => {

    const [cidades, setCidades] = useState(
        [
            {nome: "Madalena", votos: 0},
            {nome: "Quixadá", votos: 0},
            {nome: "Mombaça", votos: 0},
            {nome: "Fortaleza", votos: 0}
        ]
    )

    const [flag, setFlag] = useState(false)

    const votarNaCidade = (nome) => {
        /*for(let i = 0; i < cidades.length; i++) {
            if(cidades[i].nome === nome) {
                cidades[i].votos = cidades[i].votos + 1
            }
        }*/

        const index = cidades.findIndex(
            (cidade) => cidade.nome === nome
        )
        cidades[index].votos = cidades[index].votos + 1

        setFlag((prev) => !prev)
    }

    const votarNaCidadeV2 = (nome) => {
        const newCidades = cidades.map(
            (cidade) => {
                if(cidade.nome === nome) return {...cidade, votos: cidade.votos + 1}
                return {...cidade}
            }
        )
        setCidades(newCidades)
    }

    return (
        <>
            <h1>Votação das Cidades</h1>
            <h3>{cidades[0].nome}</h3>
            <h3>{cidades[1].nome}</h3>
            <h3>{cidades[2].nome}</h3>
            <h3>{cidades[3].nome}</h3>

            <table>
                <tbody>
                    <tr>
                        <td>
                            <button onClick = {()=>votarNaCidadeV2("Madalena")}>
                                Madalena + 1
                            </button>
                        </td>
                        <td>
                            <button onClick = {()=>votarNaCidadeV2("Quixadá")}>Quixadá + 1</button>
                        </td>
                        <td>
                            <button onClick = {()=>votarNaCidadeV2("Mombaça")}>Mombaça + 1</button>
                        </td>
                        <td>
                            <button onClick = {()=>votarNaCidadeV2("Fortaleza")}>Fortaleza</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default VotacaoCidades