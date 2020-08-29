class tree{
    constructor(x,y){
        var options={
            isStatic: true
        }
        this.image = loadImage("Images/tree.png");
        this.body = Bodies.rectangle(x,y,50,50,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,500,695);
    }
}