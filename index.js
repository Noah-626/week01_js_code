console.log("Hello world!");

a = 10
var a = 10
// let a = 10

let b = 20
b = 100 
b = "Hello world!"

// var b = 20

//  Object literal
var student = {
    studentId: 1,
    studentName: "John",
    studentAge: 20,
    city: "New York"
}
// console.log(student)
// console.log(student.studentName)
// console.log(typeof student)

for(let s in student)
{
    console.log(`${s} -> ${student[s]}`)
    // console.log(s)
    // console.log(student[s])
}

// Object Destruction
var emp = {
    empId: 1,
    empName: "John",
    empAge: 20,
    empCity: "New York"
}
var{empId, empName, empAge, empCity} = emp;
console.log(`EmpId: ${empId}`)
var result = "Pass"

var newEmp ={
    empId,
    empName,
    empAge,
    empCity,
    result
}
console.log(newEmp)

var emp1 = {
    ...emp,
    result
}

console.log(emp1)