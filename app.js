const { hasPassingGrade } = require('./utils.js');


const studentName = 'Jhed Wharvey Mendoza';
const grades = [88, 92, 78, 95, 85];
const studentDetails ={

    major : 'Inofrmation Technology',
    year : 4
}

const calculateAverage = (numbers) => {
    const sum = numbers.reduce((total, grade) => total + grade, 0);
    return sum / numbers.length;
};

const averageGrade = calculateAverage(grades);

console.log(`Student: ${studentName}`);
console.log(`Major: ${studentDetails.major}`);
console.log(`Year: ${studentDetails.year}`);
console.log(`Grades: ${grades.join(", ")}`);
console.log(`Average Grade: ${averageGrade}`);

if (hasPassingGrade(averageGrade)) {
    console.log("Congratulations! You have a passing average.");
} else {
    console.log("You need to improve your average grade.");
}