let config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    physics:{
        default: 'arcade',
        arcade: {
            debug: true,
            debugShowVelocity: false
    }
},
scene: [load, scene1, scene2],
title: "???",
};