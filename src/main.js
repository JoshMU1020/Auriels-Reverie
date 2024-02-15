"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("phaser");
class PlayGame extends Phaser.Scene {
    constructor() {
        super("PlayGame");
    }
    preload() {
        this.load.image('logo', 'assets/phaser3-logo.png');
        // Load player sprite
        this.load.image('player', 'assets/aur_web_start.png');
    }
    create() {
        // Add logo image
        this.add.image(400, 300, 'logo');
        // Add player sprite
        this.player = this.physics.add.sprite(100, 450, 'player');
        // Enable player physics
        this.player.setCollideWorldBounds(true);
        // Setup keyboard cursors
        if (this.input && this.input.keyboard) {
            this.cursors = this.input.keyboard.createCursorKeys();
        }
    }
    update() {
        // Player movement
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-200);
        }
        else if (this.cursors.right.isDown) {
            this.player.setVelocityX(200);
        }
        else {
            this.player.setVelocityX(0);
        }
        if (this.player.body && this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-300);
        }
    }
}
const config = {
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: 'thegame',
        width: 800,
        height: 600
    },
    scene: PlayGame,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 400 },
            debug: false
        }
    }
};
const game = new Phaser.Game(config);
