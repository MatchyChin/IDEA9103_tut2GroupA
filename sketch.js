let wsX = [0, 40, 70, 130, 200, 240, 320, 340, 460, 530, 570, 630, 690, 710, 770, 810, 850, 890];

let wsY = [0, 40, 180, 360, 430, 530, 590, 650, 720, 780, 810, 860];
let wsY2 = [0, 40, 180, 250, 360, 430, 530, 590, 680, 780, 860];
let wsY3 = [0, 40, 100, 180, 320, 360, 430, 530, 590, 680, 780];
let wsY4 = [0, 40, 180, 360, 430, 530, 590, 680, 790, 860];
let wsY5 = [0, 40, 180, 430, 530, 590, 780, 860];
let wsY6 = [0, 40, 180, 360, 430, 490, 530, 590, 740, 780, 860];
let wsY7 = [0, 40, 140, 180, 260];
let wsY8 = [0, 40, 180, 360, 590, 680];
let wsY9 = [0, 40, 180, 360, 530, 590, 780, 860];

let wsW = [20, 50, 10, 40, 150, 90, 270, 140, 190, 220, 180, 60, 100];

let wsH = [20, 120, 160, 50, 80, 40, 40, 50, 40, 10, 30, 40];
let wsH2 = [20, 120, 20, 90, 50, 80, 40, 20, 80, 60, 40];
let wsH3 = [20, 20, 60, 90, 20, 50, 40, 40, 70, 20, 60];
let wsH4 = [20, 120, 160, 50, 80, 40, 70, 80, 60, 40];
let wsH5 = [20, 120, 160, 50, 80, 40, 70, 80, 50, 40];
let wsH6 = [20, 120, 160, 80, 40, 170, 60, 40];
let wsH7 = [20, 120, 160, 50, 20, 20, 40, 20, 20, 60, 40];
let wsH8 = [20, 60, 20, 20, 80];
let wsH9 = [20, 60, 160, 50, 70, 40];
let wsH10 = [20, 120, 160, 150, 40, 170, 60, 40];


