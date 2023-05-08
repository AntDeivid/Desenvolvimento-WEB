const PlacaMae = ({nome, preco}) => {
    return (
        <div>
            <h1>Placa Mãe</h1>
            <h3>Nome: {nome}</h3>
            <h3>Preço: {preco}</h3>
        </div>
    )

}
const Memoria = ({nome, preco}) => {
    return (
        <div>
            <h1>Memoria</h1>
            <h3>Nome: {nome}</h3>
            <h3>Preço: {preco}</h3>
        </div>
    )
}
const PlacaDeVideo = ({nome, preco}) => {
    return (
        <div>
            <h1>Placa de Video</h1>
            <h3>Nome: {nome}</h3>
            <h3>Preço: {preco}</h3>
        </div>
    )
}

export {PlacaMae, Memoria, PlacaDeVideo}