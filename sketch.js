const dotArr = [];
let saveFileName;


function setup() {
  // createCanvas(400, 400);
  createCanvas(800, 300);
  // background(220);

/*   const randomR = Math.floor(random(0, 256));
  const randomG = Math.floor(random(0, 256));
  const randomB = Math.floor(random(0, 256));
  const randomA = Math.floor(random(50, 256)); */

  const randH = Math.floor(random(0, 361))
  const sBg = 20;
  const sDots = 100
  const randLBg = Math.floor(random(10, 90))
  const randLDots = randLBg < 50 ? Math.floor(random(50, 80)) : Math.floor(random(20, 50))

  colorMode(HSL)

  background(randH, sBg, randLBg);

  for (let i = 20; i < width - 10; i+= 20) {
    for (let j = 20; j < height; j+= 20) {
      if(Math.random() > 0.5) {
        dotArr.push({
          xPos: i,
          yPos: j
        });
      }
      
    }
  }
  fill(randH, sDots, randLDots);
  noStroke();
  for(el of dotArr) {
    circle(el.xPos, el.yPos, 10)
  }
  saveFileName = 'punchCardPattern' + '-' + randH.toString() + '-' + sDots.toString() + '-' + randLDots.toString();
  
}

function draw() {
  
}

function keyTyped() {
  if (key === 's') {
    if (window.confirm(`Do you want to save ${saveFileName}.png on your device?`)){
      saveCanvas(saveFileName, 'png');
    };
  }
}