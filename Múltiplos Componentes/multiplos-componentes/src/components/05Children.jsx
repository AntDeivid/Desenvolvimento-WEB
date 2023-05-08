import { Children, cloneElement } from 'react'

/*const Supermercado = ({ children, nome }) => {
    return (
        <div>
            <h1>Supermercado {nome}</h1>
            {children}
        </div>
    )
}*/

//V1
/*const Supermercado = ({ children, nome }) => {
    return (
        <div>
            <h1>Supermercado {nome}</h1>
            {
                Children.map(
                    children,
                    (filho) => {
                        return (
                            <div style = {{backgroundColor:"red"}}>
                                {filho}
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}*/

//V2
const Supermercado = ({ children, nome }) => {
    return (
        <div>
            <h1>Supermercado {nome}</h1>
            {
                Children.map(
                    children,
                    (filho) => {
                        return cloneElement(filho, {supermercado:nome})
                    }
                )
            }
        </div>
    )
}

const Legume = ({nome, supermercado}) => {
    return (
        <div>
            <h1>Legume {nome} do SuperMercado {supermercado}</h1>
        </div>
    )
}

const Bebida = ({nome, supermercado}) => {
    return (
        <div>
            <h1>Bebida {nome} do SuperMercado {supermercado}</h1>
        </div>
    )
}

export {Supermercado, Legume, Bebida}