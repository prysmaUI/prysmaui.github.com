PImage pixel;

void setup(){
 size(800,250);
 pixel = loadImage("gradient.jpg");
 background(0);
}

void draw(){
 for (int i = 0; i < 250; i++){
   float x = random(width);
   float y = random(height);
   color c =pixel.get(int(x), int(y));
   fill(c,25);
   noStroke();
   ellipse(x,y,10,10);
}
}
