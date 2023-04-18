const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resultElement = document.getElementById('result');

const recognition = new webkitSpeechRecognition();

recognition.lang = window.navigator.language;
recognition.interimResults = true;

startButton.addEventListener('click', () => 
{ recognition.start(); 
});

stopButton.addEventListener('click', () => 
{ recognition.stop(); 
});

recognition.addEventListener('result', (event) => {
    const result = event.results[event.results.length - 1][0].transcript;
    resultElement.textContent = result;
});