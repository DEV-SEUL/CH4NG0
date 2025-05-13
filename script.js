document.getElementById('fontSize').addEventListener('change', updateText);
document.getElementById('fontColor').addEventListener('input', updateText);
document.getElementById('fontFamily').addEventListener('change', updateText);

function updateText() {
    const inputText = document.getElementById('inputText').value;
    const fontSize = document.getElementById('fontSize').value;
    const fontColor = document.getElementById('fontColor').value;
    const fontFamily = document.getElementById('fontFamily').value;

    const previewText = document.getElementById('previewText');
    previewText.style.fontSize = fontSize;
    previewText.style.color = fontColor;
    previewText.style.fontFamily = fontFamily;
    previewText.textContent = inputText || "이 텍스트는 실시간으로 변화를 보여줍니다.";
}
