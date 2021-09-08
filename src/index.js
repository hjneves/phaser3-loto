import Phaser from 'phaser';
import config from './config';
import MainScene from './scenes/MainScene';
import StartScene from './scenes/StartScene'


const startScene = new StartScene()
const mainScene = new MainScene();

var game = new Phaser.Game(config);

// load scenes
game.scene.add('MainScene', mainScene);
game.scene.add('StartScene', startScene);



// start title
game.scene.start('StartScene');