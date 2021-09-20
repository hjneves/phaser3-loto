export default class Card extends Phaser.GameObjects.Image {
    constructor(data) {
        console.log(data)
        
        let { scene, x, y, imageName } = data
        let xPos = scene.START_BOARD_X + y * scene.CARD_SIZE
        let yPos = scene.START_BOARD_Y + x * scene.CARD_SIZE

        super(scene, xPos, yPos, imageName)

        this.xIndex = x
        this.yIndex = y
        this.validated = false

        //this.image = new Phaser.GameObjects.Image(xPos, yPos, imageName).setDisplaySize(110,110)
        this.setDisplaySize(scene.CARD_SIZE-10,scene.CARD_SIZE-10)
        this.setInteractive()
        this.input.dropZone = true
        scene.add.existing(this)
    }

    markCardPosition(value) {
        this.validated = value
    }

}


