const { useEffect } = require("react")
//const { useCallback } = require("react")

const minhaPromise = new Promise(
    (resolve, reject) => {
        console.log("iniciando a lógica")
        setTimeout(
            () => {
                console.log("lógica terminada")
                const meuInt = Math.floor((Math.random()*10))+1
                console.log(meuInt)
                if (meuInt%2===0) { resolve("Deu tudo certo!") }
                else { reject("Deu tudo errado!") }
            }, 3000
        )
    }
)

const meuGet = (url) => {
    console.log(url)
    return minhaPromise
}

const MinhaPromise = () => {
    useEffect(
        () => {
            meuGet("https://fake")
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
        }, []
    )

    return(
        <>
            <h1>Testando a Promise</h1>
        </>
    )
}

export default MinhaPromise