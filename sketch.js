const dotArr = [];
let saveFileName;
let colorText;

/* const saveBtn = document.getElementById('saveBtn');
const reloadBtn = document.getElementById('reloadBtn'); */

function setup() {
  createCanvas(800, 300);

  const randH = Math.floor(random(0, 361))
  const sBg = 20;
  const sDots = 100
  const randLBg = Math.floor(random(10, 90))
  const randLDots = randLBg < 50 ? Math.floor(random(50, 80)) : Math.floor(random(20, 50))

  colorText = randH.toString() + '-' + sDots.toString() + '-' + randLDots.toString()
  let dateStr = new Date;
  dateStr.toString()
  saveFileName = 'punchCardPattern' + '-' + colorText;
  
  colorMode(HSL)
  background(randH, sBg, randLBg);

  for (let i = 20; i < 740; i+= 20) {
    for (let j = 20; j < height; j+= 20) {
      if(Math.random() > 0.7) {
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

  fill(randH, sBg, randLBg);
  noStroke();
  rect(745, 0, 50, 300)

  fill(randH, sDots, randLDots);
  noStroke();
  rect(751, 0, 1, 300)

  fill(randH, sDots, randLDots);
  noStroke();
  rect(747, 0, 2, 300)

  fill(randH, sDots, randLDots);
  noStroke();
  rect(780, 0, 20, 300)

   translate(850,50);
  rotate( radians(90) );
  fill(randH, sDots, randLDots);
  text(colorText, 0, 90);
  /*text(dateStr, 20, 90); */
}

function draw() {
  
}

function keyTyped() {
  if (key === 's') {
    saveFile()
  }
}

function saveFile() {
  if (window.confirm(`Do you want to save ${saveFileName}.png on your device?`)){
    saveCanvas(saveFileName, 'png');
  };
}