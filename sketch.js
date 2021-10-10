const dotArr = [];

function setup() {
  createCanvas(400, 400);
  background(220);
  for (let i = 5; i < width - 20; i+= 20) {
    for (let j = 20; j < height; j+= 20) {
      const randomXDistRange = Math.floor(random(10, 20))
      if(Math.random() > 0.5) {
        dotArr.push({
          xPos: i + randomXDistRange,
          yPos: j
        });
      }
      
    }
  }
  fill(134, 152, 200, 255);
  noStroke();
  for(el of dotArr) {
    circle(el.xPos, el.yPos, 10)
  }
}

function draw() {
  
}