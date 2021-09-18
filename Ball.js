class Ball{
    constructor(x,y,w,h){
        let options={
            isStatic:false,
            restitution:0.8
        }; 
        this.w=w;
        this.h=h;
        //this.speed = 0.05;
        this.body = Bodies.rectangle(x, y, w,h, options);
        World.add(world, this.body);
    }
    show(){
        let pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(1);

        ellipseMode(CENTER);
        noStroke();
        fill("blue");
        ellipse(0,0, this.w, this.h);
        pop();
    }
}       