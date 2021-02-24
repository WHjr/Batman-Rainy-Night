const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Composites = Matter.Composites;

var engine,world,render;

var batman, walking;
var lightning, l1,l2;
var raindrops = []

function preload(){
    l1 = loadImage("images/thunderbolt/1.png")
    l2 = loadImage("images/thunderbolt/2.png")
    l3 = loadImage("images/thunderbolt/3.png")
    l4 = loadImage("images/thunderbolt/4.png")
    walking = loadAnimation("images/Walking Frame/walking_8.png","images/Walking Frame/walking_7.png",
    "images/Walking Frame/walking_6.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_4.png",
    "images/Walking Frame/walking_3.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_1.png")
}

function setup(){
   canvas = createCanvas(800,800)

   //physics engine setup 
   engine = Engine.create();
   world = engine.world;
   Engine.run(engine);
   
   //batman sprite
   batman = createSprite(400,630,10,10)
   batman.addAnimation("walking",walking)
   batman.scale = 0.5

   umbrella = new Umbrella()
    
}

function draw(){
    //Engine.update(engine)
    background(0)

    batman.pause();
    

    if(keyDown(RIGHT_ARROW)){
        batman.x += 5
        batman.mirrorX(1)
        batman.play()
        Matter.Body.setPosition(umbrella.body,{x:batman.x+16,y:batman.y-54})
    }
    if(keyDown(LEFT_ARROW)){
        batman.x -= 5
        batman.mirrorX(-1)
        batman.play()
        Matter.Body.setPosition(umbrella.body,{x:batman.x-16,y:batman.y-54})
    }

    if(frameCount%1 === 0){
        raindrops.push(new Raindrop(random(0,800)))
        raindrops.push(new Raindrop(random(0,800)))
        raindrops.push(new Raindrop(random(0,800)))
        raindrops.push(new Raindrop(random(0,800)))
        raindrops.push(new Raindrop(random(0,800)))


    }

    for(var i =0; i < raindrops.length; i++){
         raindrops[i].display();
    }
    makeLightning();
    drawSprites();
    //umbrella.display();
    
}   

function makeLightning(){
    if(frameCount%100===0){
        lightning = createSprite(200,150,10,10)
        var rand = Math.round(random(1,4))
        switch(rand){
            case 1 : lightning.addImage(l1)
            break;
            case 2 : lightning.addImage(l2)
            break;
            case 3 : lightning.addImage(l3)
            break;
            case 4 : lightning.addImage(l4)
            break;
        }
        lightning.x = random(100,700)
        lightning.scale = 0.5
        lightning.lifetime = 3

    }
}

