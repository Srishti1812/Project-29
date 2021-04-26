class Blockkkk extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
    }
  display(){
    rectMode(CENTER)
    fill("yellow")
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
   }
  }