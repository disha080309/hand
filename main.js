//

prediction_1=" my name is ";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
    });
    speak();
}


classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/wJ3DNuKBx/model.json',modelloaded);
function modelloaded(){
    console.log('model have loaded')
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="The First Prediction Is "+prediction_1;
        var utterthis=new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterthis);
}