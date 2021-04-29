import Snake from "./snake.js"

export default class MainScene extends Phaser.Scene{
    constructor(){
        super("MainScene");
    }

    preload(){

    }

    create(){
        snake = new Snake(this);
    }

    update(time){
        //console.log('updating...');
        //console.log(time);
        this.snake.update(time);
    }
}