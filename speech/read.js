const fileInput = document.getElementById('fileInput');
const readButton = document.getElementById('readButton');
const stopButton = document.getElementById('stopButton');
const output = document.getElementById('output');
let speaking = false;

readButton.addEventListener('click', () => {
    const file = fileInput.files[0];

    if (file) {
        if (file.type === 'text/plain') {
            const reader = new FileReader();
            reader.onload = (event) => {
                const text = event.target.result;
                output.textContent = text;
                speakText(text);
            };
            reader.readAsText(file);
        } else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
            readDocxFile(file);
        } else {
            output.textContent = "Unsupported file type";
        }
    }
});

stopButton.addEventListener('click', () => {
    stopSpeaking();
    textInput.value = ''; // Clear the input text
});
// stopButton.addEventListener('click', () => {
//     stopSpeaking();
// });

function speakText(text) {
    if (!speaking) {
        speaking = true;
        const speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);

        speech.onend = () => {
            speaking = false;
        };
    }
}

function stopSpeaking() {
    if (speaking) {
        speechSynthesis.cancel();
        speaking = false;
    }
    
}

function readDocxFile(file) {
    const reader = new FileReader();
    reader.onload = async (event) => {
        const arrayBuffer = event.target.result;
        try {
            const docxText = await convertDocxToText(arrayBuffer);
            output.textContent = docxText;
            speakText(docxText);
        } catch (error) {
            console.error(error);
            output.textContent = "Error reading DOCX file";
        }
    };
    reader.readAsArrayBuffer(file);
}

async function convertDocxToText(arrayBuffer) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function () {
            const content = reader.result;
            window.docx.convertToHtml({ arrayBuffer: content }, (result) => {
                const docxText = result.value.trim().replace(/<\/?[^>]+(>|$)/g, "");
                resolve(docxText);
            });
        };
        reader.onerror = function (error) {
            reject(error);
        };
        reader.readAsArrayBuffer(arrayBuffer);
    });
}
const textInput = document.getElementById('textInput');

readButton.addEventListener('click', () => {
    const text = textInput.value;

    if (text.trim() !== '') {
        output.textContent = text;
        speakText(text);
    } else {
        output.textContent = "Please enter some text.";
    }
});
