export default class Snake {
    constructor(scene){
        this.scene = scene;
        this.direction = Phaser.Math.Vector2.RIGHT;
        this.body=[];

        this.body.push(
            this.scene.add
                .rectangle(20, 20, 16, 16, 0xff0000)
                .setOrigin(0)
        );

        this.body.push(
            this.scene.add
                .rectangle(20, 20, 16, 16, 0x0000ff)
                .setOrigin(0)
        );

        this.scene.input.keyboard.on('keydown', e=> {
            this.keydown(e);
        });
    }

    keydown(event){
        switch(event.keyCode){
            case 37:
                this.direction = Phaser.Math.Vector2.LEFT;
                break;
            case 38:
                this.direction = Phaser.Math.Vector2.UP;
                break;
            case 39:
                this.direction = Phaser.Math.Vector2.RIGHT;
                break;
            case 40:
                this.direction = Phaser.Math.Vector2.DOWN;
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
        //console.log('serpenteando...');
        this.box[0].x += this.direction.x * 16;
        this.box[0].y += this.direction.y * 16;
    }
}

