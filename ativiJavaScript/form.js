btCadastrar.addEventListener('click', cadastrarRobo)
btLimpar.addEventListener('click', limparCards)


function limparCards(){
    cards.innerHTML="<h4>cards<h4>"

}




function cadastrarRobo() {
        let nome = txNome.value
        if(nome){
            let nomeDoRobo = nome
            let htmlDoCard =`
        
            <figure>
                <img src="https://robohash.org/${nomeDoRobo}">
                <figcaption>${nomeDoRobo}</figcaption> 
            </figure>
            `
        
            let card = document.createElement('article')
            card.innerHTML = htmlDoCard
            cards.appendChild(card)

        }
    }
   
