let name = "Riya V Navade";
let age = 20;
const course = "MCA";
var semester = "3rd - sem";

console.log("Name: " + name);
console.log("Age: " + age);
console.log("Course: " + course);
console.log("Semester: " + semester);

let maths=64;
let physics=70;
let chemistry=45;
let biology=85;
let english=82;
let totalMarks= maths+physics+chemistry+biology+english;
let percentage=(totalMarks/500)*100;
console.log("Total marks:"+totalMarks);
console.log("percentage:"+percentage+"%");
console.log("avg marks:"+totalMarks/5);
console.log("Grade:"+(percentage>=90?"A":percentage>=80?"B":percentage>=70?"C":percentage>=60?"D":"F"));
console.log("Result:"+(percentage>=40?"PASS":"FAIL"));

//check even or odd number
let num=45;
if(num%2==0){
    console.log(num+"is even number");

}
else{
    console.log(num+"is odd number");
}

//check positive,negative or zero number
let num1=-10;
if(num1>0){
    console.log(num1+"is positive number");
}
else if (num1<0){
    console.log(num1+"is negative number");
}
else{
    console.log(num1+"is zero");
}

//find the largest number among three numbers
let num2=45;
let num3=-20;
let num4=0;
if (num2>num3 && num2>num4){
    console.log(+num2 +"is greater");
}
else if(num3>num4 && num3>2){
    console.log(+num3 +" is greater");
}
else{
    console.log(+num4+"is greater");
}

//student grade calculator
let m1=85;
let m2=73;
let m3=55;
let total=(m1+m2+m3);
let percent=total/300*100;
let grade=("Grade:"+(percent>90 && percent<=100)?"A":(percent>80 && percent<=89)?"B":(percent>70 && percent<=79)?"C":(percent>60 && percent<=69)?"D":"F");

//simple calculator
const n1=72;
const n2=-14;
let multi=(n1*n2);
let div=(n1/n2);
let add=(n1+n2);
let sub=(n1-n2);
console.log("Multi: " + multi);
console.log("Div: " + div);
console.log("Add: " + add);
console.log("Sub: " + sub);

//voting eligibility checker
let age1=22;
//let age1=parseInt(prompt("enter your age to check whether you are eligible or not"));
let vote=(age1>=18)?"Eligible to vote":"Not eligible to vote";
console.log(vote);

/*simple login check
let correctUsername="riya";
let correctPassword="Riya@1";
let username=prompt("enter your username");
let pwd=prompt("enter your pwd");
if(correctUsername=="username" && correctPassword=="pwd"){
    console.log("Login successful");
}
else{
    console.log("Invalid username or password");
}*/

//Electricity bill calculator
var units=169;
let bill=0;
if(units>0 && units<=100){
    bill=bill+(units*5);
}
else if(units>101 && units<=200){
    bill=bill+(units*7);
}
else{
    bill=bill+(units*10);
}
console.log("Electricity Bill:"+bill);



/* Number guessing game using math.floor & math.random functions.
let secrectNumber = Math.floor(Math.random() * 100) + 1;
        while(true){
            let guess = parseInt(prompt("guess a number between 1 to 100"));
            if(guess == secrectNumber){
                alert("you guessed the number")
                break;
            }
            else if(guess < secrectNumber){
                alert("too low")
               
            }
            else if(guess > secrectNumber){
                alert("too  high")

            }
        }
   */
// ARRAY , OBJECTS & ARRAY METHOD BASED PROBLEMS

//1. display the array
let students=["blue","green","pink","white","orange"];
console.log("students: ["+students+"]");
console.log("First Name:"+students[0]);
console.log("Last Name:"+students.at(-1));
console.log("Total students:"+students.length);

//2. add & remove items
let arr=["javascript","python","java","c++"];
console.log("Original:",[...arr]);

arr.push("HTML");
console.log("added html at the end:",[...arr]);

arr.unshift("CSS");
console.log("added CSS at the 1st:",[...arr]);

arr.pop();
console.log("deleted last element:",[...arr]);

//3. student object
let student={
    name:"Riya",
    age:20,
    course:"MCA",
    sem:"3rd",
    college:"CBS HUBLII"
};
console.log(student);

student.sem="4th";
console.log("After update:",student);

//4. array of student objects
let stud=[
    {name:"riya",age:21,marks:85},
    {name:"sangeeta",age:20,marks:72},
    {name:"sonu",age:25,marks:79},
    {name:"vinnu",age:18,marks:65},
    {name:"pooja",age:23,marks:70},
];
stud.forEach((student1)=>{
    console.log(student1.name+"->"+student1.marks);
});


/*student object
let s1={
    name:"brinda",
    age:22,
    course:"MCA",
    semester:"3rd",
    college:"CBS"
};
console.log("name:",s1.name);
console.log("age:",s1.age);
*/