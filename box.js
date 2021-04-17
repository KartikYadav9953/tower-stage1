class box {

    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.img = loadImage("polygon.png")
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.img, -200,-50,50,50);
        rect(0,0,this.width, this.height);
        pop();
      }


}




