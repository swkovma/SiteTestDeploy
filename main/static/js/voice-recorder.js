let startButton1 = document.querySelector("#start-1");
let startButton2 = document.querySelector("#start-2");
let startButton3 = document.querySelector("#start-3");
let startButton4 = document.querySelector("#start-4");
let startButton5 = document.querySelector("#start-5");
let startButton6 = document.querySelector("#start-6");
let startButton7 = document.querySelector("#start-7");
let startButton8 = document.querySelector("#start-8");
let startButton9 = document.querySelector("#start-9");
let startButton10 = document.querySelector("#start-10");

let finalButton1 = document.querySelector("#stop-1");
let finalButton2 = document.querySelector("#stop-2");
let finalButton3 = document.querySelector("#stop-3");
let finalButton4 = document.querySelector("#stop-4");
let finalButton5 = document.querySelector("#stop-5");
let finalButton6 = document.querySelector("#stop-6");
let finalButton7 = document.querySelector("#stop-7");
let finalButton8 = document.querySelector("#stop-8");
let finalButton9 = document.querySelector("#stop-9");
let finalButton10 = document.querySelector("#stop-10");

let loadMessage1 = document.querySelector("#load-message-1");
let loadMessage2 = document.querySelector("#load-message-2");
let loadMessage3 = document.querySelector("#load-message-3");
let loadMessage4 = document.querySelector("#load-message-4");
let loadMessage5 = document.querySelector("#load-message-5");
let loadMessage6 = document.querySelector("#load-message-6");
let loadMessage7 = document.querySelector("#load-message-7");
let loadMessage8 = document.querySelector("#load-message-8");
let loadMessage9 = document.querySelector("#load-message-9");
let loadMessage10 = document.querySelector("#load-message-10");

let upgradeAnswerButton1 = document.querySelector("#upgrade-button-1");
let upgradeAnswerButton2 = document.querySelector("#upgrade-button-2");
let upgradeAnswerButton3 = document.querySelector("#upgrade-button-3");
let upgradeAnswerButton4 = document.querySelector("#upgrade-button-4");
let upgradeAnswerButton5 = document.querySelector("#upgrade-button-5");
let upgradeAnswerButton6 = document.querySelector("#upgrade-button-6");
let upgradeAnswerButton7 = document.querySelector("#upgrade-button-7");
let upgradeAnswerButton8 = document.querySelector("#upgrade-button-8");
let upgradeAnswerButton9 = document.querySelector("#upgrade-button-9");
let upgradeAnswerButton10 = document.querySelector("#upgrade-button-10");

let loadUpgradeAnswer1 = document.querySelector("#load-upgrade-message-1");
let loadUpgradeAnswer2 = document.querySelector("#load-upgrade-message-2");
let loadUpgradeAnswer3 = document.querySelector("#load-upgrade-message-3");
let loadUpgradeAnswer4 = document.querySelector("#load-upgrade-message-4");
let loadUpgradeAnswer5 = document.querySelector("#load-upgrade-message-5");
let loadUpgradeAnswer6 = document.querySelector("#load-upgrade-message-6");
let loadUpgradeAnswer7 = document.querySelector("#load-upgrade-message-7");
let loadUpgradeAnswer8 = document.querySelector("#load-upgrade-message-8");
let loadUpgradeAnswer9 = document.querySelector("#load-upgrade-message-9");
let loadUpgradeAnswer10 = document.querySelector("#load-upgrade-message-10");

let question1 = document.querySelector("#question-1");
let question2 = document.querySelector("#question-2");
let question3 = document.querySelector("#question-3");
let question4 = document.querySelector("#question-4");
let question5 = document.querySelector("#question-5");
let question6 = document.querySelector("#question-6");
let question7 = document.querySelector("#question-7");
let question8 = document.querySelector("#question-8");
let question9 = document.querySelector("#question-9");
let question10 = document.querySelector("#question-10");


async function sendVoice(form, containerDiv, resultParagraph, loadMessage, upgradeAnswerButton) {
    const response = await fetch("../voice", {
        method: 'POST',
        body: form});
    const json_response = await response.text();

    let resultText = document.createTextNode(json_response);
    resultParagraph.appendChild(resultText);
    loadMessage.classList.add("invisible");
    containerDiv.classList.remove("invisible");
    upgradeAnswerButton.classList.remove("invisible");
};


