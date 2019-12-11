let classifier;

// Label
let label = ' ';

// Teachable Machine model URL:
let soundModel = 'https://teachablemachine.withgoogle.com/models/j6EJL6m-/';

// let c = color

function preload() {
  // Load the model
  classifier = ml5.soundClassifier(soundModel + 'model.json');
}

function setup() {
  createCanvas(windowWidth, 100);
  // Start classifying
  // The sound model will continuously listen to the microphone
  classifier.classify(gotResult);
}

function draw() {
  background(0);
  // Draw the label in the canvas
  fill(255);
  textSize(24);
  textAlign(CENTER, CENTER);
  if (label == "Help") {
    label = "The public has called for help!"
    labelHelp = true;
  }
  else if (label == "No-Help") {
    label = " "
    labelNoHelp = false;
  }
  text(label, width / 2, height / 2);
}


// The model recognizing a sound will trigger this event
function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
}
