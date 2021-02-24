class Raindrop{
    constructor(x){
        this.x = x
        this.y = -10
        this.r = 1
        var options = {
            restitution : 0.2

        }
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body)
        //Matter.Body.applyForce(this.body,this.body.position,{x:5,y:0})

    }

    display(){
        var pos = this.body.position;
        if(pos.y<800){
            push();
            noStroke();
            fill("lightblue")
            ellipseMode(RADIUS)
            ellipse(pos.x,pos.y,this.r,this.r)
            pop();
        } else {
            World.remove(world,this.body)
        }
        
    }
}