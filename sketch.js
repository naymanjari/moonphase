let table;
let timer = 0;
let previousSecond = 0;
let counted = false;
let path = 0;
let day = 0;
let phase = 2;
let rows;
let rowCount;
let waning = false;
let waxing = true;

function preload(){
  table = loadTable('assets/Delhi_Az_Eclipse.csv', 'csv', 'header');
}

function setup() {
  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');
  //'name' does not work to get header information
  //print(table.getColumn('name'));
  rows = table.getRow();
  rowCount = table.getRowCount();


  for (let r = 0; r < table.getRowCount(); r++) {
  
    //print('row ' + r + ' has the date ' + table.get(r, day));
    //print('row ' + r + ' has the phase ' + table.get(r, phase));
      
    }


  createCanvas(800, 800);
  //frameRate(1);
}

function draw() {
  background(0);
  print(path);
  if (millis() % 1000 > 500){
    if(!counted){
      timer++;
      path = table.get(timer, phase);
      counted = true;
      //path = path + 2.66;
      if (table.get(timer, 6) == 1) { //6 is NewMoon
        waxing = true;
        waning = false;
      }
      if (table.get(timer, 5) == 1) { //5 is FullMoon
        waning = true;
        waxing = false;
      }
      if (waning == true) {
      path = map(path, 0, 100, 630, 400);
      }
      if (waxing == true) {
      path = map(path, 0, 100, 160, 400);
      }
    }
  }else{ //if millies() % 1000 < 500
    if(counted == true){
      counted = false;
    }
  }
  if (timer >= rowCount){
    timer = 0;
  }

  //print(timer);
  //frameRate(1); //not working???
  fill(200);
  ellipse(width/2, height/2, width/3, height/3);
  for (var i = 0; i < timer; i++) { //2.66 is the 800/r  
    fill(0);
    ellipse(path, 0.0025 * ((path-400)*(path-400)) + 400, width/3, height/3);
  }
}



//function draw() {
  //moon(30);
//}

//function moon(phase){ //phase must be between 0 and 30
 // if (phase <= 15){
 //   phase = map(phase, 0, 15, 0, 300);
 // }else{
 //   phase = map(phase, 15, 30, 300, 0);
 // }
  
//  ellipse(width/2, height/2, phase, phase);
//}