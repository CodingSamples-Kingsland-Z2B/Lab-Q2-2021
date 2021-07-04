function main(studentInfo){
    let gradeBook = new Map();

    for(let currentStudent of studentInfo){
        let infoArray = currentStudent.split(" ");
        let studentName = infoArray.shift();
        let grades = infoArray.map(Number);

        if(!gradeBook.has(studentName)){
            gradeBook.set(studentName,grades);
        }else{
            let curGrades = gradeBook.get(studentName);
            let total = curGrades.concat(grades);
            
            gradeBook.set(studentName,total);
        }
    }

    let sortedGradeBook = Array.from(gradeBook).sort((a,b)=> {
        //a = ["Lilly", [4,6,6,5]]
        return average(a[1]) - average(b[1]);
    });

    for(let studentInfo of sortedGradeBook){
        console.log(`${studentInfo[0]}: ${studentInfo[1].join(", ")}`);
    }
}

function average(arrayOfNums){
    let sum = 0;
    for(let i= 0;i<arrayOfNums.length;i++){
        sum+= arrayOfNums[i];
    }
    let average = sum / arrayOfNums.length;

    return average;
}

main(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']);