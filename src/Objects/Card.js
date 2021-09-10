export default class Card extends Phaser.GameObjects.Image {
    constructor(data) {
        console.log(data)
        
        let { scene, x, y, imageName } = data
        let xPos = 60 + y * 120
        let yPos = 175 + x *120

        super(scene, xPos, yPos, imageName)

        this.xIndex = x
        this.yIndex = y

        //this.image = new Phaser.GameObjects.Image(xPos, yPos, imageName).setDisplaySize(110,110)
        this.setDisplaySize(110,100)
        this.setInteractive()
        this.input.dropZone = true
        scene.add.existing(this)
    }
}


