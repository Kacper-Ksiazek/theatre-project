// Constants
const SELECTOR = "button#scroll-to-the-top";
// Stała określająca, że przycisk ma się pojawić, gdy użytkownik przewinie stronę o X wysokości okna
const RATIO_OF_WINDOW_HEIGHT_TO_HIDE = 1.5;

// Elements
const layoutScrollButtonNode = document.querySelector(SELECTOR);
// Jeżeli nie znaleziono elementu, to wyrzuć bład, że nie znaleziono przycisku do skrolowania
if (!layoutScrollButtonNode) throw new Error("Nie znaleziono przycisku do skrolowania");

function setDisabled(disabled) {
    layoutScrollButtonNode.disabled = disabled;
}

//
// Chowanie / pokazywanie przycisku
//
let threshold;
let disableScrollMechanism = false;

window.addEventListener("scroll", () => {
    if (disableScrollMechanism) return;

    threshold = window.innerHeight * RATIO_OF_WINDOW_HEIGHT_TO_HIDE;
    setDisabled(window.scrollY < threshold);
});

//
// Skrolowanie do góry
//
layoutScrollButtonNode.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });

    setDisabled(true);
    disableScrollMechanism = true;

    setTimeout(() => {
        disableScrollMechanism = false;
    }, 1000);
});
