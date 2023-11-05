// For Audio Implementation 
// create arrays for white square X, Y, Width, and Height original values
let wsX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 40, 40, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 130, 130,
  130, 130, 130, 130, 130, 130, 130, 130, 130, 200, 200, 200, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240,
  320, 340, 460, 460, 530, 530, 530, 530, 530, 530, 530, 530, 530, 530, 570, 570, 570, 570, 570, 570, 570, 570,
  630, 630, 690, 710, 710, 770, 770, 770, 770, 770, 770, 770, 770, 770, 770, 770, 810, 810, 810, 810, 810, 850,
  850, 850, 850, 850, 850, 890, 890, 890, 890, 890, 890, 890, 890];
let wsY = [0, 40, 180, 360, 430, 530, 590, 650, 720, 780, 810, 860, 0, 40, 180, 0, 40, 180, 250, 360, 430, 530,
  590, 680, 780, 860, 0, 40, 100, 180, 320, 360, 430, 530, 590, 680, 780, 40, 100, 360, 0, 40, 180, 360, 430,
  530, 590, 680, 780, 860, 40, 430, 430, 360, 0, 40, 180, 360, 430, 530, 590, 680, 790, 860, 0, 40, 180, 430,
  530, 590, 780, 860, 430, 530, 180, 430, 530, 0, 40, 180, 360, 430, 490, 530, 590, 740, 780, 860, 0, 40, 140,
  180, 260, 0, 40, 180, 360, 590, 680, 0, 40, 180, 360, 530, 590, 780, 860];
let wsW = [20, 20, 20, 50, 50, 50, 50, 50, 50, 50, 50, 50, 10, 10, 10, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40,
  150, 90, 20, 20, 90, 90, 20, 90, 90, 90, 90, 90, 20, 20, 20, 270, 20, 270, 140, 40, 270, 270, 270, 270, 270,
  190, 40, 50, 50, 20, 20, 20, 220, 20, 20, 20, 20, 20, 20, 180, 180, 40, 40, 40, 180, 180, 180, 20, 20, 60,
  40, 40, 20, 20, 20, 60, 100, 100, 100, 60, 100, 100, 100, 20, 20, 60, 20, 20, 20, 20, 20, 20, 20, 20, 20,
  20, 20, 20, 20, 20, 20, 20];
let wsH = [20, 120, 160, 50, 80, 40, 40, 50, 40, 10, 30, 40, 20, 120, 160, 20, 120, 20, 90, 50, 80, 40, 20, 80,
  60, 40, 20, 20, 60, 90, 20, 50, 40, 40, 70, 20, 60, 20, 60, 50, 20, 120, 160, 50, 80, 40, 70, 80, 60, 40,
  120, 80, 80, 50, 20, 120, 160, 50, 80, 40, 70, 80, 50, 40, 20, 120, 160, 80, 40, 170, 60, 40, 80, 40, 160,
  80, 40, 20, 120, 160, 50, 20, 20, 40, 20, 20, 60, 40, 20, 60, 20, 20, 80, 20, 60, 160, 50, 70, 40, 20,
  120, 160, 150, 40, 170, 60, 40];

// create arrays to store white square X, Y, Width, and Height changing values based on window size
let wsx = [];
let wsy = [];
let wsw = [];
let wsh = [];

// create arrays for red square X, Y, Width, and Height original values
let rsX = [10, 20, 20, 20, 25, 50, 50, 50, 50, 50, 50, 50, 50, 110, 110, 110, 110, 130, 130, 150, 150, 180, 180, 200,
  220, 220, 220, 220, 220, 260, 280, 320, 360, 360, 380, 390, 400, 400, 420, 450, 470, 510, 510, 510, 510, 510, 510, 510,
  510, 510, 550, 550, 550, 550, 550, 550, 580, 590, 600, 610, 610, 610, 630, 650, 650, 690, 750, 750, 750, 750, 750, 770,
  790, 790, 790, 790, 810, 810, 810, 830, 830, 870, 870, 870, 870, 870, 870, 870, 870, 870, 870, 890];
