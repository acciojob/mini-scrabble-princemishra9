//your code here
const textbox = document.getElementId("evaluatedText");
const lettercount = document.getElementId("letterCount");
textbox.addEventListener('input', () => {
    const letterCount = textbox.value.length;

    letterCountElement.textContent = letterCount;
});
