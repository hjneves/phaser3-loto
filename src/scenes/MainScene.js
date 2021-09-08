import Phaser from 'phaser';

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' });
  }

  init(data) {}

  preload() {
    this.load.image('cartao-amarelo-1-1', 'assets/cartao-amarelo-1-1.jpg');
  }

  create(data) {

    for (let col = 0; col < 5; col++) {
      for (let row = 0; row < 4; row++) {
        
        this.add.image(0 + col * 120, 0 + row * 120, 'cartao-amarelo-1-1').setDisplaySize(110,110)

        
      }
      
    }

  }

  update(time, delta) {
  }
}

export default MainScene;