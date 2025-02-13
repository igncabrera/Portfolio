
const messages = [
    "Segura?",
    "Muy segura??",
    "Confirmas?",
    ":((...",
    "Pensalo bien, un segundito",
    "Que pensaria kurosawa?",
    "O a mis gatos, se pondran tristes...",
    "O yo tmb :bebe en cenizas:",
    "Bueno",
    "Mentira, no tenes opcion ksksksk ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.4}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}