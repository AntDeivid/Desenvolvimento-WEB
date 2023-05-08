import { Children, cloneElement } from "react"

const Hero = ({name, arena}) => {
    return (
        <div>
            <h1>Herói: {name} lutando na arena {arena} </h1>
            <img src="https://www.romerolab.com.br/wp-content/uploads/2020/09/Como-usar-a-Jornada-do-Herói-nos-seus-conteúdos-2.png"
            style = {{width : '400px', height : '300px'}} alt = "O herói"/>
        </div>
    )
}

const Enemy = ({name}) => {
    return (
        <div>
            <h1>Inimigo: {name} </h1>
            <img src="https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/09/cropped-Darkseid-Injustice-2.jpg"
            style = {{width : '400px', height : '400px'}} alt = "O inimigo"/>
        </div>
    )
}

const Arena = () => {
    return (
        <div>
            <h1>Arena</h1>
            <Hero name = "SuperMan" />
            <Enemy name = "Darkside" />
        </div>
    )
}

const Arena2 = ({name, children}) => {
    return (
        <div>
            <h1>Arena {name}</h1>
            {
                Children.map(
                    children, //INICIALIZACAO
                    (filho) => {
                        return cloneElement(filho, {arena : name})
                    } //funcao seta
                )
            }
        </div>
    )
}

const World = (children) => {
    return (
        <>
            {children}
        </>
    )
}

export {Hero, Enemy, Arena, Arena2, World}