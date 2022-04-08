class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
      super(scene, x, y, texture, frame);
  
      // add object to existing scene
      scene.add.existing(this);
      this.points= pointValue;
      this.moveSpeed= 3;
    }

    update(){
        //move spaceship left
        this.x -= this.moveSpeed;
        //wrap around edges
        if(this.x <= 0 - this.width){
            this.reset();
        }
    }

    reset() {
        this.x = game.config.width;
    }
}