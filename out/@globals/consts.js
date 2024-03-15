let rootFolder = "";
switch (document.location.hostname) {
    case "nightfallht.github.io":
        rootFolder = "/timetableV2/";
        break;
    case "localhost":
    case "127.0.0.1":
        rootFolder = "/";
        break;
    default:
}
export const root = location.protocol + "//" + location.host + rootFolder;
export const groupOpts = {
    aids_proj: [
        "poniedziałek rano",
        "poniedziałek po południu",
        "środa",
        "piątek",
    ],
    aids_lab: ["parzyste", "nieparzyste"],
    peim_lab: ["A", "B"],
    uc_proj: ["poniedziałek", "wtorek", "środa"],
    uc_lab: ["wtorek", "piątek"],
    so_lab: ["wtorek", "środa"],
    oop_lab: ["wtorek", "środa"],
};
export const defaultSettings = {
    mode: "dark",
    show_all_classes: false,
    show_notes: false,
    english_classroom: "301",
    groups: {
        aids_proj: "poniedziałek rano",
        aids_lab: "parzyste",
        peim_lab: "A",
        uc_proj: "poniedziałek",
        uc_lab: "wtorek",
        so_lab: "wtorek",
        oop_lab: "wtorek",
    },
};
export const subjectMappings = new Map([
    ["aids_proj", "Projektowe AiSD"],
    ["aids_lab", "Laby AiSD"],
    ["peim_lab", "Laby PEiM"],
    ["uc_proj", "Projektowe Układy Cyfrowe"],
    ["uc_lab", "Laby Układy Cyfrowe"],
    ["so_lab", "Laby Systemy Operacyjne"],
    ["oop_lab", "Laby Programowanie Obiektowe"],
]);
export const subjectMappingsDrut = new Map([
    ["aids_proj", "[P]Algorytmy i struktury danych"],
    ["aids_lab", "[L]Algorytmy i struktury danych"],
    ["peim_lab", "[L]Podstawy elektroniki i metrologii"],
    ["uc_proj", "[P]Układy cyfrowe"],
    ["uc_lab", "[L]Układy cyfrowe"],
    ["so_lab", "[L]Systemy operacyjne"],
    ["oop_lab", "[L]Programowanie obiektowe"],
]);
