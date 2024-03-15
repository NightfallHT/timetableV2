import { Settings } from "types/settings";
import { classType, timetableData } from "types/classes";

export function getWeekNumber(date: Date): number {
  // TODO: figure out why there is var and how the names are resolved
  var date = new Date(date.getTime());
  date.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
  // January 4 is always in week 1.
  var week1 = new Date(date.getFullYear(), 0, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
  return (
    1 +
    Math.round(
      ((date.getTime() - week1.getTime()) / 86400000 -
        3 +
        ((week1.getDay() + 6) % 7)) /
        7
    )
  );
}
export function replaceTemplate(
  time: string,
  template: string,
  classItem: classType
) {
  const showNote: boolean = localStorage.getItem("notes") === "true";
  const notes = classItem.notes !== "null" ? classItem.notes : null;

  let outputHtml = template.replace(/{%room%}/g, classItem.room);
  outputHtml = outputHtml.replace(/{%type%}/g, classItem.subject_type);
  outputHtml = outputHtml.replace(/{%subject_name%}/g, classItem.subject_name);
  outputHtml = outputHtml.replace(/{%teacher%}/g, classItem.teacher);
  outputHtml = outputHtml.replace(/{%time%}/g, time);
  outputHtml = outputHtml.replace(
    /{%notes%}/g,
    showNote && notes !== null ? notes : ""
  );
  return outputHtml;
}
