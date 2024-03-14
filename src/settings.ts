// import { replaceTemplate } from "./util.js";
import { Settings } from "types/settings";
import { groupOpts, defaultSettings, subjectMappings } from "globals/consts";

interface ToggleButton extends HTMLButtonElement {
  target_subject: keyof typeof groupOpts;
  delta: 1 | -1;
}
//  it's rly convenient to just use group opts as global variable,
//  but then the function isn't pure so idk man
function buttonClickHandler(e: Event) {
  const targetSubject = (e.target as ToggleButton).getAttribute(
    "target_subject"
  )! as keyof typeof groupOpts;

  const settingInput = document.getElementById(
    targetSubject
  ) as HTMLInputElement;

  const subjectOpts = groupOpts[targetSubject];
  const delta = parseInt((e.target as ToggleButton).getAttribute("delta")!);
  const index = subjectOpts.indexOf(settingInput.value);

  if (index + delta < 0) {
    settingInput.value = subjectOpts.slice(-1)[0];
  } else if (index + delta >= subjectOpts.length) {
    settingInput.value = subjectOpts[0];
  } else {
    settingInput.value = subjectOpts[index + delta];
  }
  localStorage.setItem(targetSubject, settingInput.value);
}
function createSettings(
  settings: HTMLElement,
  data: Settings,
  mappings: Map<string, string>
) {
  let output: string = "";
  // let group: keyof typeof groupOpts;
  let subject: keyof typeof groupOpts;
  for (subject in data.groups) {
    // console.log(subject);
    const settingSection = document.createElement("div");
    const settingGroup = document.createElement("div");
    settingSection.className = "settings-section";
    const label = Object.assign(document.createElement("label"), {
      for: subject,
      textContent: mappings.get(subject) + ":",
    });
    const input = Object.assign(document.createElement("input"), {
      type: "text",
      id: subject,
      className: "settings-input",
      readOnly: true,
      value: localStorage.getItem(subject),
    });
    const prevButtton = Object.assign(
      document.createElement("button") as ToggleButton,
      {
        className: "prevGroup",
        textContent: "<",
        target_subject: subject,
        delta: -1,
      }
    );
    const nextButtton = Object.assign(document.createElement("button"), {
      className: "nextGroup",
      textContent: ">",
      target_subject: subject,
      delta: 1,
    });

    prevButtton.setAttribute("target_subject", subject);
    prevButtton.setAttribute("delta", "-1");
    nextButtton.setAttribute("target_subject", subject);
    nextButtton.setAttribute("delta", "1");

    settings.prepend(settingSection);
    settingSection.appendChild(label);
    settingSection.appendChild(settingGroup);
    settingGroup.appendChild(prevButtton);
    settingGroup.appendChild(input);
    settingGroup.appendChild(nextButtton);
    prevButtton.addEventListener("click", buttonClickHandler);
    nextButtton.addEventListener("click", buttonClickHandler);
    // output += template.replace(/{%GROUP_CODE%}/g, group);
  }
  return output;
}
let userSettings: Settings =
  document.cookie === "" ? defaultSettings : JSON.parse(document.cookie);

const settingsDiv = document.getElementById("settings-container");
const displayAllCheck = document.getElementById(
  "all_classes"
) as HTMLInputElement;
const notesCheck = document.getElementById("show_notes") as HTMLInputElement;

displayAllCheck.checked = localStorage.getItem("all_classes") === "true";
notesCheck.checked = localStorage.getItem("show_notes") === "true";
notesCheck?.addEventListener("change", (e) => {
  localStorage.setItem(
    "notes",
    (e.target as HTMLInputElement).checked.toString()
  );
});
displayAllCheck?.addEventListener("change", (e) => {
  localStorage.setItem(
    "display-all",
    (e.target as HTMLInputElement).checked.toString()
  );
});

settingsDiv
  ? createSettings(settingsDiv, userSettings, subjectMappings)
  : alert("settings div not found");
