async function buscarEMostrarPersonagem(){
    const idPersonagem = pegarValorDoInput("#idPersonagem")
    const personagem = await buscarPersonagemNaApi(idPersonagem)
    montarTelaComDadosDoPersonagem(personagem)
}

function pegarValorDoInput(seletorInput) {
    let valor = document.querySelector(seletorInput).value
    return valor
}

async function buscarPersonagemNaApi(numeroPersonagem){
    const url = "https://rickandmortyapi.com/api/character/" + numeroPersonagem
    const response = await fetch(url)
    const responseData = await response.json()

    return responseData
}

function montarTelaComDadosDoPersonagem(personagem){
    const elementoCharacter = document.querySelector(".character-container")
    elementoCharacter.style.display = "block"

    const elementoImagem = document.querySelector("#imagemPersonagem")
    elementoImagem.src = personagem.image
}