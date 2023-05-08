const SaveData = () => {

    const saveData = () => {
        const aluno = {nome: "Deivid", curso: "Ciência da Computação", matricula: "00001"}
        //sessionStorage.setItem(aluno.matricula, JSON.stringify(aluno))
        localStorage.setItem(aluno.matricula, JSON.stringify(aluno))
    }

    return (
        <>
            <h1>Salvando Dados...</h1>
            {saveData()}
        </>
    )
}

const LoadData = () => {

    const loadData = () => {
        const aluno = JSON.parse(localStorage.getItem("00001"))
        return (
            <>
                <h3>Nome: {aluno.nome}</h3>
                <h3>Nome: {aluno.curso}</h3>
            </>
        )
    }

    return (
        <>
            <h1>Carregando Dados</h1>
            {loadData()}
        </>
    )

}

export { SaveData, LoadData }