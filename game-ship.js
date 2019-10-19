var config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 300
            },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};


var player;
var enemyShips;
var game = new Phaser.Game(config); //to create game use .game (function)



function preload ()
{
this.load.image('background', 'assets/background.jpg');   
this.load.image('Spaceship','assets/Spaceship.png');
this.load.image('S6','assets/enemy-ships/S6.png')
// this.load.image('background', 'assests/background.jpg');


}

function create ()
{
 this.add.image(960, 540, 'background');
 this.add.image(650,590,'Spaceship');
 this.add.image(500,200,'S6');

//  player=this.physics.add.image(100,450,'Spaceship');
 

}

function update ()
{

}

