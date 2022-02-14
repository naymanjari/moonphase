let table;

function preload(){
  table = loadTable('test.csv', 'csv', 'header');
}

//var day = table.getColumn(0);

function setup() {
  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');
  //'name' does not work to get header information
  print(table.getColumn('name'));
  const day = 0;
  const phase = 2;
  let rows = table.getRow();


  for (let r = 0; r < table.getRowCount(); r++) {
    //for (let day = table.getColumn(0)) {
    //for (let c = 0; c < table.getColumnCount(); c++) {
  
    print('row ' + r + ' has the date ' + table.get(r, day));
    print('row ' + r + ' has the phase ' + table.get(r, phase));
    
  
      
    }


  createCanvas(800, 800);
  background(0);
}

function draw() {
  fill(200);
  ellipse(width/2, height/2, width/2, height/2);
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