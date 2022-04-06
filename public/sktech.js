// function setup() {
//     createCanvas(400, 400);
// }
  
// function draw() {
//     background(51);
//     ellipse(mouseX,mouseY,60,60);
// }

var socket;
function setup() {
    var cnv = createCanvas(600, 400);;
    cnv.style('display', 'block');
    background(51);
    socket = io.connect("http://localhost:3000"); // connecting the socket with the server 
    socket.on('mouse',newDrawing);
}
function newDrawing(data){
    noStroke();
    fill(255 , 0, 100);
    ellipse(data.x,data.y,36,36);
}
function mouseDragged(){ // this is an event listner funtion in javascript 
    console.log("Sending : " + mouseX + "," + mouseY);

    noStroke(); // if we write nostroke , fill , ellipse in the draw function then as we will hover the mouse the it will draw
    fill(255); // but here if we put it in mouseDragged even function then it will only draw it when we will press then mouse and do movement 
    ellipse(mouseX,mouseY,36,36);
    
    var data = { // creating an object data where we are saving the coordinates of mouse and will pass it to the server 
        x : mouseX,
        y : mouseY
    }
    
    socket.emit('mouse',data); // mouse is the name of message which we are emitting 

}
  
function draw() {

}

