import 'phaser';
 
class PlayGame extends Phaser.Scene {
    image: Phaser.GameObjects.Image;
    constructor() {
        super("PlayGame");
    }
    preload(): void {
        this.load.image('logo', 'assets/aur_web_start.png');  
        //this.load.image('logo', 'assets/sprites/bunny.png');  
    }
    create(): void {
        this.image = this.add.image(400, 350, 'logo');
    }
    update(): void {
        this.image.rotation += 0.001;   
    }
}
 
const config: Phaser.Types.Core.GameConfig = {
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: 'thegame',
        width: 800,
        height: 700
    },
    scene: PlayGame
};
 
const game = new Phaser.Game(config);