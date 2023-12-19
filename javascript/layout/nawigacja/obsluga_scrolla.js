// Stale
const DO_NOT_CARE_THRESHOLD = 120; // Nie interesuje nas scrollowanie poniżej 240px
const NAVIGATION_SELECTOR = "#layout-navigation";

const DATA_ATTRIBUTE_NAME = "data-navigation-state";
const DATA_ATTRIBUTE_VALUES = {
    hidden: "hidden",
    visible: "visible",
    noScroll: "no-scroll",
};

const navigationWrapper = document.querySelector(NAVIGATION_SELECTOR);

// Jeśli nie znaleziono nawigacji, to nie ma sensu dalej działać
if (!navigationWrapper) throw new Error("Nie znaleziono głównej nawigacji strony! Szukany selektor to: #layout-navigation");

function hideNavigation() {
    navigationWrapper.setAttribute(
        DATA_ATTRIBUTE_NAME, //
        DATA_ATTRIBUTE_VALUES.hidden
    );
}

function showNavigation() {
    navigationWrapper.setAttribute(
        DATA_ATTRIBUTE_NAME, //
        DATA_ATTRIBUTE_VALUES.visible
    );
}

function markAsNoScroll(active) {
    navigationWrapper.setAttribute(
        DATA_ATTRIBUTE_NAME, //
        active === false ? undefined : DATA_ATTRIBUTE_VALUES.noScroll
    );
}

// Zmienna przechowująca ostatnią pozycję scrolla
let lastScrollPosition = 0;

let isNavigationVisible = true;
let isNavigationHidden = false;
let usedToDoNotCare = false;

window.addEventListener("scroll", () => {
    const { scrollY: currentScrollPosition } = window;

    const isScrollingBelowThreshold = currentScrollPosition < DO_NOT_CARE_THRESHOLD;
    const isScrollingUp = currentScrollPosition < lastScrollPosition;

    lastScrollPosition = currentScrollPosition;

    //
    // WYKRYWANIE SCROLLA PONIŻEJ PROGU
    //
    // Jeżeli wartość scrolla jest mniejsza od wartości progowej oraz jeszcze tego nie odnotowaliśmy, to zaznaczamy, że nie obchodzi nas scroll
    if (usedToDoNotCare === false && isScrollingBelowThreshold === true) {
        markAsNoScroll(true);
        usedToDoNotCare = true;
        return;
    }
    // Jeżeli wartość scrolla przekroczy próg, chowamy specjane style
    else if (usedToDoNotCare === true && isScrollingBelowThreshold === false) {
        markAsNoScroll(false);
        usedToDoNotCare = false;
        return;
    }

    //
    // OBSŁUGA SCROLLA W GÓRĘ I W DÓŁ
    //
    if (isScrollingBelowThreshold === true) return;

    if ((isScrollingUp === true || currentScrollPosition < 500) && isNavigationVisible === false) {
        // Jeśli scrollujemy w górę i nawigacja jest ukryta, to ją pokazujemy
        showNavigation();
        isNavigationVisible = true;
        isNavigationHidden = false;
    }
    // Jeśli scrollujemy w dół i nawigacja jest widoczna, to ją ukrywamy
    else if (currentScrollPosition >= 500 && isScrollingUp === false && isNavigationHidden === false) {
        hideNavigation();
        isNavigationVisible = false;
        isNavigationHidden = true;
    }
});
