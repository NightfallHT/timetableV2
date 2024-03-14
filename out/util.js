export function replaceTemplate(time, template, classItem) {
    let output = template.replace(/{%room%}/g, classItem.room);
    let noteCheck = localStorage.getItem("notes");
    let notes = classItem.notes;
    output = output.replace(/{%type%}/g, classItem.subject_type);
    output = output.replace(/{%subject_name%}/g, classItem.subject_name);
    output = output.replace(/{%teacher%}/g, classItem.teacher);
    output = output.replace(/{%time%}/g, time);
    output = output.replace(/{%notes%}/g, noteCheck === "true" && notes !== "null" && notes !== null ? notes : "");
    return output;
}
export function addGroups(data) {
    let day;
    for (day in data) {
        for (let classes of data[day]) {
            for (let classBlock of classes.items) {
                switch (day) {
                    case "monday":
                        switch (classBlock.group) {
                            case "aids_proj":
                                // if(classBlock.hour) {
                                classBlock.group = "poniedziałek rano";
                                break;
                        }
                        break;
                    case "tuesday":
                        switch (classBlock.group) {
                            case "aids_proj":
                                classBlock.group = "wtorek rano";
                                break;
                        }
                        break;
                    case "wednesday":
                        switch (classBlock.group) {
                            case "aids_proj":
                                classBlock.group = "środa rano";
                                break;
                        }
                        break;
                    case "thursday":
                }
            }
        }
    }
}
