Status = "";
TV_image = "";

function preload() {
    TV_image = loadImage("TV.jpg")
}

function setup() {
    canvas = createCanvas(640, 350);
    canvas.position(315, 200);
    object_Detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(TV_image, gotResults);
}

function gotResults(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
}

function draw() {
    image(TV_image, 0, 0, 640, 350);
}