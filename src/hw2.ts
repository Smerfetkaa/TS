class School {
  _areas: Area[] = [];
  _lecturers: {
    name: string;
    surname: string;
    position: string;
    company: string;
    experience: string;
    courses: string;
    contacts: string;
  }[] = [];
  addArea(area: Area): void {
    this._areas.push(area);
  }

  removeArea(area: Area): void {
    this._areas = this._areas.filter(i => i !== area);
  }

  get areas(): Area[] {
    return this._areas;
  }

  get lecturers(): {
    name: string;
    surname: string;
    position: string;
    company: string;
    experience: string;
    courses: string;
    contacts: string;
  }[] {
    return this._lecturers;
  }
  addLecturer(lecturer: {
    name: string;
    surname: string;
    position: string;
    company: string;
    experience: string;
    courses: string;
    contacts: string;
  }): void {
    this._lecturers.push(lecturer);
  }
  removeLectures(lecturer: {
    name: string;
    surname: string;
    position: string;
    company: string;
    experience: string;
    courses: string;
    contacts: string;
  }): void {
    this._lecturers = this._lecturers.filter(i => i.name !== lecturer.name && i.surname !== lecturer.surname);
  }
}

class Area {
  _levels: Level[] = [];
  _name: string;

  constructor(name: string) {
    this._name = name;
  }
  addLevel(level: Level): void {
    this._levels.push(level);
  }

  removeLevel(level: Level): void {
    this._levels = this._levels.filter(i => i !== level);
  }

  get levels(): Level[] {
    return this._levels;
  }
  get name(): string {
    return this._name;
  }
}

class Level {
  _groups: Group[] = [];
  _name: LevelName;
  _description: string;

  constructor(name: LevelName, description: string) {
    this._name = name;
    this._description = description;
  }
  get groups(): Group[] {
    return this._groups;
  }
  get name(): string {
    return this._name;
  }
  get description(): string {
    return this._description;
  }
  addGroup(group: Group): void {
    this._groups.push(group);
  }
  removeGroup(group: Group): void {
    this._groups = this._groups.filter(i => i !== group);
  }
}
const enum LevelName {
  A1 = 'A1',
  A2 = 'A2',
  B1 = 'B1',
  B2 = 'B2',
  C1 = 'C1',
}
const enum Status {
  Active = 'Active',
  Inactive = 'Inactive',
  Pending = 'Pending',
}
class Group {
  _area: { directionName: string; levelName: LevelName } = { directionName: '', levelName: LevelName.A1 };
  _status: Status = Status.Pending;
  _students: Student[] = [];

  constructor(directionName: string, levelName: LevelName) {
    this._area.directionName = directionName;
    this._area.levelName = levelName;
  }
  get area(): { directionName: string; levelName: LevelName } {
    return this._area;
  }
  set status(value: Status) {
    this._status = value;
  }
  get status(): Status {
    return this._status;
  }
  addStudent(student: Student) {
    this._students.push(student);
  }
  removeStudent(student: Student) {
    this._students = this._students.filter(i => i !== student);
  }
  get students(): Student[] {
    return this._students;
  }
  showPerformance(): Student[] {
    const sortedStudents = this._students.sort((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
    return sortedStudents;
  }
}

class Student {
  _firstName: string;
  _lastName: string;
  _birthYear: number;
  _grades: { [workName: string]: number } = {};
  _visits: { [lesson: string]: boolean } = {};

  constructor(firstName: string, lastName: string, birthYear: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
  }

  get fullName(): string {
    return `${this._lastName} ${this._firstName}`;
  }

  set fullName(value: string) {
    [this._lastName, this._firstName] = value.split(' ');
  }

  get age(): number {
    return new Date().getFullYear() - this._birthYear;
  }
  setGrate(workName: string, mark: number): void {
    this._grades[workName] = mark;
  }
  setVisit(lesson: string, present: boolean): void {
    this._visits[lesson] = present;
  }
  get visits(): {} {
    return this._visits;
  }
  getPerformanceRating(): number {
    const gradeValues = Object.values(this._grades);

    if (!gradeValues.length) return 0;

    const averageGrade = gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
    const attendancePercentage =
      (Object.values(this._visits).filter(present => present).length / Object.values(this._visits).length) * 100;

    return (averageGrade + attendancePercentage) / 2;
  }
}
// const ivan = new Student('Ivan', 'Gar', 2005);
// const petro = new Student('Petro', 'Gar', 2006);
// ivan.setGrate('math', 10);
// ivan.setGrate('history', 70);
// ivan.setVisit('math', false);
// ivan.setVisit('math2', false);
// ivan.setVisit('history', false);
// petro.setGrate('math', 25);
// petro.setGrate('history', 10);
// petro.setVisit('math', false);

// petro.setVisit('history', true);
// // console.log(ivan.visits);
// // console.log(ivan.getPerformanceRating());
// const group1 = new Group('match', LevelName.A1);
// group1.addStudent(ivan);
// group1.addStudent(petro);
// console.log(ivan.getPerformanceRating());
// console.log(petro.getPerformanceRating());
// console.log(group1.showPerformance());
