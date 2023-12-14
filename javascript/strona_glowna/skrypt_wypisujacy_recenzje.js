const RECENZJE = [
    {
        uczelnia: "Akademia Górniczo-Hutnicza",
        ocena: 5,
        uzasadnienie: "Spektakl w Teatrze Ethereal przeniósł nas w świat emocji i refleksji. Perfekcyjne aktorstwo i głęboka treść sprawiły, że doświadczenie to pozostanie w nas na długo.",
        data: "Kwiecień 2020",
        grafika: "agh.png",
    },
    {
        uczelnia: "Politechnika Warszawska",
        ocena: 5,
        uzasadnienie: "Teatr Ethereal potrafi zaskoczyć! Ostatni spektakl to prawdziwe arcydzieło - nie tylko ze względu na talent aktorów, ale także wspaniałą reżyserię, która poruszała wszystkie nasze zmysły.",
        data: "Sierpień 2020",
        grafika: "pw.png",
    },
    {
        uczelnia: "Katolicki Uniwersytet Lubelski",
        ocena: 5,
        uzasadnienie: "Nigdy wcześniej nie przeżyliśmy tak intensywnego zderzenia ze sztuką. Teatr Ethereal to miejsce, gdzie magia sceny łączy się z głębokimi przesłaniami, kreując niezapomniane chwile.",
        data: "Luty 2020",
        grafika: "kul.png",
    },
    {
        uczelnia: "Uniwersytet Jagielloński",
        ocena: 3,
        uzasadnienie: "Cieszymy się, że mieliśmy okazję być częścią publiczności Teatru Ethereal. Spektakl był nie tylko widowiskiem dla oczu, ale także podróżą przez różne emocje, które jeszcze długo z nami pozostaną.",
        data: "Maj 2021",
        grafika: "uj.png",
    },
    {
        uczelnia: "Uniwersytet Warszawski",
        ocena: 5,
        uzasadnienie: "To był wieczór pełen wzruszeń i rozbawienia! Spektakl w Teatrze Ethereal to nie tylko wybitne umiejętności aktorskie, ale także cudowne poczucie humoru, które sprawiło, że opuszczenie sali było trudne.",
        data: "Styczeń 2021",
        grafika: "uw.png",
    },
    {
        uczelnia: "Politechnika Śląska",
        ocena: 4,
        uzasadnienie: "Teatr Ethereal zaskoczył nas swoją innowacyjnością i świeżym spojrzeniem na klasykę. Przekonujące interpretacje oraz nowatorska scenografia sprawiły, że teatralne doświadczenie było pełne niespodzianek.",
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
