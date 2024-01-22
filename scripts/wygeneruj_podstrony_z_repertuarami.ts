import fse from "fs-extra";

// Sugar syntax types
type FileName = string;
type FileContent = string;
type DirectoryName = string;

// Actual types
type TemplateField = "%%NAZWA%%" | "%%ZDJECIE%%";
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
    },
    {
        "%%NAZWA%%": "Czas Burzowych Serc",
        "%%ZDJECIE%%": "/images/repertuar/harmonogram/2.jpg",
    },
    {
        "%%NAZWA%%": "Szeptane Tajemnice Miasta",
        "%%ZDJECIE%%": "/images/repertuar/harmonogram/3.jpg",
    },
    {
        "%%NAZWA%%": "Odgłosy Ciszy",
        "%%ZDJECIE%%": "/images/repertuar/harmonogram/4.jpg",
    },
    {
        "%%NAZWA%%": "Kwiaty na Opuszczonym Klifie",
        "%%ZDJECIE%%": "/images/repertuar/harmonogram/5.jpg",
    },
    {
        "%%NAZWA%%": "Przez Lustro Nieba",
        "%%ZDJECIE%%": "/images/repertuar/harmonogram/6.jpg",
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
