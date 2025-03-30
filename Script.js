document.addEventListener("DOMContentLoaded", function() {
    typeText("typed-text", "I am truly sorry for what I did. You mean so much to me, and I regret my mistake. I hope you can forgive me.");
});

function typeText(elementId, text) {
    let i = 0;
    const speed = 50;
    function typing() {
        if (i < text.length) {
            document.getElementById(elementId).innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function showHeart(element) {
    element.innerHTML += " ❤️";
}

function showMessage(element) {
    element.innerHTML = element.innerHTML + " - I love this about you!";
}

function sendMessage() {
    alert("I hope you will message me soon. I am waiting.");
}