startButton1.addEventListener("click", function(){
    navigator.mediaDevices.getUserMedia({ audio: true})
    .then(stream => {
        let mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();
        startButton1.classList.add("invisible");
        finalButton1.classList.remove("invisible");

        let audioChunks = [];

        mediaRecorder.addEventListener("dataavailable",function(event) {
            audioChunks.push(event.data);
        });

        finalButton1.addEventListener('click', function(){
            mediaRecorder.stop();
            finalButton1.classList.add("invisible");
            loadMessage1.classList.remove("invisible");
        });

        mediaRecorder.addEventListener("stop", function() {
            let audioBlob = new Blob(audioChunks, {
                type: 'audio/wav'
            });

        let fd = new FormData();
        let containerDiv = document.querySelector("#answer-1");
        let resultParagraph = document.querySelector("#answer-content-1");

        fd.append('voice', audioBlob);
        sendVoice(fd, containerDiv, resultParagraph, loadMessage1, upgradeAnswerButton1);
        audioChunks = [];
        });
    });
});


startButton2.addEventListener("click", function(){
    navigator.mediaDevices.getUserMedia({ audio: true})
    .then(stream => {
        let mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();
        startButton2.classList.add("invisible");
        finalButton2.classList.remove("invisible");

        let audioChunks = [];

        mediaRecorder.addEventListener("dataavailable",function(event) {
            audioChunks.push(event.data);
        });

        finalButton2.addEventListener('click', function(){
            mediaRecorder.stop();
            finalButton2.classList.add("invisible");
            loadMessage2.classList.remove("invisible");
        });

        mediaRecorder.addEventListener("stop", function() {
            let audioBlob = new Blob(audioChunks, {
                type: 'audio/wav'
            });

        let fd = new FormData();
        let containerDiv = document.querySelector("#answer-2");
        let resultParagraph = document.querySelector("#answer-content-2");

        fd.append('voice', audioBlob);
        sendVoice(fd, containerDiv, resultParagraph, loadMessage2, upgradeAnswerButton2);
        audioChunks = [];
        });
    });
});


startButton3.addEventListener("click", function(){
    navigator.mediaDevices.getUserMedia({ audio: true})
    .then(stream => {
        let mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();
        startButton3.classList.add("invisible");
        finalButton3.classList.remove("invisible");

        let audioChunks = [];

        mediaRecorder.addEventListener("dataavailable",function(event) {
            audioChunks.push(event.data);
        });

        finalButton3.addEventListener('click', function(){
            mediaRecorder.stop();
            finalButton3.classList.add("invisible");
            loadMessage3.classList.remove("invisible");
        });

        mediaRecorder.addEventListener("stop", function() {
            let audioBlob = new Blob(audioChunks, {
                type: 'audio/wav'
            });

        let fd = new FormData();
        let containerDiv = document.querySelector("#answer-3");
        let resultParagraph = document.querySelector("#answer-content-3");

        fd.append('voice', audioBlob);
        sendVoice(fd, containerDiv, resultParagraph, loadMessage3, upgradeAnswerButton3);
        audioChunks = [];
        });
    });
});


startButton4.addEventListener("click", function(){
    navigator.mediaDevices.getUserMedia({ audio: true})
    .then(stream => {
        let mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();
        startButton4.classList.add("invisible");
        finalButton4.classList.remove("invisible");

        let audioChunks = [];

        mediaRecorder.addEventListener("dataavailable",function(event) {
            audioChunks.push(event.data);
        });

        finalButton4.addEventListener('click', function(){
            mediaRecorder.stop();
            finalButton4.classList.add("invisible");
            loadMessage4.classList.remove("invisible");
        });

        mediaRecorder.addEventListener("stop", function() {
            let audioBlob = new Blob(audioChunks, {
                type: 'audio/wav'
            });

        let fd = new FormData();
        let containerDiv = document.querySelector("#answer-4");
        let resultParagraph = document.querySelector("#answer-content-4");

        fd.append('voice', audioBlob);
        sendVoice(fd, containerDiv, resultParagraph, loadMessage4, upgradeAnswerButton4);
        audioChunks = [];
        });
    });
});


