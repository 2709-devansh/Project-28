class stone{
    constructor(x,y){
        var options={
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
       this.image = loadImage("Images/stone.png");
       this.body = Bodies.rectangle(x,y,20,20,options);
       World.add(world, this.body);
    }
    display(){
       var pos = this.body.position;
       imageMode(CENTER);
       image(this.image,pos.x,pos.y,60,60);
    }
}