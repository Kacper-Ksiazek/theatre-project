const SELECTORS = {
    CHECKBOX: "#newsletter-custom-input",
};

const CHECKED_CSS_CLASS = "checked";

const checkbox = document.querySelector(SELECTORS.CHECKBOX);
if (!checkbox) throw new Error(`Nie checkboxa w newsletterze, poszukiwany selektor: ${SELECTORS.CHECKBOX}`);

checkbox.addEventListener("click", () => {
    checkbox.classList.toggle(CHECKED_CSS_CLASS);
});