startButton5.addEventListener("click", function(){
    navigator.mediaDevices.getUserMedia({ audio: true})
    .then(stream => {
        let mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();
        startButton5.classList.add("invisible");
        finalButton5.classList.remove("invisible");

        let audioChunks = [];

        mediaRecorder.addEventListener("dataavailable",function(event) {
            audioChunks.push(event.data);
        });

        finalButton5.addEventListener('click', function(){
            mediaRecorder.stop();
            finalButton5.classList.add("invisible");
            loadMessage5.classList.remove("invisible");
        });

        mediaRecorder.addEventListener("stop", function() {
            let audioBlob = new Blob(audioChunks, {
                type: 'audio/wav'
            });

        let fd = new FormData();
        let containerDiv = document.querySelector("#answer-5");
        let resultParagraph = document.querySelector("#answer-content-5");

        fd.append('voice', audioBlob);
        sendVoice(fd, containerDiv, resultParagraph, loadMessage5, upgradeAnswerButton5);
        audioChunks = [];
        });
    });
});


startButton6.addEventListener("click", function(){
    navigator.mediaDevices.getUserMedia({ audio: true})
    .then(stream => {
        let mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();
        startButton6.classList.add("invisible");
        finalButton6.classList.remove("invisible");

        let audioChunks = [];

        mediaRecorder.addEventListener("dataavailable",function(event) {
            audioChunks.push(event.data);
        });

        finalButton6.addEventListener('click', function(){
            mediaRecorder.stop();
            finalButton6.classList.add("invisible");
            loadMessage6.classList.remove("invisible");
        });

        mediaRecorder.addEventListener("stop", function() {
            let audioBlob = new Blob(audioChunks, {
                type: 'audio/wav'
            });

        let fd = new FormData();
        let containerDiv = document.querySelector("#answer-6");
        let resultParagraph = document.querySelector("#answer-content-6");

        fd.append('voice', audioBlob);
        sendVoice(fd, containerDiv, resultParagraph, loadMessage6, upgradeAnswerButton6);
        audioChunks = [];
        });
    });
});


startButton7.addEventListener("click", function(){
    navigator.mediaDevices.getUserMedia({ audio: true})
    .then(stream => {
        let mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();
        startButton7.classList.add("invisible");
        finalButton7.classList.remove("invisible");

        let audioChunks = [];

        mediaRecorder.addEventListener("dataavailable",function(event) {
            audioChunks.push(event.data);
        });

        finalButton7.addEventListener('click', function(){
            mediaRecorder.stop();
            finalButton7.classList.add("invisible");
            loadMessage7.classList.remove("invisible");
        });

        mediaRecorder.addEventListener("stop", function() {
            let audioBlob = new Blob(audioChunks, {
                type: 'audio/wav'
            });

        let fd = new FormData();
        let containerDiv = document.querySelector("#answer-7");
        let resultParagraph = document.querySelector("#answer-content-7");

        fd.append('voice', audioBlob);
        sendVoice(fd, containerDiv, resultParagraph, loadMessage7, upgradeAnswerButton7);
        audioChunks = [];
        });
    });
});


startButton8.addEventListener("click", function(){
    navigator.mediaDevices.getUserMedia({ audio: true})
    .then(stream => {
        let mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();
        startButton8.classList.add("invisible");
        finalButton8.classList.remove("invisible");

        let audioChunks = [];

        mediaRecorder.addEventListener("dataavailable",function(event) {
            audioChunks.push(event.data);
        });

        finalButton8.addEventListener('click', function(){
            mediaRecorder.stop();
            finalButton8.classList.add("invisible");
            loadMessage8.classList.remove("invisible");
        });

        mediaRecorder.addEventListener("stop", function() {
            let audioBlob = new Blob(audioChunks, {
                type: 'audio/wav'
            });

        let fd = new FormData();
        let containerDiv = document.querySelector("#answer-8");
        let resultParagraph = document.querySelector("#answer-content-8");

        fd.append('voice', audioBlob);
        sendVoice(fd, containerDiv, resultParagraph, loadMessage8, upgradeAnswerButton8);
        audioChunks = [];
        });
    });
});


