import React, { useEffect, useState } from 'react'

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const num = Math.floor((Math.random() * 10))
        if (num === 1) { reject({number : num, message : "ERRO DE CONEXÃO"}) }
        if (num === 2) { reject({number : num, message : "ERRO DE DADOS INVÁLIDOS"}) }
        else {
            const alunosJSON = [
                { id: 1, nome: 'Deivid', ira: 9.1 },
                { id: 2, nome: 'Jefin', ira: 9.1 },
                { id: 3, nome: 'Gui', ira: 9.1 },
                { id: 4, nome: 'Pretin', ira: 9.1 },
                { id: 5, nome: 'Joje', ira: 9.1 }
            ]

            resolve(alunosJSON)
        }
    }, 3000 )
})

const Questao01 = () => {

    const [alunos, setAlunos] = useState([])

    useEffect(() => {
        myPromise
        .then(
            (alunosJSON) => {
                setAlunos(alunosJSON)
            }
        )
        .catch(
            (error) => {
                alert(error.message)
            }
        )
    }, [])

    return (
        <div>
            {alunos.map((aluno) => {
                return (
                    <div key={aluno.id}>
                        <p>Nome: {aluno.nome}, Ira: {aluno.ira}</p>
                    </div>
                )
            })
            }
        </div>
    )

}

export default Questao01