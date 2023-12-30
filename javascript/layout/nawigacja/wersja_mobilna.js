(() => {
    // Stale
    const SELECTORS = {
        OPEN_MOBILE_MENU_BUTTON: "#open-mobile-menu",
        MENU: "#main-menu-actions-wrapper",
    };

    const OPENED_CSS_CLASS = "opened";

    //
    //
    //
    // Pobranie przycisku otwierającego menu mobilne
    const button = document.querySelector(SELECTORS.OPEN_MOBILE_MENU_BUTTON);
    if (!button) throw new Error(`Nie znaleziono przycisku otwierającego menu mobilne! Szukany selektor to: ${SELECTORS.OPEN_MOBILE_MENU_BUTTON}`);

    // Pobranie menu mobilnego
    const menu = document.querySelector(SELECTORS.MENU);
    if (!menu) throw new Error(`Nie znaleziono menu mobilnego! Szukany selektor to: ${SELECTORS.MENU}`);

    //
    //
    //
    // Dodanie obsługi kliknięcia w przycisk
    button.addEventListener("click", () => {
        [menu, button].forEach((element) => {
            element.classList.toggle(OPENED_CSS_CLASS);
        });
    });
})();
