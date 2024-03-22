const course = {
    courseName : "Js in Hindi",
    price : "999",
    courseInstructor: "Skr Suman"
}

// console.log(course.courseName); 

// const {courseInstructor} = course
const {courseInstructor : instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// JSON

{
    "CourseName" : "Js in Hindi",
    "name" : "Skr Suman",
    "Price" : "Free"
}