let rsY = [410, 160, 270, 340, 790, 0, 90, 460, 570, 630, 660, 700, 840, 270, 410, 660, 725, 340, 460, 40, 120, 760, 840,
  160, 0, 270, 570, 700, 790, 40, 410, 510, 340, 410, 510, 570, 660, 760, 840, 510, 760, 0, 120, 210, 340, 450, 550, 590,
  740, 820, 60, 160, 220, 490, 700, 760, 410, 840, 340, 230, 510, 550, 760, 430, 530, 340, 220, 410, 510, 640, 760, 680,
  0, 90, 200, 340, 160, 450, 840, 410, 570, 0, 40, 80, 300, 410, 510, 640, 720, 760, 840, 570];
let rsW = [20, 20, 90, 50, 50, 60, 70, 20, 80, 60, 60, 60, 60, 20];
let rsH = [20, 15, 50, 60, 40, 100, 50, 30, 80, 80, 15, 40, 60, 40];

// create arrays to store red square X, Y, Width, and Height changing values based on window size
let rsx = [];
let rsy = [];
let rsw = [];
let rsh = [];

// create arrays for blue square X, Y, Width, and Height original values
let bsX = [20, 20, 20, 20, 20, 50, 50, 50, 50, 70, 70, 90, 90, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110,
  110, 110, 140, 220, 220, 220, 220, 220, 220, 220, 220, 220, 280, 285, 300, 300, 320, 320, 340, 360, 360, 360, 400,
  435, 455, 460, 460, 465, 510, 510, 510, 510, 510, 510, 550, 550, 550, 550, 590, 610, 610, 630, 650, 650, 670, 670,
  690, 690, 690, 750, 750, 750, 750, 750, 750, 750, 750, 750, 750, 770, 790, 790, 810, 810, 830, 830, 830, 850, 870,
  870, 870, 870];
let bsY = [20, 90, 210, 630, 700, 340, 410, 510, 760, 200, 610, 200, 610, 90, 160, 200, 320, 360, 470, 510, 570, 610,
  700, 760, 795, 840, 20, 100, 145, 220, 340, 410, 510, 660, 760, 840, 450, 160, 450, 490, 340, 450, 570, 660, 760,
  840, 840, 760, 570, 340, 410, 660, 100, 160, 300, 370, 700, 760, 340, 450, 590, 820, 760, 180, 310, 840, 510, 570,
  840, 760, 410, 510, 570, 20, 120, 160, 300, 340, 460, 570, 665, 720, 840, 610, 40, 300, 100, 760, 20, 510, 665,
  340, 160, 220, 460, 665];
let bsW = [20, 20, 20, 20, 80, 80, 60, 60];
let bsH = [20, 50, 15, 60, 50, 30, 45, 40];

// create arrays to store blue square X, Y, Width, and Height changing values based on window size
let bsx = [];
let bsy = [];
let bsw = [];
let bsh = [];

// create arrays for grey square X, Y, Width, and Height original values
let gsX = [20, 20, 20, 30, 30, 30, 30, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 110, 110, 110, 110, 110, 110, 110, 150,
  150, 150, 160, 180, 180, 180, 200, 200, 200, 200, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 240, 260, 260,
  300, 270, 280, 290, 300, 290, 270, 310, 340, 330, 380, 380, 400, 490, 490, 510, 510, 510, 510, 510, 510, 510, 510,
  510, 510, 530, 550, 550, 550, 550, 550, 550, 550, 550, 550, 550, 550, 550, 550, 550, 570, 570, 610, 610, 610, 640,
  650, 610, 670, 680, 660, 670, 720, 710, 750, 750, 750, 750, 750, 750, 750, 750, 790, 790, 790, 790, 790, 830, 830,
  830, 830, 830, 830, 830, 830, 830, 830, 850, 850, 850, 850, 870, 870, 870, 870, 870, 870, 870, 870, 870, 870, 870,
  890, 890, 420];
let gsY = [40, 320, 760, 410, 510, 570, 840, 40, 140, 180, 250, 490, 610, 640, 720, 780, 820, 60, 290, 340, 380, 710, 780,
  820, 100, 160, 285, 380, 570, 660, 720, 20, 340, 410, 760, 40, 180, 300, 430, 460, 490, 610, 710, 750, 820, 160, 140,
  340, 410, 510, 570, 660, 760, 840, 70, 20, 160, 840, 410, 450, 510, 20, 160, 40, 240, 360, 410, 510, 570, 610, 660,
  780, 840, 20, 40, 90, 140, 180, 240, 300, 410, 510, 570, 620, 660, 720, 780, 840, 20, 160, 410, 460, 570, 410, 540,
  460, 20, 160, 450, 510, 760, 840, 40, 280, 390, 550, 590, 650, 790, 860, 20, 60, 140, 180, 260, 40, 80, 180, 260,
  300, 340, 380, 590, 630, 720, 20, 160, 510, 570, 60, 140, 180, 240, 340, 390, 480, 550, 590, 655, 800, 20, 410, 890];
