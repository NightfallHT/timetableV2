import { getWeekNumber, replaceTemplate } from "./util";
import { defaultSettings, root, subjectMappingsDrut } from "globals/consts";
function getNextWeekday(day) {
    let today = new Date();
    while (today.getDay() !== day) {
        today.setDate(today.getDate() + 1);
    }
    return today;
}
var weekday;
(function (weekday) {
    weekday[weekday["sunday"] = 0] = "sunday";
    weekday[weekday["monday"] = 1] = "monday";
    weekday[weekday["tuesday"] = 2] = "tuesday";
    weekday[weekday["wednesday"] = 3] = "wednesday";
    weekday[weekday["thursday"] = 4] = "thursday";
    weekday[weekday["friday"] = 5] = "friday";
    weekday[weekday["saturday"] = 6] = "saturday";
})(weekday || (weekday = {}));
const timetableDiv = document.getElementById("timetable");
if (timetableDiv === null)
    throw new Error("timetableDiv is null");
const data = await fetch(root + "timetable.json").then((res) => res.json());
const dayTemplate = await fetch(root + "templates/day.html").then((res) => res.text());
const classTemplate = await fetch(root + "templates/class.html").then((res) => res.text());
// day from 0 to 6, as per Date implementation
function isPeimThisWeek(hour) {
    // filter out additional slot
    if (hour.startsWith("1"))
        return false;
    const nextLab = getNextWeekday(weekday.monday);
    const group = localStorage.getItem("peim_lab");
    return ((getWeekNumber(nextLab) % 2 === 0 && group === "A") ||
        (getWeekNumber(nextLab) % 2 === 1 && group === "B"));
}
function isAisdThisWeek() {
    const nextLab = getNextWeekday(weekday.wednesday);
    const group = localStorage.getItem("aids_lab");
    return ((getWeekNumber(nextLab) % 2 === 0 && group === "nieparzyste") ||
        (getWeekNumber(nextLab) % 2 === 1 && group === "parzyste"));
}
function getKeyByValue(map, searchValue) {
    for (let [key, value] of map.entries()) {
        if (value === searchValue)
            return key;
    }
}
function scrollCarousel(direction) {
    console.log("scrolling...");
    const carousel = document.getElementById("timetable");
    carousel.scrollBy({
        left: (carousel.scrollWidth / carousel.childElementCount) * direction,
        behavior: "smooth",
    });
}
let key;
for (key in defaultSettings.groups) {
    if (localStorage.getItem(key) === null) {
        localStorage.setItem(key, defaultSettings.groups[key]);
    }
}
let day;
for (day in data) {
    timetableDiv.innerHTML += dayTemplate.replace(/{%day%}/g, day);
    const scheduleDiv = document.getElementById(day);
    let output = [];
    for (const classes of data[day]) {
        let anyClassesHappening = false;
        const empty = {
            hour: classes.hour,
            room: "",
            subject_type: "",
            subject_name: "",
            teacher: "",
            notes: "",
            start_date: null,
            end_date: null,
        };
        for (const classBlock of classes.items) {
            // Ensure date exists; if not specified, classes last the entire semester.
            // Dates chosen within reasonable boundaries.
            if (classBlock.end_date !== null) {
                classBlock.end_date = new Date(classBlock.end_date);
            }
            else {
                classBlock.end_date = new Date("01.01.2038");
            }
            if (classBlock.start_date !== null) {
                classBlock.start_date = new Date(classBlock.start_date);
            }
            else {
                classBlock.start_date = new Date("01.01.1970");
            }
            let today = new Date();
            // Check if classes start within bounds
            if ((classBlock.start_date > today || classBlock.end_date < today) &&
                localStorage.getItem("display-all") !== "true")
                continue;
            let key = getKeyByValue(subjectMappingsDrut, classBlock.subject_type + classBlock.subject_name);
            switch (key) {
                case "aids_proj":
                    if (!matchesAidsProj(day, classes.hour))
                        continue;
                    break;
                case "uc_proj":
                    if (!matchesUCProj(day, classes.hour))
                        continue;
                    break;
                case "uc_lab":
                    if (!matchesUCLab(day))
                        continue;
                    break;
                case "so_lab":
                    if (!matchesSO(day))
                        continue;
                    break;
                case "oop_lab":
                    if (!matchesOOP(day))
                        continue;
                    break;
                case "peim_lab":
                    if (!isPeimThisWeek(classes.hour))
                        continue;
                    break;
                case "aids_lab":
                    if (!isAisdThisWeek())
                        continue;
                    break;
                default:
                    break;
            }
            output.push(classBlock);
            anyClassesHappening = true;
        }
        if (!anyClassesHappening) {
            output.push(empty);
        }
    }
    while (output[0].room === "")
        output.shift();
    while (output[output.length - 1].room === "")
        output.pop();
    for (const classes of output) {
        scheduleDiv.innerHTML += replaceTemplate(classes.hour, classTemplate, classes);
    }
}
const prevScrolls = document.getElementsByClassName("carousel-prev");
const nextScrolls = document.getElementsByClassName("carousel-next");
for (const button of prevScrolls) {
    button.addEventListener("click", () => {
        scrollCarousel(-1);
    });
}
for (const button of nextScrolls) {
    button.addEventListener("click", () => {
        scrollCarousel(1);
    });
}
// Util functions necessary to map subject groups to days
function matchesAidsProj(day, hour) {
    const group = localStorage.getItem("aids_proj");
    switch (day) {
        case "monday":
            if (group === "poniedziałek rano" && hour[0] === "0")
                return true;
            if (group === "poniedziałek po południu" && hour[1] === "1")
                return true;
        case "wednesday":
            return group === "środa";
        case "friday":
            return group === "piątek";
        default:
            return false;
    }
}
function matchesUCProj(day, hour) {
    const group = localStorage.getItem("uc_proj");
    switch (day) {
        case "monday":
            return group === "poniedziałek";
        case "tuesday":
            return group === "wtorek" && parseInt(hour[1]) < 8;
        case "wednesday":
            return group === "środa";
        default:
            return false;
    }
}
function matchesUCLab(day) {
    const group = localStorage.getItem("uc_lab");
    switch (day) {
        case "tuesday":
            return group === "wtorek";
        case "friday":
            return group === "piątek";
        default:
            return false;
    }
}
function matchesSO(day) {
    const group = localStorage.getItem("so_lab");
    switch (day) {
        case "tuesday":
            return group === "wtorek";
        case "wednesday":
            return group === "środa";
        default:
            return false;
    }
}
function matchesOOP(day) {
    const group = localStorage.getItem("oop_lab");
    switch (day) {
        case "tuesday":
            return group === "wtorek";
        case "wednesday":
            return group === "środa";
        default:
            return false;
    }
}
