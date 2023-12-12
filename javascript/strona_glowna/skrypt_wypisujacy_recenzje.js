const RECENZJE = [
    {
        uczelnia: "Akademia Górniczo-Hutnicza",
        ocena: 5,
        uzasadnienie: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in venenatis felis. Mauris quis eleifend dui. Etiam",
        data: "Kwiecień 2020",
        grafika: "agh.png",
    },
    {
        uczelnia: "Politechnika Warszawska",
        ocena: 5,
        uzasadnienie: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in venenatis felis. Mauris quis eleifend dui. Etiam",
        data: "Sierpień 2020",
        grafika: "pw.png",
    },
    {
        uczelnia: "Katolicki Uniwersytet Lubelski",
        ocena: 5,
        uzasadnienie: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in venenatis felis. Mauris quis eleifend dui. Etiam",
        data: "Luty 2020",
        grafika: "kul.png",
    },
    {
        uczelnia: "Uniwersytet Jagielloński",
        ocena: 3,
        uzasadnienie: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in venenatis felis. Mauris quis eleifend dui. Etiam",
        data: "Maj 2021",
        grafika: "uj.png",
    },
    {
        uczelnia: "Uniwersytet Warszawski",
        ocena: 5,
        uzasadnienie: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in venenatis felis. Mauris quis eleifend dui. Etiam",
        data: "Styczeń 2021",
        grafika: "uw.png",
    },
    {
        uczelnia: "Politechnika Śląska",
        ocena: 4,
        uzasadnienie: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in venenatis felis. Mauris quis eleifend dui. Etiam",
        data: "Marzec 2021",
        grafika: "ps.png",
    },
];

// Aktualny skrypt, który jest wykonywany po załadowaniu strony

// Pobieramy element, w którym będą wyświetlane recenzje
const reviews_wrapper = document.getElementById("recenzje-kontent");

if (!reviews_wrapper) throw new Error('Nie znaleziono elementu o id "recenzje"! Jest to wymagane do prawidlowego wyswietlania recenzji.');

// Wypisujemy pojedyncze recenzje
for (const { data, grafika, ocena, uczelnia, uzasadnienie } of RECENZJE) {
    // Tworzymy wrapper dla recenzji
    const review_wrapper = document.createElement("div");
    review_wrapper.classList.add("recenzja");

    // Tworzymy element z grafiką uczelni
    const img = document.createElement("img");
    img.src = `/images/strona_glowna/recenzje/${grafika}`;
    img.height = 144;

    // Tworzymy element z nazwą uczelni
    const university_name = document.createElement("h3");
    university_name.innerText = uczelnia;

    // Tworzymy element z opisem
    const description = document.createElement("p");
    description.classList.add("opis");

    description.innerText = uzasadnienie;

    // Tworzymy element z datą
    const date = document.createElement("p");
    date.classList.add("data");
    date.innerText = data;

    // Tworzymy element z ocena
    const rating = document.createElement("div");
    rating.classList.add("ocena");

    // Dodanie gwiazdek
    for (let i = 0; i < ocena; i++) {
        const star = document.createElement("i");
        star.classList.add("fas", "fa-star");
        rating.appendChild(star);
    }

    // Dodanie elementów do wrappera
    [img, rating, university_name, description, date].forEach((element) => review_wrapper.appendChild(element));

    // Dodanie recenzji do strony
    reviews_wrapper.appendChild(review_wrapper);
}
