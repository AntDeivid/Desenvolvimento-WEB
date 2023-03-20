import React from "react";

const MeusDadosProps = ({nome, curso, universidade}) => {

    return (
        <div>
            <h1>Meu nome é: {nome} </h1>
            <h1>Meu curso é: {curso} </h1>
            <h1>Minha universidade é: {universidade} </h1>
        </div>
    )
}

export default MeusDadosProps