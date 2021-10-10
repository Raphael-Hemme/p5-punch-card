const dotArr = [];


function setup() {
  createCanvas(400, 400);
  background(220);

  const randomR = Math.floor(random(0, 256));
  const randomG = Math.floor(random(0, 256));
  const randomB = Math.floor(random(0, 256));
  const randomA = Math.floor(random(50, 256));

  for (let i = 20; i < width - 10; i+= 20) {
    for (let j = 20; j < height; j+= 20) {
      // const randomXDistRange = Math.floor(random(10, 20))
      if(Math.random() > 0.5) {
        dotArr.push({
          xPos: i, // + randomXDistRange,
          yPos: j
        });
      }
      
    }
  }
  fill(randomR, randomG, randomB, randomA);
  noStroke();
  for(el of dotArr) {
    circle(el.xPos, el.yPos, 10)
  }
}

function draw() {
  
}