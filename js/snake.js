export default class Snake {
    constructor(scene){
        this.scene = scene;
        this.body=[];

        this.body.push(
            this.scene.add
                .rectangle(20, 20, 16, 16, 0xff0000)
                .setOrigin(0)
        );
    }

    update(time){
        //console.log('serpenteando...');
        this.box.x += 1;
    }
}