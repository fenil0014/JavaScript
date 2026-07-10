const course = {
    courseName: "JavaScript",
    price: 999,
    instructor: "Hitesh"
};

// console.log(course.price) 
// console.log(course.instructor)


const { courseName, price, instructor } = course;

console.log(courseName , price);
console.log(price);
console.log(instructor);

const price = course.price; 