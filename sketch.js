const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {
    polygon_img = loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    platform1 = new Ground(300, 350, 250, 3)
    platform2 = new Ground(590, 300, 200, 3)

    //level 1 : 1
    block1 = new Block(200, 275, 30, 40);
    block2 = new Block(230, 275, 30, 40);
    block3 = new Block(260, 275, 30, 40);
    block4 = new Block(290, 275, 30, 40);
    block5 = new Block(320, 275, 30, 40);
    block6 = new Block(350, 275, 30, 40);
    block7 = new Block(380, 275, 30, 40);
    //level 2 : 1
    block8  = new Blockk(230, 235, 30, 40);
    block9  = new Blockk(260, 235, 30, 40);
    block10 = new Blockk(290, 235, 30, 40);
    block11 = new Blockk(320, 235, 30, 40);
    block12 = new Blockk(350, 235, 30, 40);
    //level3 : 1
    block13 = new Blockkk(260, 195, 30, 40);
    block14 = new Blockkk(290, 195, 30, 40);
    block15 = new Blockkk(320, 195, 30, 40);
    //top : 1
    block16 = new Blockkkk(290, 155, 30, 40);

    //level 1 : 2
    block17 = new Blockk(530, 235, 30, 40);
    block18 = new Blockk(560, 235, 30, 40);
    block19 = new Blockk(590, 235, 30, 40);
    block20 = new Blockk(620, 235, 30, 40);
    block21 = new Blockk(650, 235, 30, 40);

    //level 2 : 2
    block22 = new Blockkk(560, 195, 30, 40)
    block23 = new Blockkk(590, 195, 30, 40)
    block24 = new Blockkk(620, 195, 30, 40)

    //top : 2
    block25 = new Blockkkk(590, 155, 30, 40)

    polygon = Bodies.circle(50, 200, 20);
    World.add(world, polygon);

    slingshot = new SlingShot(this.polygon, {x : 100, y : 100})


    Engine.run(engine);
}

function draw(){
    rectMode(CENTER);
	background(0);
    Engine.update(engine)

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();

    platform1.display();
    platform2.display();

    imageMode(CENTER)
    image(polygon_img, polygon.position.x, polygon.position.y, 40, 40)

    slingshot.display();

    textSize(18)
    text("Drag the Hexagonal Stone and release it, to launch towards the blocks", 150, 50)

    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}