let wsx = [];
let wsy = [], wsy2 = [], wsy3 = [], wsy4 = [], wsy5 = [], wsy6 = [], wsy7 = [], wsy8 = [], wsy9 = [];
let wsw = [];
let wsh = [], wsh2 = [], wsh3 = [], wsh4 = [], wsh5 = [], wsh6 = [], wsh7 = [], wsh8 = [], wsh9 = [], wsh10 = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  background(0);
  noStroke();
  fill(225, 204, 0);

  let rectWidth = min(910, windowWidth); // Limit the width to 910
  let rectHeight = map(rectWidth, 0, 910, 0, 900); // Maintain the aspect ratio
  let x = (windowWidth - rectWidth) / 2;
  let y = (windowHeight - rectHeight) / 2;
  rect(x, y, rectWidth, rectHeight);

  // Map X to match resized canvas
  for (let i = 0; i < wsX.length; i++) {
    wsx[i] = map(wsX[i], 0, 910, 0, rectWidth) + x;
  }
  // Map Y to match resized canvas
  for (let i = 0; i < wsY.length; i++) {
    wsy[i] = map(wsY[i], 0, 900, 0, rectHeight) + y;
  }
  for (let i = 0; i < wsY2.length; i++) {
    wsy2[i] = map(wsY2[i], 0, 900, 0, rectHeight) + y;
  }
  for (let i = 0; i < wsY3.length; i++) {
    wsy3[i] = map(wsY3[i], 0, 900, 0, rectHeight) + y;
  }
  for (let i = 0; i < wsY4.length; i++) {
    wsy4[i] = map(wsY4[i], 0, 900, 0, rectHeight) + y;
  }
  for (let i = 0; i < wsY5.length; i++) {
    wsy5[i] = map(wsY5[i], 0, 900, 0, rectHeight) + y;
  }
  for (let i = 0; i < wsY6.length; i++) {
    wsy6[i] = map(wsY6[i], 0, 900, 0, rectHeight) + y;
  }
  for (let i = 0; i < wsY7.length; i++) {
    wsy7[i] = map(wsY7[i], 0, 900, 0, rectHeight) + y;
  }
  for (let i = 0; i < wsY8.length; i++) {
    wsy8[i] = map(wsY8[i], 0, 900, 0, rectHeight) + y;
  }
  for (let i = 0; i < wsY9.length; i++) {
    wsy9[i] = map(wsY9[i], 0, 900, 0, rectHeight) + y;
  }

  // Map width to match resized canvas
  for (let i = 0; i < wsW.length; i++) {
    wsw[i] = map(wsW[i], 0, 910, 0, rectWidth);
  }
  // Map height to match resized canvas
  for (let i = 0; i < wsH.length; i++) {
    wsh[i] = map(wsH[i], 0, 900, 0, rectHeight);
  }
  for (let i = 0; i < wsH2.length; i++) {
    wsh2[i] = map(wsH2[i], 0, 900, 0, rectHeight);
  }
  for (let i = 0; i < wsH3.length; i++) {
    wsh3[i] = map(wsH3[i], 0, 900, 0, rectHeight);
  }
  for (let i = 0; i < wsH4.length; i++) {
    wsh4[i] = map(wsH4[i], 0, 900, 0, rectHeight);
  }
  for (let i = 0; i < wsH5.length; i++) {
    wsh5[i] = map(wsH5[i], 0, 900, 0, rectHeight);
  }
  for (let i = 0; i < wsH6.length; i++) {
    wsh6[i] = map(wsH6[i], 0, 900, 0, rectHeight);
  }
  for (let i = 0; i < wsH7.length; i++) {
    wsh7[i] = map(wsH7[i], 0, 900, 0, rectHeight);
  }
  for (let i = 0; i < wsH8.length; i++) {
    wsh8[i] = map(wsH8[i], 0, 900, 0, rectHeight);
  }
  for (let i = 0; i < wsH9.length; i++) {
    wsh9[i] = map(wsH9[i], 0, 900, 0, rectHeight);
  }
  for (let i = 0; i < wsH10.length; i++) {
    wsh10[i] = map(wsH10[i], 0, 900, 0, rectHeight);
  }

  //lightgrey blocks
  fill("Ghostwhite");

  // rect(0, 0, 20, 20);
  // rect(0, 40, 20, 120);
  // rect(0, 180, 20, 160);
  // rect(0, 360, 50, 50);
  // rect(0, 430, 50, 80);
  // rect(0, 530, 50, 40);
  // rect(0, 590, 50, 40);
  // rect(0, 650, 50, 50);
  // rect(0, 720, 50, 40);
  // rect(0, 780, 50, 10);
  // rect(0, 810, 50, 30);
  // rect(0, 860, 50, 40);

  for (let i = 0; i < wsY.length; i++) {
    if (i < 3) {
      rect(wsx[0], wsy[i], wsw[0], wsh[i]);
    } else {
      rect(wsx[0], wsy[i], wsw[1], wsh[i]);
    }
  }

  // rect(40, 0, 10, 20);
  // rect(40, 40, 10, 120);
  // rect(40, 180, 10, 160);
  for (let i = 0; i < 3; i++) {
    rect(wsx[1], wsy[i], wsw[2], wsh[i]);
  }
  // rect(70, 0, 40, 20);    .
  // rect(70, 40, 40, 120);  .
  // rect(70, 180, 40, 20);  .
  // rect(70, 250, 40, 90);
  // rect(70, 360, 40, 50);  .
  // rect(70, 430, 40, 80);  .
  // rect(70, 530, 40, 40);  .
  // rect(70, 590, 40, 20);  .
  // rect(70, 680, 40, 80);  
  // rect(70, 780, 40, 60);  .
  // rect(70, 860, 150, 40); .
  for (let i = 0; i < wsY2.length; i++) {
    if (i < wsY2.length - 1) {
      rect(wsx[2], wsy2[i], wsw[3], wsh2[i]);
    } else {
      rect(wsx[2], wsy2[i], wsw[4], wsh2[i]);
    }
  }

  // rect(130, 0, 90, 20);
  // rect(130, 40, 20, 20);
  // rect(130, 100, 20, 60);
  // rect(130, 180, 90, 90);
  // rect(130, 320, 90, 20);
  // rect(130, 360, 20, 50);
  // rect(130, 430, 90, 40);
  // rect(130, 530, 90, 40);
  // rect(130, 590, 90, 70);
  // rect(130, 680, 90, 20);
  // rect(130, 780, 90, 60);
  for (let i = 0; i < wsY3.length; i++) {
    if (i == 1 || i == 2 || i == 5) {
      rect(wsx[3], wsy3[i], wsw[0], wsh3[i]);
    } else {
      rect(wsx[3], wsy3[i], wsw[5], wsh3[i]);
    }
  }

  // rect(200, 40, 20, 20);
  // rect(200, 100, 20, 60);
  // rect(200, 360, 20, 50);
  rect(wsx[4], wsy3[1], wsw[0], wsh3[1]);
  rect(wsx[4], wsy3[2], wsw[0], wsh3[2]);
  rect(wsx[4], wsy3[5], wsw[0], wsh3[5]);

  // rect(240, 0, 270, 20);
  // rect(240, 40, 20, 120);
  // rect(240, 180, 270, 160);
  // rect(240, 360, 140, 50);
  // rect(240, 430, 40, 80);
  // rect(240, 530, 270, 40);
  // rect(240, 590, 270, 70);
  // rect(240, 680, 270, 80);
  // rect(240, 780, 270, 60);
  // rect(240, 860, 270, 40);
  for (let i = 0; i < wsH4.length; i++) {
    if (i < 3) {
      if (i == 1) {
        rect(wsx[5], wsy2[i], wsw[0], wsh4[i]);
      } else {
        rect(wsx[5], wsy2[i], wsw[6], wsh4[i]);
      }
    } else {
      if (i == 3) {
        rect(wsx[5], wsy2[i + 1], wsw[7], wsh4[i]);
      } if (i == 4) {
        rect(wsx[5], wsy2[i + 1], wsw[3], wsh4[i]);
      } else {
        rect(wsx[5], wsy2[i + 1], wsw[6], wsh4[i]);
      }
    }
  }

  // rect(320, 40, 190, 120);
  rect(wsx[6], wsy[1], wsw[8], wsh[1]);
  // rect(340, 430, 40, 80);
  rect(wsx[7], wsy[4], wsw[3], wsh[4]);

  // rect(460, 430, 50, 80);
  // rect(460, 360, 50, 50);
  rect(wsx[8], wsy[4], wsw[1], wsh[4]);
  rect(wsx[8], wsy[3], wsw[1], wsh[3]);

  // rect(530, 0, 20, 20);
  // rect(530, 40, 20, 120);
  // rect(530, 180, 20, 160);
  // rect(530, 360, 220, 50);
  // rect(530, 430, 20, 80);
  // rect(530, 530, 20, 40);
  // rect(530, 590, 20, 70);
  // rect(530, 680, 20, 80);
  // rect(530, 790, 20, 50);
  // rect(530, 860, 20, 40);
  for (let i = 0; i < wsY4.length; i++) {
    if (i == 3) {
      rect(wsx[9], wsy4[i], wsw[9], wsh5[i]);
    } else {
      rect(wsx[9], wsy4[i], wsw[0], wsh5[i]);
    }
  }

  // rect(570, 0, 180, 20);
  // rect(570, 40, 180, 120);
  // rect(570, 180, 40, 160);
  // rect(570, 430, 40, 80);
  // rect(570, 530, 40, 40);
  // rect(570, 590, 180, 170);
  // rect(570, 780, 180, 60);
  // rect(570, 860, 180, 40);
  for (let i = 0; i < wsY5.length; i++) {
    if (i == 2 || i == 3 || i == 4) {
      rect(wsx[10], wsy5[i], wsw[3], wsh6[i]);
    } else {
      rect(wsx[10], wsy5[i], wsw[10], wsh6[i]);
    }
  }

  // rect(630, 430, 20, 80);
  // rect(630, 530, 20, 40);
  for (let i = 3; i < 5; i++) {
    rect(wsx[11], wsy5[i], wsw[0], wsh6[i]);
  }

  // rect(690, 180, 60, 160);
  rect(wsx[12], wsy[2], wsw[11], wsh[2]);

  // rect(710, 430, 40, 80);
  // rect(710, 530, 40, 40);
  for (let i = 3; i < 5; i++) {
    rect(wsx[13], wsy5[i], wsw[3], wsh6[i]);
  }

  // rect(770, 0, 20, 20);
  // rect(770, 40, 20, 120);
  // rect(770, 180, 20, 160);
  // rect(770, 360, 60, 50);
  // rect(770, 430, 100, 20);
  // rect(770, 490, 100, 20);
  // rect(770, 530, 100, 40);
  // rect(770, 590, 60, 20);
  // rect(770, 740, 100, 20);
  // rect(770, 780, 100, 60);
  // rect(770, 860, 100, 40);

  for (let i = 0; i < wsY6.length; i++) {
    if (i < 3) {
      rect(wsx[14], wsy6[i], wsw[0], wsh7[i]);
    } else if (i == 3 || i == 7) {
      rect(wsx[14], wsy6[i], wsw[11], wsh7[i]);
    } else {
      rect(wsx[14], wsy6[i], wsw[12], wsh7[i]);
    }
  }

  // rect(810, 0, 20, 20);
  // rect(810, 40, 20, 60);
  // rect(810, 140, 60, 20);
  // rect(810, 180, 20, 20);
  // rect(810, 260, 20, 80);

  for (let i = 0; i < wsY7.length; i++) {
    if (i == 2) {
      rect(wsx[15], wsy7[i], wsw[11], wsh8[i]);
    } else {
      rect(wsx[15], wsy7[i], wsw[0], wsh8[i]);
    }
  }

  // rect(850, 0, 20, 20);
  // rect(850, 40, 20, 60);
  // rect(850, 180, 20, 160);
  // rect(850, 360, 20, 50);
  // rect(850, 590, 20, 70);
  // rect(850, 680, 20, 40);
  for (let i = 0; i < wsY8.length; i++) {
    rect(wsx[16], wsy8[i], wsw[0], wsh9[i]);
  }

  // rect(890, 0, 20, 20);
  // rect(890, 40, 20, 120);
  // rect(890, 180, 20, 160);
  // rect(890, 360, 20, 150);
  // rect(890, 530, 20, 40);
  // rect(890, 590, 20, 170);
  // rect(890, 780, 20, 60);
  // rect(890, 860, 20, 40);
  for (let i = 0; i < wsY9.length; i++) {
    rect(wsx[17], wsy9[i], wsw[0], wsh10[i]);
  }
  /*
    //red blocks
    fill("FireBrick");
  
    rect(450, 510, 20, 20);
  
    rect(20, 160, 20, 20);
    rect(20, 270, 20, 20);
    rect(20, 340, 20, 20);
    rect(10, 410, 20, 20);
    rect(25, 790, 20, 20);
  
    rect(50, 0, 20, 20);
    rect(50, 90, 20, 20);
    rect(50, 460, 20, 20);
    rect(50, 570, 20, 20);
    rect(50, 630, 20, 20);
    rect(50, 660, 20, 20);
    rect(50, 700, 20, 20);
    rect(50, 840, 20, 20);
  
    rect(110, 270, 20, 20);
    rect(130, 340, 20, 20);
    rect(110, 410, 20, 20);
    rect(130, 460, 90, 50);
    rect(110, 660, 20, 20);
    rect(110, 725, 20, 15);
  
    rect(150, 40, 50, 60);
    rect(150, 120, 50, 40);
    rect(180, 760, 20, 20);
    rect(180, 840, 20, 20);
    rect(200, 160, 20, 20);
  
    rect(220, 0, 20, 20);
    rect(220, 270, 20, 20);
    rect(220, 570, 20, 20);
    rect(220, 700, 20, 20);
    rect(220, 790, 20, 15);
  
    rect(260, 40, 60, 100);
    rect(280, 410, 20, 20);
  
    rect(360, 340, 20, 20);
    rect(360, 410, 20, 20);
  
    rect(320, 510, 20, 20);
    rect(380, 510, 20, 20);
    rect(390, 570, 20, 20);
    rect(400, 660, 20, 20);
    rect(400, 760, 20, 20);
    rect(420, 840, 70, 50);
    rect(470, 760, 20, 20);
  
    rect(510, 0, 20, 20);
    rect(510, 120, 20, 20);
    rect(510, 210, 20, 30);
    rect(510, 340, 20, 20);
    rect(510, 450, 20, 20);
    rect(510, 550, 20, 20);
    rect(510, 590, 20, 20);
    rect(510, 740, 20, 20);
    rect(510, 820, 20, 20);
  
    rect(550, 60, 20, 20);
    rect(550, 160, 20, 20);
    rect(550, 220, 20, 15);
    rect(550, 490, 20, 20);
    rect(550, 700, 20, 20);
    rect(550, 760, 20, 20);
    rect(590, 840, 20, 20);
  
    rect(600, 340, 20, 20);
    rect(690, 340, 20, 20);
    rect(580, 410, 20, 20);
    rect(610, 510, 20, 20);
    rect(610, 550, 20, 20);
    rect(630, 760, 20, 20);
  
    rect(610, 230, 80, 80);
    rect(650, 430, 60, 80);
    rect(650, 530, 60, 15);
  
    rect(750, 220, 20, 20);
    rect(750, 410, 20, 20);
    rect(750, 510, 20, 20);
    rect(750, 640, 20, 15);
    rect(750, 760, 20, 20);
  
    rect(770, 680, 60, 40);
  
    rect(790, 0, 20, 20);
    rect(790, 90, 20, 20);
    rect(790, 200, 60, 60);
    rect(790, 340, 20, 20);
    rect(810, 840, 20, 20);
  
    rect(810, 160, 20, 20);
    rect(810, 450, 20, 40);
  
    rect(830, 410, 20, 20);
    rect(830, 570, 20, 20);
  
    rect(870, 0, 20, 20);
    rect(870, 40, 20, 20);
    rect(870, 80, 20, 20);
    rect(870, 300, 20, 20);
    rect(870, 410, 20, 20);
    rect(870, 510, 20, 20);
    rect(870, 640, 20, 15);
    rect(870, 720, 20, 20);
    rect(870, 760, 20, 20);
    rect(870, 840, 20, 20);
    rect(890, 570, 20, 20);
  
  
    //blue blocks
    fill("Navy");
    rect(20, 20, 20, 20);
    rect(20, 90, 20, 20);
    rect(20, 210, 20, 20);
    rect(20, 630, 20, 20);
    rect(20, 700, 20, 20);
  
    rect(50, 340, 20, 20);
    rect(50, 410, 20, 20);
    rect(50, 510, 20, 20);
    rect(50, 760, 20, 20);
  
    rect(70, 200, 20, 50);
    rect(70, 610, 20, 50);
  
    rect(90, 200, 20, 50);
    rect(90, 610, 20, 50);
  
    rect(110, 90, 20, 20);
    rect(110, 160, 20, 20);
    rect(110, 200, 20, 50);
    rect(110, 320, 20, 20);
    rect(110, 360, 20, 20);
    rect(110, 470, 20, 20);
    rect(110, 510, 20, 20);
    rect(110, 570, 20, 20);
    rect(110, 610, 20, 50);
    rect(110, 700, 20, 15);
    rect(110, 760, 20, 20);
    rect(110, 795, 20, 15);
    rect(110, 840, 20, 20);
  
    rect(140, 20, 20, 20);
  
    rect(220, 100, 20, 20);
    rect(220, 145, 20, 15);
    rect(220, 220, 20, 20);
    rect(220, 340, 20, 20);
    rect(220, 410, 20, 20);
    rect(220, 510, 20, 20);
    rect(220, 660, 20, 20);
    rect(220, 760, 20, 20);
    rect(220, 840, 20, 20);
  
    rect(280, 450, 20, 60);
  
    rect(285, 160, 20, 20);
  
    rect(300, 450, 20, 20);
    rect(300, 490, 20, 20);
  
    rect(320, 340, 20, 20);
    rect(320, 450, 20, 60);
  
    rect(340, 570, 20, 20);
  
    rect(360, 660, 20, 20);
    rect(360, 760, 20, 20);
    rect(360, 840, 20, 20);
  
    rect(400, 840, 20, 20);
  
    rect(435, 760, 20, 20);
  
    rect(455, 570, 20, 20);
  
    rect(460, 340, 20, 20);
    rect(460, 410, 20, 20);
  
    rect(465, 660, 20, 20);
  
    rect(510, 100, 20, 20);
    rect(510, 160, 20, 20);
    rect(510, 300, 20, 20);
    rect(510, 370, 20, 20);
    rect(510, 700, 20, 20);
    rect(510, 760, 20, 20);
  
    rect(550, 340, 20, 20);
    rect(550, 450, 20, 20);
    rect(550, 590, 20, 20);
    rect(550, 820, 20, 20);
  
    rect(590, 760, 20, 20);
  
    rect(610, 180, 80, 50);
    rect(610, 310, 80, 30);
  
    rect(630, 840, 20, 20);
  
    rect(650, 510, 20, 20);
    rect(650, 570, 20, 20);
  
    rect(670, 840, 20, 20);
    rect(670, 760, 20, 20);
  
    rect(690, 410, 20, 20);
    rect(690, 510, 20, 20);
    rect(690, 570, 20, 20);
  
    rect(750, 20, 20, 20);
    rect(750, 120, 20, 20);
    rect(750, 160, 20, 20);
    rect(750, 300, 20, 20);
    rect(750, 340, 20, 20);
    rect(750, 460, 20, 20);
    rect(750, 570, 20, 20);
    rect(750, 665, 20, 15);
    rect(750, 720, 20, 20);
    rect(750, 840, 20, 20);
  
    rect(770, 610, 60, 45);
  
    rect(790, 40, 20, 20);
    rect(790, 300, 20, 20);
  
    rect(810, 100, 60, 40);
    rect(810, 760, 20, 20);
  
    rect(830, 20, 20, 20);
    rect(830, 510, 20, 20);
    rect(830, 665, 20, 15);
  
    rect(850, 340, 20, 20);
  
    rect(870, 160, 20, 20);
    rect(870, 220, 20, 20);
    rect(870, 460, 20, 20);
    rect(870, 665, 20, 15);
  
    //grey blocks
    fill("lightgrey");
    rect(20, 40, 20, 20);
    rect(20, 320, 20, 20);
    rect(20, 760, 20, 20);
  
    rect(30, 410, 20, 20);
    rect(30, 510, 20, 20);
    rect(30, 570, 20, 20);
    rect(30, 840, 20, 20);
  
    rect(50, 40, 20, 20);
    rect(50, 140, 20, 20);
    rect(50, 180, 20, 20);
    rect(50, 250, 20, 20);
    rect(50, 490, 20, 20);
    rect(50, 610, 20, 20);
    rect(50, 640, 20, 20);
    rect(50, 720, 20, 20);
    rect(50, 780, 20, 20);
    rect(50, 820, 20, 20);
  
    rect(110, 60, 20, 30);
    rect(110, 290, 20, 30);
    rect(110, 340, 20, 20);
    rect(110, 380, 20, 30);
    rect(110, 710, 20, 20);
    rect(110, 780, 20, 20);
    rect(110, 820, 20, 20);
    
    rect(150, 100, 50, 20);
    rect(150, 160, 50, 20);
    rect(150, 285, 50, 20);
    rect(160, 380, 30, 20);
    rect(180, 570, 20, 20);
    rect(180, 660, 20, 20);
    rect(180, 720, 20, 20);
  
    rect(200, 20, 20, 20);
    rect(200, 340, 20, 20);
    rect(200, 410, 20, 20);
    rect(200, 760, 20, 20);
  
    rect(220, 40, 20, 20);
    rect(220, 180, 20, 20);
    rect(220, 300, 20, 20);
    rect(220, 430, 20, 20);
    rect(220, 460, 20, 20);
    rect(220, 490, 20, 20);
    rect(220, 610, 20, 20);
    rect(220, 710, 20, 20);
    rect(220, 750, 20, 20);
    rect(220, 820, 20, 20);
  
    rect(240, 160, 20, 20);
    rect(260, 140, 60, 20);
    rect(260, 140, 60, 20);
    
  */
}
