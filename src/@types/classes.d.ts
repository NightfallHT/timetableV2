export type classType = {
  hour: string;
  room: string;
  subject_type: string;
  subject_name: string;
  teacher: string;
  notes: string;
  start_date: Date | null;
  end_date: Date | null;
  group?: string;
};

type hourBlock = {
  hour: string;
  items: classType[];
};

export type timetableData = {
  monday: hourBlock[];
  tuesday: hourBlock[];
  wednesday: hourBlock[];
  thursday: hourBlock[];
  friday: hourBlock[];
};
type emptyBlock = {
  hour: string;
  room: "";
  subject_type: "";
  subject_name: "";
  teacher: "";
  notes: "";
  start_date: null;
  end_date: null;
};
