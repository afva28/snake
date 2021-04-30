export default class Snake {

    constructor(scene){
        this.scene = scene;
        this.timeLastMove = 0;
        this.moveInterval = 250;

        this.tileSize=16;

        this.direction = Phaser.Math.Vector2.RIGHT;
        this.body=[];

        this.body.push(
            this.scene.add
                .rectangle(this.scene.game.config.width/2, this.scene.game.config.height/2, this.tileSize, this.tileSize, 0xff00ff)
                .setOrigin(0)
        );

        this.apple = this.scene.add.rectangle(32,32,this.tileSize,this.tileSize, 0x00ff00).setOrigin(0);
        this.placeApple();

        this.scene.input.keyboard.on('keydown', e => {
            this.keydown(e);
        });
    }

    placeApple(){
        this.apple.x = 
            Math.floor(
                Math.random() * this.scene.game.config.width/this.titleSize)*this.tileSize;
        this.apple.y =
             Math.floor(
                 Math.random()*this.scene.game.config.height/this.titleSize)*this.tileSize;
    }

    keydown(event){
        switch(event.keyCode){
            case 37:
                if(this.direction != Phaser.Math.Vector2.RIGHT)
                {
                    this.direction = Phaser.Math.Vector2.LEFT;
                }
                break;
            case 38:
                if(this.direction != Phaser.Math.Vector2.DOWN)
                    {
                        this.direction = Phaser.Math.Vector2.UP;
                    }
                    break;
            case 39:
                if(this.direction != Phaser.Math.Vector2.LEFT)
                    {
                        this.direction = Phaser.Math.Vector2.RIGHT;
                    }
                    break;
             case 40:
                if(this.direction != Phaser.Math.Vector2.UP)
                    {
                        this.direction = Phaser.Math.Vector2.DOWN;
                    }
                    break;
        }

        //if(event.keyCode == 37){
            //esquerda
        //}
       // else if(event.keyCode==38){
            //cima
        //}
        //else if(event.keyCode==39){
            //direita
        //}
        //else if(event.keyCode==40){
            //baixo
        //}
    }

    update(time){
        if(time >= this.timeLastMove + this.moveInterval)
        {
            this.timeLastMove = time;
            this.move();
        }
    }

    checkApple(x,y){
        if(this.apple.x=== x&& this.apple.y === y){
            this.placeApple();
            this.body.push(
                this.scene.add.rectangle(0,0,this.tileSize,tileSize,0xffffff).setOrigin(0)
            );
        }  
    }

    checkDeath(x,y){
        if(x<0 || x>= this.scene.game.config.width || y<0 || y>= this.scene.game.config.height){
            this.scene.scene.restart();
        }

        let tail = this.body.slice(1);
        if(tail.some(segment=> segment.x===x && segment.y === y))
        {
            this.scene.scene.restart();
        }
    }

    move(){

        let x = this.body[0].x + this.direction.x * this.tileSize;
        let y = this.body[0].y + this.direction.y * this.tileSize;

        this.checkApple(x,y);
        this.checkDeath(x,y);

        for(let i = this.body.length -1; i>0; i--)
        {
            this.body[i].x=this.body[i-1].x;
            this.body[i].y=this.body[i-1].y;
        }
        /*this.body[2].x = this.body[1].x;
        this.body[2].y = this.body[1].y;
        this.body[1].x = this.body[0].x;
        this.body[1].y = this.body[0].y;*/
        this.body[0].x = x;
        this.body[0].y = y;
    }
}

