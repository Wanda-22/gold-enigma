x="";
status1="";
Obj=[];


function setup() {
    canvas=createCanvas(600,500);
    canvas.center();
    po=ml5.objectDetector('cocossd',op);
    document.getElementById('s1').innerHTML="Status - Detecting Objects";
}
function op() {
    console.log('loaded');
    status1=true;
    po.detect(x,yu);
}
function preload() {
    x=loadImage("p2.jpg");
}
function draw() {
    image(x,0,0,600,500);
   
    if (status1!="") {
        for (var i = 0; i < Obj.length; i++) {
        document.getElementById('s1').innerHTML="Status -  Objects Detected";
        fill("#FF1493");
        noFill();
        stroke("#FF1493");
        textSize(20);
        p=floor(Obj[i].confidence*100);
        text(Obj[i].label + " " + p + "%", Obj[i].x + 10, Obj[i].y + 20);
        rect(Obj[i].x, Obj[i].y,Obj[i].width, Obj[i].height);
        }
    }
}
function yu(error,result) {
    if (error) {
        console.log(error);
    }
    console.log(result);
    Obj=result;
}