export default class CardDraggable extends Phaser.GameObjects.Image {
    constructor(data) {
        console.log(data)
        

        // TODO - create a text label Arvore - Parte on top of image
        let { scene, x, y, imageName } = data
        let xPos = 720
        let yPos = 80

        super(scene, xPos, yPos, imageName)

        this.xIndex = x
        this.yIndex = y

        //this.image = new Phaser.GameObjects.Image(xPos, yPos, imageName).setDisplaySize(110,110)
        this.setDisplaySize(90,90)
        this.setInteractive()
        scene.input.setDraggable(this)
        scene.add.existing(this)
    }
}