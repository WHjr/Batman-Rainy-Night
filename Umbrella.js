class Umbrella{
    constructor(){
        this.x = batman.x + 16
        this.y = batman.y - 54
        this.r = 103
        var options = {
            restitution : 0.2,
            isStatic: true,
            friction: 1
        }
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body)
    }

    display(){
        
        var pos = this.body.position;
        
        push();
        noStroke()
        fill(0)
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.r,this.r)
        pop();
        
        
    }
}