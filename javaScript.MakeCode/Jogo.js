let imapor = assets.image`porco`
let porco = sprites.create(imapor)

porco.setPosition(100, 50)
porco.setScale(2)


let imaper = assets.image`pernil`
let pernil = sprites.create(imaper)
pernil.setPosition(0, -100)


let imafe = assets.image`feliz`
let feliz = sprites.create(imafe)
feliz.setPosition(0, -100)




controller.moveSprite(porco)

controller.A.onEvent(ControllerButtonEvent.Pressed,
    function () { 
        let number = Math.randomRange(1, 6)

        if (number <= 4) {
            pernil.say("ops")
            pernil.setPosition(100, 50)
            pernil.setScale(2)
            feliz.setPosition(-100, -0)
            porco.destroy()
          



        } else {
           
            feliz.setPosition(50, 50)
            feliz.setScale(2)
            pernil.setPosition(-100, -0)

        }

    }
)





let imafan1 = assets.image`fan1`
let imafan2 = assets.image`fan2`

let imagem = imafan1
let sprint = sprites.create(imagem)
let vezFan1 = false 

controller.A.onEvent(ControllerButtonEvent.Pressed,
    function () {
    
        if (vezFan1) {
            imagem = imafan1
            vezFan1 = false
        } else {
            imagem = imafan2
            vezFan1 = true
        }

        sprites.create(imagem)

    }

)