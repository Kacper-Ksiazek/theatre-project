(() => {
    class PaginationNodesOrganizer {
        static AVAILABLE_KEYS = Object.seal({
            PAGES: "PAGES",
            MONTHS: "MONTHS",
        });

        nodes = [];

        constructor(selectors) {
            this.selectors = selectors;
        }

        getNode(key) {
            // Jeśli klucz nie istnieje w obiekcie AVAILABLE_KEYS, zakoncz funkcje
            if (!(key in PaginationNodesOrganizer.AVAILABLE_KEYS)) return;

            const { nodes, selectors } = this;

            // Jeśli klucz nie istnieje w obiekcie nodes, dodaj go
            if (!(key in nodes)) {
                nodes[key] = [...document.querySelectorAll(selectors[key])];
            }

            // Zwroc tablice elementow
            return nodes[key];
        }

        applyOnEach(key, callback) {
            const nodes = this.getNode(key);
            if (!nodes) return;

            [...nodes].forEach((element) => {
                callback(element);
            });
        }

        removeClassFromEach(key, className) {
            this.applyOnEach(key, (element) => {
                element.classList.remove(className);
            });
        }

        addEventOnEach(key, event, callback) {
            this.applyOnEach(key, (element) => {
                element.addEventListener(event, callback);
            });
        }
    }

    // Dla lepszej czytelnosci kodu, umiescilem funkcje main wewnatrz IIFE
    function main() {
        const KEYS = PaginationNodesOrganizer.AVAILABLE_KEYS;

        const Nodes = new PaginationNodesOrganizer({
            [KEYS.PAGES]: ".paginacja-strona",
            [KEYS.MONTHS]: ".paginacja-miesiac",
        });

        const CSS_CLASSES = {
            ACTIVE: "wybrany",
        };

        const CSS_TRANSITION_DURATION = 200;

        // Dla kazdego elementu o klasie odpowiadajacej kluczowi KEYS.PAGES
        for (const key in KEYS) {
            // Dodajemy event onClick
            Nodes.addEventOnEach(key, "click", (event) => {
                console.log(event.target);

                // Usuwamy klase CSS_CLASSES.ACTIVE ze wszystkich elementow
                Nodes.removeClassFromEach(key, CSS_CLASSES.ACTIVE);

                setTimeout(() => {
                    // Dodajemy klase do kliknietego elementu
                    event.target.classList.add(CSS_CLASSES.ACTIVE);
                }, CSS_TRANSITION_DURATION);
            });
        }
    }

    main();
})();
