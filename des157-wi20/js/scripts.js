let pixel;

function setup(){
 var myCanvas = createCanvas(800,250);
 /* pixel = loadImage("gradient.jpg"); */
 background(0);
 myCanvas.parent(mySketch);
 loadImage('gradient.jpg', img => {
 image(img, 0, 0);
});
}

function draw(){
 for (var i = 0; i < 250; i++){
   var x = random(width);
   var y = random(height);
   var c = pixel.get(int(x), int(y));
   fill(c,25);
   noStroke();
   ellipse(x,y,10,10);
}
}
