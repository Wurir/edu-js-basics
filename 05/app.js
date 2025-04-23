function Student(initFirstName, initLastName){
    this.firstName = initFirstName;
    this.lastName = initLastName
    this.grades = {}
}

Student.prototype.addGrade = function(subject, grade){
    if(typeof this.grades[subject] === 'undefined'){
        this.grades[subject] = []
    }
    this.grades[subject].push(grade)
}

Student.prototype.getAverageGrade = function(subject){
    let allGrades = 0
    let avg = 0
    if(!subject){
        const gradesFlat = Object.values(this.grades).flat()
        allGrades = gradesFlat.reduce(function(acc, num){
            return acc += num
        }, 0) 
        avg = (allGrades / gradesFlat.length).toFixed(2)
    }else {
        const subjectGrades = this.grades[subject]
        allGrades = subjectGrades.reduce(function(acc, num){
            return acc += num
        }, 0) 
        avg = (allGrades / subjectGrades.length).toFixed(2)
    }
    return avg

}

const student1 = new Student('Jan', 'Kowalski')
student1.addGrade('maths', 4)
student1.addGrade('maths', 6)
student1.addGrade('english', 3)
const avgMath = student1.getAverageGrade('maths')
const avg = student1.getAverageGrade()
console.log(student1, avgMath, avg);
