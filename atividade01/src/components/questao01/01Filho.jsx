const Filho = ({peso, altura}) => {

    const imc = (peso, altura) => peso / (altura * altura)
    
    const renderingTest = () => {
        if (imc(peso, altura) < 18) return <h3>Abaixo do peso</h3>
        
        else if (imc(peso, altura) > 25) return <h3>Acima do peso</h3>
    
        return <h3>Peso ideal</h3>
    }

    const imcRes = imc(altura, peso)
    return (
        <div>
            <h1>O imc é: {imcRes}</h1>
            <h1>{renderingTest(peso, altura)}</h1>
        </div>
    )
}

export default Filho