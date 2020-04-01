console.log("Connected");

/*let string  = "string";
const edis = "Edis";
let sentence = "Hello" + "Vicky";
let sentence2 = " and also Angel";
let combine = sentence + sentence2;
//console.log(combine);
const combine = '${sentence}${sentence2}';*/
//let string = "strings";
//let sentence = "Hello" + "Junshen";
//let sentence2 = " and Ema";
//console.log(sentence + sentence2);
//"url"+"movieName"
//let student1 = "Sandra";
//let student2 = "Bob";
/*const longersentence =
    student1 +
    "and" +
    student2*/
 /*const longSentence = `${student1} and ${student2}
 are amazing and will be taking ${courseName} with 
 ${teachername}`; //template literal or template string

 let url= ${url}${movie}*/
 //////////Numbers or Integers  
/*let year = 2020; //"2020" is a string
let nextYear = 2020 + 1;
let past = 2020 / 2;
let farFuture = 2020 * 50;*/
//////Booleans
/*let trueStatement = true;
let falseStatement = false;*/
///Null and Undefined
//let Ron; //declared undefined but not defined undefined
//console.log(Ron);
//console.log(Sarah);
//////Boolean Logic
//let student = "Caroline";
//let age = 15;
//console.log(student === "Caroline")
//console.log(student === "caroline")
//console. log(age === 15);
//console.log(age <= 15 || age > 19); // || means or
// &&=both
///////If statements
/*let school = "Middle";
if(school === "Elementary"){
    console.log("You are in k-5")
} else if (school === "Middle"){
    console.log("You are in 6,7, or 8th grade");
} else {
    console.log("your are in HS");
}
let ron= "Ron";
console.log(ron !== "Ema");//!== not equal*/


////Green, Yellow, Red light
/*let light = "green";
if(light === "green"){
    console.log("Go");
} else if(light === "yellow") {
    console.log("Caution");
} else if(light === "red"){
    console.log("Stop");
} else {
    console.log("error");
}*/

////Milk
/*let isKristyLI = true;
let isBaoLI= false;


if(isKristyLI && isBaoLI )
{
    console.log("both get almond milk");
} else if(isKristyLI || isBaoLI) {
    console.log("one gets almond milk and the other gets milk");
} else {
    console.log("both get milk");
}*/

//// cupcake
/*let currtemp = 72;
if(currtemp < 68 ) {
    console.log("too cold");
} else if(currtemp >= 68 && currtemp <= 72) {
    console.log("perfect");
} else if(currtemp >72 && currtemp <= 76) {
    console.log("warm");
} else if(currtemp > 76){
    console.log("too hot");
}*/
//////////functions
/*function test(){
    console.log("TEST");
}
test();*/
/*function argument(n1,n2){
    console.log(n1,n2);
}
argument("val", "eric");*/ ///better way
/*const add = function(x,y){
    return x+y; // this ends function

}
console.log(add(10, 3));*/
/*const hello = function() {
    alert("hello");
};
const bye = function() {
    alert("Bye";)
};
const beatles = function() {
    hello();
    bye();
    hello();
}
beatles();*/

////scope
/*const name = "michael"  /// global space
function makeFunc(){
    const name = "Sarah"; // function scope
    function displayName() {
        //console.log(name);  ///inner function can 
                            ///access outer function
        alert(name);
    }
    //displayName();
    return displayName;
}
const myFunc = makeFunc(); ///closure
MyFunc();*/

////arrays
/*const names = ["diego", "Frid", "Chris", "val", "Hao"];
/// uses zero index, if want to call frid, use name[0]
names.push("caroline");
names.forEach(name => console.log(name));
names.filter(/*some code). forEach(el () => console.log el))
////spread operator))*/

/*const numbers = [1,2,3];

const add = function(x,y,z) {
return x + y + z;
};
console.log(add(... numbers));*/

////Challenge 1
/*let students = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa","Richard"];
students.forEach(student => {
    if(student.length > 5){
        console.log(student)
    }
   
}
    );*/

/////Challenge 2
//part 1
/*let students = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa","Richard"];
console.log(students.includes("junshen"));*/
///part 2
/*let students = ["Riya", "Omor", "Alan","Jaiyu", "Michael", "Lisa","Richard"];

function IsSavvaOrAlanInArray(name){
    return (name=="Alan" || name=="Savva");
}
console.log( students.some(IsSavvaOrAlanInArray));*/




