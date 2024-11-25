    // Variante
    /
    let nome
    let mensagem

    nome = "Ingrid"
    mensagem = "Bem vinda! "

    console.log("Rodandno")
    game.splash(mensagem + nome)
    */


    // RandomNumber com if de resultado
    
    let dado
    dado = Math.randomRange(1, 6)

    game.splash("Dado rodado: " + dado)

    console.log(dado)
    game.splash(dado)

    if (dado <= 3)
    {
        game.splash("Perdeu")
    }
    else 
    {
        game.splash("Ganhou")
    }
    */



    // Codigo completo com melhorias
    
    let nome
    let mensagem

    nome = "Ingrid"
    mensagem = "Bem vinda! "

    game.splash(mensagem + nome)
    game.splash("Precione A ", "Para rolar um dado")

    controller.A.onEvent(ControllerButtonEvent. Pressed, function ()
    {
        console.log("Rolando dado")
        console.log("Dado rolado: " + Math.randomRange(1, 6))
        game.splash("Dado rolado: " + Math.randomRange(1, 6))
    })


    let dado
    dado = Math.randomRange( 1, 6 )

    console.log(dado)

    if (dado <= 4)
        {
            game.showLongText("Você tirou " + dado + " Tente novamente", DialogLayout.Bottom)
        }
        else 
        {
            game.showLongText("Você tirou " + dado + " Parabens", DialogLayout.Bottom)
        }
        */


    // Função forever
    
    let numero = 3

    game.forever(function ()
    {
        numero + numero + 1
        console.log("rodando: " + numero)
    
    })

    game.splash(numero)
    */


    // Score
    
    let dado = 0
    info.setScore(0)

    controller.A.onEvent(ControllerButtonEvent.Pressed, function ()
    {

        if (dado >= 4)
        {
            info.changeScoreBy(10)
        }

        dado = Math.randomRange(1, 6)
        game.splash("Dado = " + dado, "total = " + info.score() )

    })
    */