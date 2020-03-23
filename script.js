// JS task 1
// Store your name in a varibale. 
// Store your courses in an array. 
// Display your name and courses
// If the number of courses you are doing is an odd number, find and display all odd numbers from 1-200 (inclusive)


var name = "Omotosho Oluwatobiju Judah";

var courses = ["HTML,CSS & JS", " NodeJS", " Design"];

console.log("Name: " + name);
console.log("Courses: " + courses);

for (var i = 0; i <= 200; i++) {
	if (i % 2 != 0) {
		console.log(i);
	}
}
