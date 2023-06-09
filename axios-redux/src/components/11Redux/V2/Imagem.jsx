import { useSelector } from "react-redux"

const Imagem = () => {

    const id = useSelector((state)=>state.id.value)

    return (
        <>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`} alt="Pokemon"
                style={{width:"300px"}}>
            </img>
        </>
    )
}

export default Imagem