let gsW = [20, 20, 50, 30, 60, 40, 40, 80, 80, 60, 20, 20, 70];
let gsH = [20, 30, 20, 20, 20, 20, 40, 20, 40, 30, 35, 15, 10];

// create arrays to store grey square X, Y, Width, and Height changing values based on window size
let gsx = [];
let gsy = [];
let gsw = [];
let gsh = [];

let song;
let fft;
let lerpAmount;

function preload() {
  song = loadSound("audio/Jack Black - Peaches midi.wav")
}

// set canvas as window size
function setup() {
  createCanvas(windowWidth, windowHeight);

  fft = new p5.FFT(0.8, 16);
  song.connect(fft);
  amp = new p5.Amplitude();
  rectMode(CENTER);
}

// resize canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // background behind artwork
  background(0);

  fill(255); // Set text color to white
  text("Tap anywhere to start or pause the music", 10, 20);

  // artwork background (yellow)
  
  fill(225, 204, 0);
  let rectWidth = min(910, windowWidth);                // limit the width to 910
  let rectHeight = map(rectWidth, 0, 910, 0, 900);      // maintain the aspect ratio
  let x = (windowWidth - rectWidth) / 2;                // x coordinate offset
  let y = (windowHeight - rectHeight) / 2;              // y coordinate offset
  rect(x + rectWidth / 2, y + rectHeight / 2, rectWidth, rectHeight);                    // create yellow rect background

  // map X to match resized canvas and store the resized values to wsx, rsx, bsx, and gsx
  for (let i = 0; i < wsX.length; i++) {
    wsx[i] = map(wsX[i], 0, 910, 0, rectWidth) + x;
  }
  for (let i = 0; i < rsX.length; i++) {
    rsx[i] = map(rsX[i], 0, 910, 0, rectWidth) + x;
  }
  for (let i = 0; i < bsX.length; i++) {
    bsx[i] = map(bsX[i], 0, 910, 0, rectWidth) + x;
  }
  for (let i = 0; i < gsX.length; i++) {
    gsx[i] = map(gsX[i], 0, 910, 0, rectWidth) + x;
  }

  // map Y to match resized canvas and store the resized values to wsy, rsy, bsy, and gsy
  for (let i = 0; i < wsY.length; i++) {
    wsy[i] = map(wsY[i], 0, 900, 0, rectHeight) + y;
  }
  for (let i = 0; i < rsY.length; i++) {
    rsy[i] = map(rsY[i], 0, 900, 0, rectHeight) + y;
  }
  for (let i = 0; i < bsY.length; i++) {
    bsy[i] = map(bsY[i], 0, 900, 0, rectHeight) + y;
  }
  for (let i = 0; i < gsY.length; i++) {
    gsy[i] = map(gsY[i], 0, 900, 0, rectHeight) + y;
  }

  // map width to match resized canvas and store the resized values to wsw, rsw, bsw, and gsw
  for (let i = 0; i < wsW.length; i++) {
    wsw[i] = map(wsW[i], 0, 910, 0, rectWidth);
  }
  for (let i = 0; i < rsW.length; i++) {
    rsw[i] = map(rsW[i], 0, 910, 0, rectWidth);
  }
  for (let i = 0; i < bsW.length; i++) {
    bsw[i] = map(bsW[i], 0, 910, 0, rectWidth);
  }
  for (let i = 0; i < gsW.length; i++) {
    gsw[i] = map(gsW[i], 0, 910, 0, rectWidth);
  }

  // map height to match resized canvas and store the resized values to wsh, rsh, bsh, and gsh
  for (let i = 0; i < wsH.length; i++) {
    wsh[i] = map(wsH[i], 0, 900, 0, rectHeight);
  }
  for (let i = 0; i < rsH.length; i++) {
    rsh[i] = map(rsH[i], 0, 900, 0, rectHeight);
  }
  for (let i = 0; i < bsH.length; i++) {
    bsh[i] = map(bsH[i], 0, 900, 0, rectHeight);
  }
  for (let i = 0; i < gsH.length; i++) {
    gsh[i] = map(gsH[i], 0, 900, 0, rectHeight);
  }

  let spectrum = fft.analyze();


    // create lightgrey blocks using the values from wsx[i], wsy[i], wsw[i], wsh[i]
    fill("lightgrey");
    for (let i = 0; i < wsX.length; i++) {
      rect(wsx[i] + (wsw[i] / 2), wsy[i] + (wsh[i] / 2), wsw[i], wsh[i]);
    }

    for (i = 0; i < spectrum.length; i += 20) {
      let amp = spectrum[i];
      let scale = map(amp, 0, 256, 0, 1.2);
    // create red blocks using the values from rsx[i], rsy[i], rsw[i], rsh[i]
    // set IF - conditions when the width and height are not 20 x 20
    fill("FireBrick");
    for (let i = 0; i < rsX.length; i++) {
      if (i == 16 || i == 28 || i == 52 || i == 69 || i == 87) {
        rect(rsx[i] + (rsw[1] / 2), rsy[i] + (rsh[1] / 2), rsw[1]*scale, rsh[1]*scale);
      } else if (i == 18) {
        rect(rsx[i] + (rsw[2] / 2), rsy[i] + (rsh[2] / 2), rsw[2]*scale, rsh[2]*scale);
      } else if (i == 19) {
        rect(rsx[i] + (rsw[3] / 2), rsy[i] + (rsh[3] / 2), rsw[3]*scale, rsh[3]*scale);
      } else if (i == 20) {
        rect(rsx[i] + (rsw[4] / 2), rsy[i] + (rsh[4] / 2), rsw[4]*scale, rsh[4]*scale);
      } else if (i == 29) {
        rect(rsx[i] + (rsw[5] / 2), rsy[i] + (rsh[5] / 2), rsw[5]*scale, rsh[5]*scale);
      } else if (i == 38) {
        rect(rsx[i] + (rsw[6] / 2), rsy[i] + (rsh[6] / 2), rsw[6]*scale, rsh[6]*scale);
      } else if (i == 43) {
        rect(rsx[i] + (rsw[7] / 2), rsy[i] + (rsh[7] / 2), rsw[7]*scale, rsh[7]*scale);
      } else if (i == 59) {
        rect(rsx[i] + (rsw[8] / 2), rsy[i] + (rsh[8] / 2), rsw[8]*scale, rsh[8]*scale);
      } else if (i == 63) {
        rect(rsx[i] + (rsw[9] / 2), rsy[i] + (rsh[9] / 2), rsw[9]*scale, rsh[9]*scale);
      } else if (i == 64) {
        rect(rsx[i] + (rsw[10] / 2), rsy[i] + (rsh[10] / 2), rsw[10]*scale, rsh[10]*scale);
      } else if (i == 71) {
        rect(rsx[i] + (rsw[11] / 2), rsy[i] + (rsh[11] / 2), rsw[11]*scale, rsh[11]*scale);
      } else if (i == 74) {
        rect(rsx[i] + (rsw[12] / 2), rsy[i] + (rsh[12] / 2), rsw[12]*scale, rsh[12]*scale);
      } else if (i == 77) {
        rect(rsx[i] + (rsw[13] / 2), rsy[i] + (rsh[13] / 2), rsw[13]*scale, rsh[13]*scale);
      } else {
        rect(rsx[i] + (rsw[0] / 2), rsy[i] + (rsh[0] / 2), rsw[0]*scale, rsh[0]*scale);
      }
    }
  }

    for (i = 0; i < spectrum.length; i += 3) {
      let amp = spectrum[i];
      let scale = map(amp, 0, 256, 0, 1.2);
    // create blue blocks using the values from bsx[i], bsy[i], bsw[i], bsh[i]
    // set IF - conditions when the width and height are not 20 x 20
    fill("Navy");
    for (let i = 0; i < bsX.length; i++) {
      if (i >= 9 && i <= 12 || i == 15 || i == 21) {
        rect(bsx[i] + (bsw[1] / 2), bsy[i] + (bsh[1] / 2), bsw[1]*scale, bsh[1]*scale);
      } else if (i == 22 || i == 24 || i == 28 || i == 80 || i == 90 || i == 95) {
        rect(bsx[i] + (bsw[2] / 2), bsy[i] + (bsh[2] / 2), bsw[2]*scale, bsh[2]*scale);
      } else if (i == 36 || i == 41) {
        rect(bsx[i] + (bsw[3] / 2), bsy[i] + (bsh[3] / 2), bsw[3]*scale, bsh[3]*scale);
      } else if (i == 63) {
        rect(bsx[i] + (bsw[4] / 2), bsy[i] + (bsh[4] / 2), bsw[4]*scale, bsh[4]*scale);
      } else if (i == 64) {
        rect(bsx[i] + (bsw[5] / 2), bsy[i] + (bsh[5] / 2), bsw[5]*scale, bsh[5]*scale);
      } else if (i == 83) {
        rect(bsx[i] + (bsw[6] / 2), bsy[i] + (bsh[6] / 2), bsw[6]*scale, bsh[6]*scale);
      } else if (i == 86) {
        rect(bsx[i] + (bsw[7] / 2), bsy[i] + (bsh[7] / 2), bsw[7]*scale, bsh[7]*scale);
      } else {
        rect(bsx[i] + (bsw[0] / 2), bsy[i] + (bsh[0] / 2), bsw[0]*scale, bsh[0]*scale);
      }
    }
  }

    for (i = 0; i < spectrum.length; i += 1) {
      let amp = spectrum[i];
      let scale = map(amp, 0, 256, 0, 1.2);
      
    // create grey blocks using the values from gsx[i], gsy[i], gsw[i], gsh[i]
    // set IF - conditions when the width and height are not 20 x 20
    fill("grey");
    for (let i = 0; i < gsX.length; i++) {
      if (i == 17 || i == 18 || i == 20) {
        rect(gsx[i] + (gsw[1] / 2), gsy[i] + (gsh[1] / 2), gsw[1]*scale, gsh[1]*scale);
      } else if (i >= 24 && i <= 26 || i == 60) {
        rect(gsx[i] + (gsw[2] / 2), gsy[i] + (gsh[2] / 2), gsw[2]*scale, gsh[2]*scale);
      } else if (i == 27 || i == 96 || i == 97) {
        rect(gsx[i] + (gsw[3] / 2), gsy[i] + (gsh[3] / 2), gsw[3]*scale, gsh[3]*scale);
      } else if (i == 46) {
        rect(gsx[i] + (gsw[4] / 2), gsy[i] + (gsh[4] / 2), gsw[4]*scale, gsh[4]*scale);
      } else if (i == 48) {
        rect(gsx[i] + (gsw[5] / 2), gsy[i] + (gsh[5] / 2), gsw[5]*scale, gsh[5]*scale);
      } else if (i == 54 || i == 98) {
        rect(gsx[i] + (gsw[6] / 2), gsy[i] + (gsh[6] / 2), gsw[6]*scale, gsh[6]*scale);
      } else if (i == 58) {
        rect(gsx[i] + (gsw[7] / 2), gsy[i] + (gsh[7] / 2), gsw[7]*scale, gsh[7]*scale);
      } else if (i == 59) {
        rect(gsx[i] + (gsw[8] / 2), gsy[i] + (gsh[8] / 2), gsw[8]*scale, gsh[8]*scale);
      } else if (i == 94) {
        rect(gsx[i] + (gsw[9] / 2), gsy[i] + (gsh[9] / 2), gsw[9]*scale, gsh[9]*scale);
      } else if (i == 123) {
        rect(gsx[i] + (gsw[10] / 2), gsy[i] + (gsh[10] / 2), gsw[10]*scale, gsh[10]*scale);
      } else if (i == 138) {
        rect(gsx[i] + (gsw[11] / 2), gsy[i] + (gsh[11] / 2), gsw[11]*scale, gsh[11]*scale);
      } else if (i == 142) {
        rect(gsx[i] + (gsw[12] / 2), gsy[i] + (gsh[12] / 2), gsw[12]*scale, gsh[12]*scale);
      } else {
        rect(gsx[i] + (gsw[0] / 2), gsy[i] + (gsh[0] / 2), gsw[0]*scale, gsh[0]*scale);
      }

    }
  }
}

  function mousePressed() {
    if (song.isPlaying()) {
      // .isPlaying() returns a boolean
      song.stop();
      background(255, 0, 0);
    } else {
      song.play();
      background(0, 255, 0);
    }
  }