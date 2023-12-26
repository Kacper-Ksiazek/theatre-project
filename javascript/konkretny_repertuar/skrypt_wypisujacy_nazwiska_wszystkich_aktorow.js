const AKTORZY = [
    {
        Detektyw: "Anna Nowak", //
        Księżniczka: "Karolina Wiśniewska",
        "Szalony Profesor": "Alberta Kowalczyk",
        Agentka: "Joanna Kowalska",
        Kapitan: "Jan Kowalczyk",
    },
    {
        Doktor: "Emil Nowakowski", //
        Kowboj: "Bartosz Lewandowski",
        Reporterka: "Agnieszka Dąbrowska",
        Haker: "Aleksandra Wojciechowska",
        Pielęgniarka: "Maria Garcia",
    },
    {
        Król: "Henryk VIII", //
        Pirat: "Anna Bonny",
        Prezydent: "Olivia Adams",
        Artysta: "Leonardo da Vinci",
        Astronauta: "Michał Kowalczyk",
    },
    {
        Szeryf: "Wojciech Nowak", //
        Kucharz: "Artur Malinowski",
        Bogini: "Artemida Kowalska",
        Komandor: "Jakub Adamczyk",
        Profesor: "Jan Kowalski",
    },
];

for (const index in AKTORZY) {
    for (const [rola, nazwisko] of Object.entries(AKTORZY[index])) {
        console.log(rola, nazwisko);
    }
}
