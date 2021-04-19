class Divisions {
    constructor(x, y, w, h) {
        var options = {

            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
    display() {
        text("500",15,640);
        text("500",95,640);
        text("500",175,640);
        text("500",255,640);
        text("100",335,640);
        text("100",415,640);
        text("100",495,640);
        text("200",575,640);
        text("200",655,640);
        text("200",735,640);
        
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.w, this.h);
    }
};