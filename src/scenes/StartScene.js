import Phaser from 'phaser';


const headline = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
var title;

class StartScene extends Phaser.Scene {

  constructor() {
    super({ key: 'StartScene' });
  }

  init(data) {}

  preload() {
    
  }

  create(data) {

    title = this.add.text(400,300,"Start Scene", headline);
    title.setOrigin(0.5, 0.5);
    title.setInteractive({ useHandCursor: true });


    // switch to main scene
    title.on('pointerdown', this.gotoMainScene, this);


  }

  update(time, delta) {
  }

  gotoMainScene() {
    this.scene.switch('MainScene')
  }
  
}



export default StartScene;