startButton9.addEventListener("click", function(){
    navigator.mediaDevices.getUserMedia({ audio: true})
    .then(stream => {
        let mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();
        startButton9.classList.add("invisible");
        finalButton9.classList.remove("invisible");

        let audioChunks = [];

        mediaRecorder.addEventListener("dataavailable",function(event) {
            audioChunks.push(event.data);
        });

        finalButton9.addEventListener('click', function(){
            mediaRecorder.stop();
            finalButton9.classList.add("invisible");
            loadMessage9.classList.remove("invisible");
        });

        mediaRecorder.addEventListener("stop", function() {
            let audioBlob = new Blob(audioChunks, {
                type: 'audio/wav'
            });

        let fd = new FormData();
        let containerDiv = document.querySelector("#answer-9");
        let resultParagraph = document.querySelector("#answer-content-9");

        fd.append('voice', audioBlob);
        sendVoice(fd, containerDiv, resultParagraph, loadMessage9, upgradeAnswerButton9);
        audioChunks = [];
        });
    });
});


startButton10.addEventListener("click", function(){
    navigator.mediaDevices.getUserMedia({ audio: true})
    .then(stream => {
        let mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();
        startButton10.classList.add("invisible");
        finalButton10.classList.remove("invisible");

        let audioChunks = [];

        mediaRecorder.addEventListener("dataavailable",function(event) {
            audioChunks.push(event.data);
        });

        finalButton10.addEventListener('click', function(){
            mediaRecorder.stop();
            finalButton10.classList.add("invisible");
            loadMessage10.classList.remove("invisible");
        });

        mediaRecorder.addEventListener("stop", function() {
            let audioBlob = new Blob(audioChunks, {
                type: 'audio/wav'
            });

        let fd = new FormData();
        let containerDiv = document.querySelector("#answer-10");
        let resultParagraph = document.querySelector("#answer-content-10");

        fd.append('voice', audioBlob);
        sendVoice(fd, containerDiv, resultParagraph, loadMessage10, upgradeAnswerButton10);
        audioChunks = [];
        });
    });
});


async function sendAnswer(form, containerDiv, resultParagraph, loadUpgradeAnswer, loadMessage) {
    const response = await fetch("../upgrade-answer", {
        method: "POST",
        body: form});
    const json_response = await response.text();

    let resultText = document.createTextNode(json_response);
    resultParagraph.appendChild(resultText);
    containerDiv.appendChild(resultParagraph);
    loadUpgradeAnswer.classList.add("invisible");
    loadMessage.classList.add("invisible");
    containerDiv.classList.remove("invisible");
    };


upgradeAnswerButton1.addEventListener("click", function() {
    upgradeAnswerButton1.classList.add("invisible");
    loadUpgradeAnswer1.classList.remove("invisible");
    let questionContent = question1.textContent;
    let answerContent = document.querySelector("#answer-content-1").textContent;
    let containerDiv = document.querySelector("#upgrade-answer-1");
    let resultParagraph = document.createElement("p");

    let fd = new FormData();
    fd.append("question", questionContent);
    fd.append("answer", answerContent);
    sendAnswer(fd, containerDiv, resultParagraph, loadUpgradeAnswer1, loadMessage1);
});


upgradeAnswerButton2.addEventListener("click", function() {
    upgradeAnswerButton2.classList.add("invisible");
    loadUpgradeAnswer2.classList.remove("invisible");
    let questionContent = question2.textContent;
    let answerContent = document.querySelector("#answer-content-2").textContent;
    let containerDiv = document.querySelector("#upgrade-answer-2");
    let resultParagraph = document.createElement("p");

    let fd = new FormData();
    fd.append("question", questionContent);
    fd.append("answer", answerContent);
    sendAnswer(fd, containerDiv, resultParagraph, loadUpgradeAnswer2, loadMessage2);
});


upgradeAnswerButton3.addEventListener("click", function() {
    upgradeAnswerButton3.classList.add("invisible");
    loadUpgradeAnswer3.classList.remove("invisible");
    let questionContent = question3.textContent;
    let answerContent = document.querySelector("#answer-content-3").textContent;
    let containerDiv = document.querySelector("#upgrade-answer-3");
    let resultParagraph = document.createElement("p");

    let fd = new FormData();
    fd.append("question", questionContent);
    fd.append("answer", answerContent);
    sendAnswer(fd, containerDiv, resultParagraph, loadUpgradeAnswer3, loadMessage3);
});


