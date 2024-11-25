/**
 * Jogo da
 * 
 */

let imane = assets.image`nemo`
let nemo = sprites.create(imane)



controller.moveSprite(nemo)
nemo.setPosition(20, 60)

controller.left.onEvent(ControllerButtonEvent.Pressed,
    function () {
        let imaes = assets.image`nemoesq`
        let nemoes = sprites.create(imaes)

    }
)