btCadastrar.addEventListener('click', Confirmar)
btLimpar.addEventListener('click', limparCards)


function limparCards(){
    cards.innerHTML="<h4>Resultado<h4>"

}



function Confirmar() {
        let nome = txLogin.value
        if(nome){
            let nomeLogin = nome
            let htmlDoCard =`
        
            <figure>
                <img src="https://github.com/${nomeLogin}">
                <img src=""https://avatars.githubusercontent.com/u/169199234?v=4</img>
            </figure>
            `
        
            let card = document.createElement('article')
            card.innerHTML = htmlDoCard
            cards.appendChild(card)

        }
    }
   
