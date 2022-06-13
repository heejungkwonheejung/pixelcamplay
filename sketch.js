let capture;
let angle = 0.0;
let jitter = 0.0;
let size = 10;
let x = 0;
let y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(560, 400);
  rectMode(CENTER);

}

function draw() {
  clear();
  background(0);
  noStroke();
  capture.loadPixels();
  
  let size = floor(map(mouseX, 0, width, 4, 30));
  
  for (let y = 0; y < capture.height; y++) { 
    for (let x = 0;x < capture.width; x++) {
      let index = (x + y * capture.width) * 4;
      let r = capture.pixels[index + 0];
      let g = capture.pixels[index + 1];
      let b = capture.pixels[index + 2];
 
      fill(r,g,b); 
  ///*
  push();
  translate(x, y);
      
  if(mouseIsPressed==true){
   //rotate(radians((x*0.5+y*0.9)));
  //triangle(0,0, size, size, size*2, size/2);
    for (let i=0; i<100; i++) {
      if (second() % 5 === 0) {
    jitter = random(-5, 5);
  }
  //let c = cos(angle);
  translate(width , height );
  //rotate(c);
  rect(0, 0, size, size);
  //triangle(0,0, size, size, size*2, size/2)
  rotate(radians((x*0.2+y*0.2)));
    }
 pop();

  }else{
    rect(0, 0, size, size);
    
    
  
    if (key === 'a') {
    for (let i=0; i<50; i++) {
      if (second() % 5 === 0) {
    jitter = random(-1, 1);
  }
  let c = cos(angle);
  translate(width , height );
  rotate(c);
  //rect(0, 0, size, size);
  triangle(0,0, size, size, size*2, size/2);
     // rotate(radians((x*0.5+y*0.01)));
    }
      }
    
    if (key === 'b') {
    clearStorage();
  }
  pop();
  }
  endShape(CLOSE);
      x = x + size -1;
}
    y = y + size -1; 
  }
}