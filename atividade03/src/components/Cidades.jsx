import { useState, useEffect } from "react"

const VotacaoCidades = (props) => {

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(0)
    const [count4, setCount4] = useState(0)
    
    const [maisVotado, setMaisVotado] = useState("")
    const [menosVotado, setMenosVotado] = useState("")

    useEffect(
        () => {
            //Mais votado
            if (count1 > count2 && count1 > count3 && count1 > count4) {
                setMaisVotado(JSON.stringify(props.cidade1))
            }

            if (count2 > count1 && count2 > count3 && count2 > count4) {
                setMaisVotado(JSON.stringify(props.cidade2))
            }

            if (count3 > count2 && count3 > count1 && count3 > count4) {
                setMaisVotado(JSON.stringify(props.cidade3))
            }
            
            if (count4 > count2 && count4 > count3 && count4 > count1) {
                setMaisVotado(JSON.stringify(props.cidade4))
            }

            //Menos votado
            if (count1 < count2 && count1 < count3 && count1 < count4) {
                setMenosVotado(JSON.stringify(props.cidade1))
            }

            if (count2 < count1 && count2 < count3 && count2 < count4) {
                setMenosVotado(JSON.stringify(props.cidade2))
            }

            if (count3 < count2 && count3 < count1 && count3 < count4) {
                setMenosVotado(JSON.stringify(props.cidade3))
            }
            
            if (count4 < count2 && count4 < count3 && count4 < count1) {
                setMenosVotado(JSON.stringify(props.cidade4))
            }
        },
        [count1, count2, count3, count4, props.cidade1, props.cidade2, props.cidade3, props.cidade4]
    )
    
    const countingVotos = (voto) => {
        if (voto === 1) {
            setCount1(count1 + 1)
        } 
        else if (voto === 2) {
            setCount2(count2 + 1)
        } 
        else if (voto === 3) {
            setCount3(count3 + 1)
        } 
        else if (voto === 4) {
            setCount4(count4 + 1)
        } 
    }

    return (
        <div>
            <h1 style={{textAlign:"center"}} >Situação de votação das cidades</h1>
            <h3>{props.cidade1}: {count1}</h3>
            <button onClick={
                    () => countingVotos(1)
                }
            >
                Votar
            </button>
            <h3>{props.cidade2}: {count2}</h3>
            <button onClick={
                    () => countingVotos(2)
                }
            >
                Votar
            </button>
            <h3>{props.cidade3}: {count3}</h3>
            <button onClick={
                    () => countingVotos(3)
                }
            >
                Votar
            </button>
            <h3>{props.cidade4}: {count4}</h3>
            <button onClick={
                    () => countingVotos(4)
                }
            >
                Votar
            </button>

            <h3>Cidade mais votada: {maisVotado}</h3>
            <h3>Cidade menos votada: {menosVotado}</h3>
        </div>
    )
}

export default VotacaoCidades