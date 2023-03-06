// 1
var hello
console.log(hello);
var hello = 'world';
// output: undefined

// 2
var needle
var needle = 'haystack';
test();
function test() {
    var needle
    var needle = 'magnet';
    console.log(needle);
}
// output: magnet

// 3
var brendan
var brendan = 'super cool';
function print() {
    var brendan
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// output: super cool

// 4
var food
var food = 'chicken';
console.log(food);
eat();
function eat() {
    var food
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// output: chicken, half-chicken

// 5
var food
var mean
mean();
console.log(food);
var mean = function () {
    var food
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// output: mean is not a function

// 6 
var genre
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    var genre
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// output: undefined, rock, r&b, disco

// 7
var dojo
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    var dojo
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//output: san jose, seattle, burbank, san jose

// 8 - Bonus ES6: const
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    //const dojo = {};
    //dojo.name = name;
    //dojo.students = students;
    const dojo = {
        name : name,
        students : students
    }
    if(dojo.students > 50){
        dojo.hiring = true;
  
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// output: { name: 'Chicago', students: 65, hiring: true }, error











