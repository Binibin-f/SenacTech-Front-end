const cartas = [
    {
        nome: 'Froakie'
        

    },
    {
        nome: 'Pysduck'
    },
    {
        nome: 'Mewtwo'
    }
]

cartas.forEach(function(umaCarta){
    const carta = document.createElement('article')
    carta.className = 'card'

    const innerHTMLCarta = `
    
    <header class="cabeça">
            <div class="nome">
                <p>Básico</p>
                <h1>${umaCarta.nome}</h1>
            </div>
            <div class="vida">ps 60</div>
            <div class="iconagua"><img src="#"></div> 
        </header>
  
        <article>
            
            <figure class="imagem">
                <img width= "100%" src = https://archives.bulbagarden.net/media/upload/thumb/1/19/Goh_Froakie.png/250px-Goh_Froakie.png>
            </figure>
            
            <p>N° 0656 Pokémon Sapo Bolha Altura: 0.3 m Peso: 7.0 kg</p>
            <div class="meio">
                <div class="iconnulo"><img src="#"></div>
                <h1>Baque</h1>
                <div class="dano">10</div>
            </div>
            <div class="dados">
                <p>Fraqueza</p>
                <div class="iconraio"><img src="#"></div>
                <div class="fraqueza">+20</div>
                <p>Recuo</p>
                <div class="iconnulo"><img src="#"></div>
            </div>
            
        </article>
        <footer>
            <section>
                <div class="artistarari">
                    <p>Ilust. Aya Kusube</p>
                    <div class="raridade"><img src="#"></div>
                </div>

                <div class="texto">
                <p>Liberam bolhas flexíveis do peito e das costas. As bolhas reduzem os danos que sofreriam ao serem atacados</p>
                </div>
            </section>
        <footer>
    `
    carta.innerHTML = innerHTMLCarta;
    
    document.querySelector("#deck")
        .appendChild(carta)
    }
)