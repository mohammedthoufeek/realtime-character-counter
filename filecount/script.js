document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const content = e.target.result;
            displayStatistics(content);
        };
        reader.readAsText(file);
    }
});

function displayStatistics(content) {
    const charCount = content.length;
    const capitalCount = content.match(/[A-Z]/g) ? content.match(/[A-Z]/g).length : 0;
    const smallCount = content.match(/[a-z]/g) ? content.match(/[a-z]/g).length : 0;
    const numberCount = content.match(/[0-9]/g) ? content.match(/[0-9]/g).length : 0;
    const specialCount = content.match(/[^A-Za-z0-9]/g) ? content.match(/[^A-Za-z0-9]/g).length : 0;

    document.getElementById('charCount').textContent = charCount;
    document.getElementById('capitalCount').textContent = capitalCount;
    document.getElementById('smallCount').textContent = smallCount;
    document.getElementById('numberCount').textContent = numberCount;
    document.getElementById('specialCount').textContent = specialCount;

    document.getElementById('results').classList.remove('hidden');
}
