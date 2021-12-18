x = 0;
y = 0;


draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
  
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="The speech has been recognised as"+'apples drawn';
    if(content=="apple") {
        x=Math.floor(Math.random()*700);
        y=Math.floor(Math.random()*400);
        Image(apple,x,y,50,50)
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";