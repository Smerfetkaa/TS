var School = /** @class */ (function () {
    function School() {
        this._areas = [];
        this._lecturers = [];
    }
    School.prototype.addArea = function (area) {
        this._areas.push(area);
    };
    School.prototype.removeArea = function (area) {
        this._areas = this._areas.filter(function (i) { return i !== area; });
    };
    Object.defineProperty(School.prototype, "areas", {
        get: function () {
            return this._areas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(School.prototype, "lecturers", {
        get: function () {
            return this._lecturers;
        },
        enumerable: false,
        configurable: true
    });
    School.prototype.addLecturer = function (lecturer) {
        this._lecturers.push(lecturer);
    };
    School.prototype.removeLectures = function (lecturer) {
        this._lecturers = this._lecturers.filter(function (i) { return i.name !== lecturer.name && i.surname !== lecturer.surname; });
    };
    return School;
}());
var Area = /** @class */ (function () {
    function Area(name) {
        this._levels = [];
        this._name = name;
    }
    Area.prototype.addLevel = function (level) {
        this._levels.push(level);
    };
    Area.prototype.removeLevel = function (level) {
        this._levels = this._levels.filter(function (i) { return i !== level; });
    };
    Object.defineProperty(Area.prototype, "levels", {
        get: function () {
            return this._levels;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Area.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return Area;
}());
var Level = /** @class */ (function () {
    function Level(name, description) {
        this._groups = [];
        this._name = name;
        this._description = description;
    }
    Object.defineProperty(Level.prototype, "groups", {
        get: function () {
            return this._groups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Level.prototype.addGroup = function (group) {
        this._groups.push(group);
    };
    Level.prototype.removeGroup = function (group) {
        this._groups = this._groups.filter(function (i) { return i !== group; });
    };
    return Level;
}());
var Group = /** @class */ (function () {
    function Group(directionName, levelName) {
        this._area = { directionName: '', levelName: "A1" /* LevelName.A1 */ };
        this._status = "Pending" /* Status.Pending */;
        this._students = [];
        this._area.directionName = directionName;
        this._area.levelName = levelName;
    }
    Object.defineProperty(Group.prototype, "area", {
        get: function () {
            return this._area;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    Group.prototype.addStudent = function (student) {
        this._students.push(student);
    };
    Group.prototype.removeStudent = function (student) {
        this._students = this._students.filter(function (i) { return i !== student; });
    };
    Object.defineProperty(Group.prototype, "students", {
        get: function () {
            return this._students;
        },
        enumerable: false,
        configurable: true
    });
    Group.prototype.showPerformance = function () {
        var sortedStudents = this._students.sort(function (a, b) { return b.getPerformanceRating() - a.getPerformanceRating(); });
        return sortedStudents;
    };
    return Group;
}());
var Student = /** @class */ (function () {
    function Student(firstName, lastName, birthYear) {
        this._grades = {};
        this._visits = {};
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }
    Object.defineProperty(Student.prototype, "fullName", {
        get: function () {
            return "".concat(this._lastName, " ").concat(this._firstName);
        },
        set: function (value) {
            var _a;
            _a = value.split(' '), this._lastName = _a[0], this._firstName = _a[1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "age", {
        get: function () {
            return new Date().getFullYear() - this._birthYear;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.setGrate = function (workName, mark) {
        this._grades[workName] = mark;
    };
    Student.prototype.setVisit = function (lesson, present) {
        this._visits[lesson] = present;
    };
    Object.defineProperty(Student.prototype, "visits", {
        get: function () {
            return this._visits;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.getPerformanceRating = function () {
        var gradeValues = Object.values(this._grades);
        if (!gradeValues.length)
            return 0;
        var averageGrade = gradeValues.reduce(function (sum, grade) { return sum + grade; }, 0) / gradeValues.length;
        var attendancePercentage = (Object.values(this._visits).filter(function (present) { return present; }).length / Object.values(this._visits).length) * 100;
        return (averageGrade + attendancePercentage) / 2;
    };
    return Student;
}());
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
// petro.setVisit('math2', false);
// petro.setVisit('history', true);
// // console.log(ivan.visits);
// // console.log(ivan.getPerformanceRating());
// const group1 = new Group('match', LevelName.A1);
// group1.addStudent(ivan);
// group1.addStudent(petro);
// console.log(ivan.getPerformanceRating());
// console.log(petro.getPerformanceRating());
// console.log(group1.showPerformance());
