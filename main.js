'use strict'

const imagens = [
    {
        nome: 'bolha de sabao',
        url: './img/bolha.jpeg'
    },
    {
        nome: 'gato e cachorro',
        url: './img/cachorro-gato.jpeg'
    },
    {
        nome: 'dois gatos',
        url: './img/dupla.jpeg'
    },
    {
        nome: 'flor na cabeça',
        url: './img/flor.jpeg'
    },
    {
        nome: 'frajolinha',
        url: './img/frajola.jpeg'
    },
    {
        nome: 'gato laranja',
        url: './img/laranja.jpeg'
    },
    {
        nome: 'gato preto',
        url: './img/preto.jpeg'
    },
    {
        nome: 'gato tricolor',
        url: './img/tricolor.jpeg'
    },

]

function criarImagem(srcImagem){
    const galeria = document.getElementById('galeria')

    const imagem = document.createElement('img')
    const legenda = document.createElement('p')

    imagem.src = srcImagem.url
    legenda.textContent = srcImagem.nome

    galeria.appendChild(imagem)
    galeria.appendChild(legenda)
}



function carregarImagens(){
    imagens.forEach(criarImagem)

}

carregarImagens()