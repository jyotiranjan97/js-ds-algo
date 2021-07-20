class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.absent = 0;
    this.scores = [];
  }
  checkStatus() {
    if (this.absent > 3) {
      return "You are Expelled!!!";
    }
    return `You are ${this.absent} times late`;
  }
  isAbsent(times = 1) {
    this.absent += times;
  }
  addScore(score) {
    this.scores.push(score);
  }
  calculateAverage() {
    let sum = this.scores.reduce((acc, score) => acc + score, 0);
    return sum / this.scores.length;
  }
}

// The method to create new objects must be called constructor
// The class keyword creates a constant,
// so you can not redefine it. Watch out for the syntax as well!

const firstStudent = new Student("Master", "Lionel", 1996);
firstStudent.isAbsent();
firstStudent.isAbsent();
console.log(firstStudent.checkStatus());
firstStudent.isAbsent();
firstStudent.isAbsent();
console.log(firstStudent.checkStatus());

const secondStudent = new Student("Sandy", "Gold", 1997);
secondStudent.isAbsent(4);
console.log(secondStudent.checkStatus());

firstStudent.addScore(45);
firstStudent.addScore(50);
console.log(firstStudent.calculateAverage());
