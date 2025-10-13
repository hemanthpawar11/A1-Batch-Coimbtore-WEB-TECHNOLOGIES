let students ={
    sname : "hemant",
    age : 21,
    course : "Java Full Stack",
    date : "12-06-2025",
    gender : "Male",

    Message : function(gender){
        return `My name is ${this.sname}. I am ${this.age} years old. I am studying ${this.course}. My course will be completed on ${this.date}.`
    }
}

console.log(students.Message)

