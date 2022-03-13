noseX=0;
nosey=0;
function preload(){
    clown=loadImage('https://i.postimg.cc/gjn1j9kG/mustache.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

    function modelLoaded()
    {
        console.log('ModelLoaded');
    }

    function gotPoses(results)
    {
        if(results.length    > 0){
            console.log(results);
            noseX = results[0].pose.leftEye.x-60;
            nosey = results[0].pose.leftEye.y-60;
        }
        
    }
}

function draw(){
    image(video,0,0,300,300);
    fill(10,0,0);
    stroke(255,0,0);
    image(clown,noseX,nosey);
}
function take_snapshot(){
    save('mustache-.png');
}