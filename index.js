/** 
 * 
 *      Author: Ananadakrishnan Sreenath
 * 
 *      Sorry, currently the speech-recognizer module seems to be working on Chrome browser only.
 *      So make sure that your website visitors are said to open your site on chrome only.
 *      Any improvements are welcomed. 
 *      There aren't any bugs found currently on this module, but if you found any or you think that any part of this module can be changed a new functionality could be added to this library, then feel free to contribute to this project at github:-
 *      "https://github.com/anandakrishnan18/speech-recognizer.git" 
 *   
 *      version: 1.0.0
 *      description: A library for easily transcribing speech. Convert speech to text in JavaScript.
 */

export function speechRegognition(output) {
    var output = document.getElementById(output);
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
    recognition.onstart = function() {
        console.log('starting...')
    };
    recognition.onspeechend = function() {
        console.log('transcribing...');
        recognition.stop();
        
    };
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        output.innerHTML = transcript;
        console.log('stopped...');
    };

    recognition.start();

};

