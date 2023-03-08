async function getQuestions(form) {
    let response = await fetch("../questions", {
        method: 'POST',
        body: form});

    reader = response.body.pipeThrough(new TextDecoderStream()).getReader();

    while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        console.log('Получено', value);
    };
};


let sendButton = document.querySelector("#button");
sendButton.addEventListener("click", function() {
    form = new FormData();
    let link = document.querySelector("#link-input").value
    form.append("link", link);
    getQuestions(form=form);
});