upgradeAnswerButton4.addEventListener("click", function() {
    upgradeAnswerButton4.classList.add("invisible");
    loadUpgradeAnswer4.classList.remove("invisible");
    let questionContent = question4.textContent;
    let answerContent = document.querySelector("#answer-content-4").textContent;
    let containerDiv = document.querySelector("#upgrade-answer-4");
    let resultParagraph = document.createElement("p");

    let fd = new FormData();
    fd.append("question", questionContent);
    fd.append("answer", answerContent);
    sendAnswer(fd, containerDiv, resultParagraph, loadUpgradeAnswer4, loadMessage4);
});


upgradeAnswerButton5.addEventListener("click", function() {
    upgradeAnswerButton5.classList.add("invisible");
    loadUpgradeAnswer5.classList.remove("invisible");
    let questionContent = question5.textContent;
    let answerContent = document.querySelector("#answer-content-5").textContent;
    let containerDiv = document.querySelector("#upgrade-answer-5");
    let resultParagraph = document.createElement("p");

    let fd = new FormData();
    fd.append("question", questionContent);
    fd.append("answer", answerContent);
    sendAnswer(fd, containerDiv, resultParagraph, loadUpgradeAnswer5, loadMessage5);
});


upgradeAnswerButton6.addEventListener("click", function() {
    upgradeAnswerButton6.classList.add("invisible");
    loadUpgradeAnswer6.classList.remove("invisible");
    let questionContent = question6.textContent;
    let answerContent = document.querySelector("#answer-content-6").textContent;
    let containerDiv = document.querySelector("#upgrade-answer-6");
    let resultParagraph = document.createElement("p");

    let fd = new FormData();
    fd.append("question", questionContent);
    fd.append("answer", answerContent);
    sendAnswer(fd, containerDiv, resultParagraph, loadUpgradeAnswer6, loadMessage6);
});


upgradeAnswerButton7.addEventListener("click", function() {
    upgradeAnswerButton7.classList.add("invisible");
    loadUpgradeAnswer7.classList.remove("invisible");
    let questionContent = question7.textContent;
    let answerContent = document.querySelector("#answer-content-7").textContent;
    let containerDiv = document.querySelector("#upgrade-answer-7");
    let resultParagraph = document.createElement("p");

    let fd = new FormData();
    fd.append("question", questionContent);
    fd.append("answer", answerContent);
    sendAnswer(fd, containerDiv, resultParagraph, loadUpgradeAnswer7, loadMessage7);
});


upgradeAnswerButton8.addEventListener("click", function() {
    upgradeAnswerButton8.classList.add("invisible");
    loadUpgradeAnswer8.classList.remove("invisible");
    let questionContent = question8.textContent;
    let answerContent = document.querySelector("#answer-content-8").textContent;
    let containerDiv = document.querySelector("#upgrade-answer-8");
    let resultParagraph = document.createElement("p");

    let fd = new FormData();
    fd.append("question", questionContent);
    fd.append("answer", answerContent);
    sendAnswer(fd, containerDiv, resultParagraph, loadUpgradeAnswer8, loadMessage8);
});


upgradeAnswerButton9.addEventListener("click", function() {
    upgradeAnswerButton9.classList.add("invisible");
    loadUpgradeAnswer9.classList.remove("invisible");
    let questionContent = question9.textContent;
    let answerContent = document.querySelector("#answer-content-9").textContent;
    let containerDiv = document.querySelector("#upgrade-answer-9");
    let resultParagraph = document.createElement("p");

    let fd = new FormData();
    fd.append("question", questionContent);
    fd.append("answer", answerContent);
    sendAnswer(fd, containerDiv, resultParagraph, loadUpgradeAnswer9, loadMessage9);
});


upgradeAnswerButton10.addEventListener("click", function() {
    upgradeAnswerButton10.classList.add("invisible");
    loadUpgradeAnswer10.classList.remove("invisible");
    let questionContent = question10.textContent;
    let answerContent = document.querySelector("#answer-content-10").textContent;
    let containerDiv = document.querySelector("#upgrade-answer-10");
    let resultParagraph = document.createElement("p");

    let fd = new FormData();
    fd.append("question", questionContent);
    fd.append("answer", answerContent);
    sendAnswer(fd, containerDiv, resultParagraph, loadUpgradeAnswer10, loadMessage10);
});