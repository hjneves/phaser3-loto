import Phaser from 'phaser';
import Card from '../Objects/Card';
import CardDraggable from '../Objects/CardDraggable';



let boardImages = new Array()
let score = 0
let scoreText 
var self

// aceder ao cartºao na posicao 0,0
//boardImages[0][0]
// ultima posicao boardImages[4][3] 

class MainScene extends Phaser.Scene {

  

  constructor() {
    super({ key: 'MainScene' });
    self = this
  }

  init(data) { 
    
  }

  preload() {


    // preload da imagens
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 5; col++) {

        this.load.image('cartao-amarelo-' + row + '-' + col, 'assets/amarelo/cartao-amarelo-' + row + '-' + col + '.png');
      }

    }

  }

  create(data) {

    // create board
    this.createBoard("amarelo-1")

    //  create cardsDeck function
    this.createCardsDeck("amarelo")

    // TODO - create score are
    this.createScoreArea()

    this.input.on('dragstart', function (pointer, gameObject) {

      gameObject.setTint(0xff9000);

    });

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    
    this.input.on('drop', function (pointer, gameObject, dropZone) {

      console.log('fizDrop', dropZone.xIndex, dropZone.yIndex)
      console.log('objecto', gameObject.xIndex, gameObject.yIndex)

      gameObject.x = dropZone.x;
      gameObject.y = dropZone.y;

      if (gameObject.xIndex == dropZone.xIndex && gameObject.yIndex == dropZone.yIndex) {
        console.log('posicao certa');
        gameObject.setTint(0xff00);
         // TODO assinalar posicao nas vars de linha e coluna completa
        self.markPosition(gameObject.xIndex, gameObject.yIndex, true);


        // TODO Update score

      } else {
        console.log('posicao errada')
        gameObject.setTint(0xff0000);
        self.markPosition(gameObject.xIndex, gameObject.yIndex, false);

      }

      gameObject.input.enabled = false;
      dropZone.input.enabled = false;

    })

    this.input.on('dragend', function (pointer, gameObject, dropped) {

      console.log('FizDragend')


      if (!dropped) {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
        gameObject.clearTint();
      }

     

    });

    

  }

  update(time, delta) {
  }

  markPosition(row, col, validated) {

    console.log(row, col)
    // TODO - mark position row, col on arrays - true
    boardImages[row][col].markCardPosition(validated)
  
    // check row complete - if complete turn cicrcle cgreen

    for (let vcol = 0; vcol < 5; vcol++) {

      // read validate property and check all are true
      if (boardImages[row][vcol].markCardPosition(true)) {
        console.log('fez linha')
      } 
      // check col complete - if completed turn circle green
        for (let vrow = 0; vrow < 4; vrow++) {

          boardImages[vrow][col]
        }
    }
      
      
  } 
    

  createBoard(color, index) {

    const headline = { font: "bold 16px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

    // Create labels
  
    const colLabels = ["Arvore", "Tronco", "Folha", "Flor", "Fruto"]
    const rowLabels = {
      "amarelo-1": [
        { name: "Azevinho", scientificName: "Ilex-Aquifolium" },
        { name: "Azinheira", scientificName: "Quercus ilex" },
        { name: "Choupo", scientificName: "Populus alba" },
        { name: "Azinheira", scientificName: "Quercus ilex" },
      ],
      "amarelo-2": [
        { name: "Azevinho", scientificName: "Ilex-Aquifolium" },
        { name: "Azinheira", scientificName: "Quercus ilex" },
        { name: "Azevinho", scientificName: "Ilex-Aquifolium" },
        { name: "Azinheira", scientificName: "Quercus ilex" },
      ]
    }

    

    this.START_BOARD_X = 200
    this.START_BOARD_Y = 175
    this.CARD_SIZE = 100

    // create board cards
    for (let col = 0; col < 5; col++) {
      // create column labels
      this.add.text(this.START_BOARD_X + col * this.CARD_SIZE, this.START_BOARD_Y - 80, colLabels[col], headline).setOrigin(0.5, 0.5)
      // create circles
      this.add.circle(this.START_BOARD_X + col * this.CARD_SIZE, this.START_BOARD_Y + this.CARD_SIZE * 4, 20, 0x6666ff)
      boardImages[col] = new Array()

      for (let row = 0; row < 4; row++) {

        // create row labels
        col == 0 ? this.add.text(this.START_BOARD_X -100, this.START_BOARD_Y + row * this.CARD_SIZE, rowLabels[color][row].name, headline).setOrigin(0.5, 0.5) : null

        col == 0 ? this.add.circle(this.START_BOARD_X + this.CARD_SIZE * 5, this.START_BOARD_Y + row * this.CARD_SIZE, 20, 0x6666ff) : null

        var cardObject = new Card({ scene: this, x: row, y: col, imageName: 'cartao-amarelo-' + row + '-' + col })        // setInteractive


        boardImages[col].push(cardObject)


      }

    }


  }

  createCardsDeck(color) {

    // create a loop
    for (let col = 0; col < 5; col++) {

      for (let row = 0; row < 4; row++) {

        new CardDraggable({ scene: this, x: row, y: col, imageName: 'cartao-amarelo-' + row + '-' + col })

      }
    }

    /* new CardDraggable({scene:this, x: 0, y: 0, imageName: 'fruto'})
    new CardDraggable({scene:this, x: 0, y: 1, imageName: 'florAzinheira'})
    new CardDraggable({scene:this, x: 0, y: 2, imageName: 'florBranca'})
    new CardDraggable({scene:this, x: 0, y: 3, imageName: 'bolota'}) */

  }

  createScoreArea() {
    //score
    scoreText = this.add.text(16, 16, 'score: 0');
  }

}



export default MainScene;