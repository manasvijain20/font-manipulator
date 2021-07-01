leftWrist_x = 0;
rightWrist_x = 0;
nose_x = 0;
nose_y = 0;
difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(590,420);
    canvas.position(660,195);

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses(results){
    if(results.length > 0 ){
        console.log(results)
        leftWrist_x = results[0].pose.leftWrist.x ;
        rightWrist_x = results[0].pose.rightWrist.x;
        difference = leftWrist_x - rightWrist_x - 100;
        console.log("wrist position" + leftWrist_x,rightWrist_x)
    }
}
function modelloaded(){
    console.log("model is loaded");
}
function draw(){
    background(221,160,221);
    let s = document.getElementById("text").value;
    text(s,0,300,)
    textSize(difference)
}
