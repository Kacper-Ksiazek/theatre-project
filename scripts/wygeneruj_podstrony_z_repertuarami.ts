import fse from "fs-extra";

// Sugar syntax types
type FileName = string;
type FileContent = string;
type DirectoryName = string;

// Actual types
type TemplateField =
    | "%%NAZWA%%" //
    | "%%ZDJECIE%%"
    | "%%OPIS%%"
    | "%%TAG1%%"
    | "%%TAG2%%"
    | "%%TAG3%%"
    | "%%AUTOR%%"
    | "%%REZYSER%%"
    | "%%PREMIERA%%";

type SubpageBlueprint = Record<TemplateField, string>;

function removePolishCharacter(character: string): string {
    const polishCharacters: string = "ąćęłńóśźż";
    const englishCharacters: string = "acelnoszz";

    const characterIndex: number = polishCharacters.indexOf(character);
    if (characterIndex === -1) {
        return character;
    }

    return englishCharacters[characterIndex];
}

function generateFileName(name: string, extension: string): string {
    return (
        name
            .toLowerCase() //
            .split("")
            .map(removePolishCharacter)
            .join("")
            .split(" ")
            .join("_") + extension
    );
}

const SUBPAGES_BLUEPRINT: SubpageBlueprint[] = [
    {
        "%%NAZWA%%": "Ścieżki zapomnianych marzeń",
        "%%ZDJECIE%%": "/images/repertuar/harmonogram/1.jpg",
        "%%TAG1%%": "emocje",
        "%%TAG2%%": "romans",
        "%%TAG3%%": "komedia",
        "%%AUTOR%%": "Jan Brzechwa",
        "%%REZYSER%%": "Agata Bęczyńska",
        "%%PREMIERA%%": "25.01.2024",
        "%%OPIS%%": `W spektaklu "Ścieżki Zapomnianych Marzeń" ożywają zapomniane marzenia w atmosferze pełnej romansu, komedii i wzruszeń. Główna bohaterka, zagubiona w codzienności, przypadkowo odkrywa skrzynię starych listów, która prowadzi ją ścieżką do zapomnianych marzeń młodości. W miarę jak przeszłość splata się z teraźniejszością, widzowie są świadkami wybuchu uczuć, pełnych humoru sytuacji oraz wzruszających momentów.`,
    },
    {
        "%%NAZWA%%": "Czas Burzowych Serc",
        "%%ZDJECIE%%": "/images/repertuar/harmonogram/2.jpg",
        "%%TAG1%%": "rodzinny",
        "%%TAG2%%": "zabawny",
        "%%TAG3%%": "komedia",
        "%%AUTOR%%": "Alicja Dzwonnicka",
        "%%REZYSER%%": "Robert Gracz",
        "%%PREMIERA%%": "29.01.2024",
        "%%OPIS%%": `W "Czasie Burzowych Serc" rozwija się pełna humoru i ciepła opowieść rodzinna, która przenosi widzów w świat zabawnych perypetii i niezapomnianych chwil. Główna postać, głową pełną marzeń, staje przed zadaniem rozwiązania rodzinnych konfliktów, prowadząc do szalonych sytuacji i śmiechu. Komediowy chaos miesza się z emocjonalnym ciepłem, ukazując, jak czasem burze w życiu rodziny mogą przynieść nieoczekiwane, radosne zmiany.`,
    },
    {
        "%%NAZWA%%": "Szeptane Tajemnice Miasta",
        "%%ZDJECIE%%": "/images/repertuar/harmonogram/3.jpg",
        "%%TAG1%%": "thriller",
        "%%TAG2%%": "przebojowy",
        "%%TAG3%%": "zaskakujący",
        "%%AUTOR%%": "Adam Dowbor",
        "%%REZYSER%%": "John Doe",
        "%%PREMIERA%%": "05.02.2024",
        "%%OPIS%%": `W "Szeptanych Tajemnicach Miasta" rozwija się niezwykły thriller, będący prawdziwym przebojem pełnym zaskakujących zwrotów akcji. Główny wątek prowadzi widzów przez mroczne zakamarki miejskiej rzeczywistości, gdzie tajemnicze szepty ukrywają najgłębsze sekrety. Spektakl kipi napięciem, a zaskakujące wydarzenia snują widzów przez intrygujące wątki, których rozwiązanie pozostaje nieprzewidywalne.`,
    },
    {
        "%%NAZWA%%": "Odgłosy Ciszy",
        "%%ZDJECIE%%": "/images/repertuar/harmonogram/4.jpg",
        "%%TAG1%%": "hit",
        "%%TAG2%%": "zabawny",
        "%%TAG3%%": "zaskakujący",
        "%%AUTOR%%": "Joanna Kowalska",
        "%%REZYSER%%": "Jakub Kruczek",
        "%%PREMIERA%%": "09.02.2024",
        "%%OPIS%%": `To prawdziwa perełka wśród teatralnych produkcji, łącząca w sobie humor, przebojowość i nieprzewidywalne zwroty akcji. Śmiech publiczności wypełnia salę, gdy na scenie rozwija się niezwykła historia, pełna zaskakujących momentów i inteligentnych gagów. Ten teatralny hit nie tylko bawi do łez, ale także pozostawia widzów z głębokim wrażeniem i pragnieniem powrotu do tej magicznej krainy śmiechu i nieoczekiwanych emocji.`,
    },
    {
        "%%NAZWA%%": "Kwiaty na Opuszczonym Klifie",
        "%%ZDJECIE%%": "/images/repertuar/harmonogram/5.jpg",
        "%%TAG1%%": "thriller",
        "%%TAG2%%": "emocje",
        "%%TAG3%%": "zaskakujący",
        "%%AUTOR%%": "Bronisław Czyżyk",
        "%%REZYSER%%": "Wiktoria Drozd",
        "%%PREMIERA%%": "16.02.2024",
        "%%OPIS%%": `Spektakl 'Kwiaty na Opuszczonym Klifie' przenosi widzów w mroczny świat intryg, emocji i nieprzewidywalnych zwrotów akcji. Thriller pełen napięcia ukazuje opuszczone klify jako tło fascynującej historii, gdzie emocje sięgają zenitu. Zaskakujące wydarzenia sprawiają, że publiczność nieodłącznie wchodzi w świat tajemnic i niebezpieczeństwa, pozostawiając ich z trzymającym w napięciu sercem i pragnieniem zgłębienia kolejnych, nieodkrytych zakątków tej niezwykłej opowieści.`,
    },
    {
        "%%NAZWA%%": "Przez Lustro Nieba",
        "%%ZDJECIE%%": "/images/repertuar/harmonogram/6.jpg",
        "%%TAG1%%": "rodzinny",
        "%%TAG2%%": "zabawny",
        "%%TAG3%%": "komedia",
        "%%AUTOR%%": "Karol Czerwiński",
        "%%REZYSER%%": "Żaneta Klon",
        "%%PREMIERA%%": "23.02.2024",
        "%%OPIS%%": `Spektakl 'Przez Lustro Nieba' to czysta radość i rodzinna komedia, której zabawne dialogi i komiczne sytuacje sprawiają, że publiczność trzyma się ze śmiechu. Historia pełna przygód i humoru przenosi widzów w magiczny świat, gdzie każde odbicie w lustrze kryje w sobie niekończącą się porcję śmiechu i pozytywnych emocji. Ten rodzinnie zabawny spektakl jest jak magiczne lusterko, które odbija najśmieszniejsze chwile życia, tworząc niezapomniany teatralny klimat.`,
    },
];

(async () => {
    const TEMPLATE_FILE_NAME: FileName = "TEMPLATE_TR.html";
    const RESULT_DIRNAME: DirectoryName = "wynik";

    const template: FileContent = fse.readFileSync(`./assets/${TEMPLATE_FILE_NAME}`, "utf-8");

    await fse.emptyDir(`./${RESULT_DIRNAME}`);

    for (const subpageBlueprint of SUBPAGES_BLUEPRINT) {
        const subpageFileName: FileName = generateFileName(subpageBlueprint["%%NAZWA%%"], ".html");

        try {
            let subpageContent: FileContent = template;

            for (const [templateField, templateFieldValue] of Object.entries(subpageBlueprint)) {
                subpageContent = subpageContent.replaceAll(templateField, templateFieldValue);
            }

            await fse.writeFile(`./${RESULT_DIRNAME}/${subpageFileName}`, subpageContent);

            console.log(`🟩 SUCCESS: Wygenerowanie podstrony ${subpageFileName} powiodło się.`);
        } catch (e) {
            console.log(`🟥 ERROR: Wygenerowanie podstrony ${subpageBlueprint} nie powiodło się.`);
        }
    }
})();
