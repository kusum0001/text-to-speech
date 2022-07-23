// let button = document.querySelector('.btn');
// button.onclick = () =>{
//     let text=document.querySelector('#textarea').value;

//     let speech = new SpeechSynthesisUtterance();
//     speech.lang = 'en-US';
//     speech.text = text;
//     speech.rate = 1;
//     speech.volume = 1;
//     speech.pitch = 1;
//     speechSynthesis.speak(speech); //speak the speech


// }
const textarea = document.querySelector('#textarea');
let button = document.querySelector('.btn');
voiceList = document.querySelector('.option-value');
let synth= speechSynthesis;

function voices(){
 for(let voice of synth.getVoices()){
       //console.log(voice);
       let selected = voice.name === "Google US English" ? "selected" : "";
       let option =  `<option value="${voice.name}" ${selected} >  ${voice.name} (${voice.lang}) </option>`;
       voiceList.insertAdjacentHTML("beforeend",option);
        
 }                                     
}    
synth.addEventListener("voiceschanged",voices);


button.onclick = () =>{
    let text=document.querySelector('#textarea').value;

    let speech = new SpeechSynthesisUtterance();
    for(let voice of synth.getVoices()){
     if(voice.name === voiceList.value){
        speech.voice = voice;
        speech.text = text;
        speech.volume = 1;
        speechSynthesis.speak(speech); //speak the speech
        
     }
    }

}
//SpeechSynthesisUtterance represents a speech request
//speechSynthesis is the controller interface for the speech service
 //getVoices()method of speech synthesis returns a list  of voice objects of the user current devices
//speechSynthesis.getVoices(); try it in console ,shows all the current lang used in your comp 
//voiceList.value it return the selected option value