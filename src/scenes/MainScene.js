import Phaser from 'phaser';
import Card from '../Objects/Card';

let boardImages = new Array()


// aceder ao cartºao na posicao 0,0
//boardImages[0][0]
// ultima posicao boardImages[4][3] 

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' });
  }

  init(data) {}

  preload() {
    this.load.image('cartao-amarelo-1-1', 'assets/cartao-amarelo-1-1.jpg');
    this.load.image('fruto', 'assets/fruto.jpg');
  }

  create(data) {

    for (let col = 0; col < 5; col++) {
      boardImages[col] = new Array()
      for (let row = 0; row < 4; row++) {
        
        var cardObject = new Card({scene:this, x: row, y: col, imageName: 'cartao-amarelo-1-1'})        // setInteractive


        boardImages[col].push(cardObject)
        
     /*   var zone = this.add.image(60 + col * 120, 175 + row * 120, 'cartao-amarelo-1-1').setDisplaySize(110,110)
        // setInteractive
        zone.setInteractive();
        zone.input.dropZone = true; */
      }
      
    }

    // this.add.image será new CardDraggable... com posição do x e y
    var card = this.add.image(720, 80, 'fruto').setInteractive();

    this.input.setDraggable(card);

    this.input.on('dragstart', function(pointer, gameObject){

      gameObject.setTint(0xff9000);

    });

    this.input.on('drag', function(pointer, gameObject, dragX, dragY){

      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.input.on('drop', function(pointer, gameObject, dropZone) {
      console.log('fizDrop', dropZone.xIndex, dropZone.yIndex)
      gameObject.x = dropZone.x;
      gameObject.y = dropZone.y;

      gameObject.input.enabled = false;
    })

    this.input.on('dragend', function(pointer, gameObject, dropped){

        console.log('FizDragend')
      gameObject.clearTint();

      if(!dropped) {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }

   /*   if (gameObject.x < 700 && gameObject.y > 100) {
      } else {
      gameObject.x = 720;
      gameObject.y = 80;
      } */

    });

  }

  update(time, delta) {
  }
}

export default MainScene;