var weight = Number(prompt("Enter weight: "));
var height = Number(prompt("Enter height: "));

var fixed = weight / (height ** 2);

console.log("Result");
console.log("BMI Result: " + fixed.toFixed(2));

if(fixed<16.0){
    console.log("Severely Underweight");
}
else if(fixed >= 16 && fixed <= 18.4){
    console.log("Underweight");
}
else if(fixed >= 24.9 && fixed <= 18.5){
    console.log("Normal Weight");
}
else if(fixed >= 25.0 && fixed <= 29.9){
    console.log("Overweight");
}
else if(fixed >= 30.0 && fixed <= 34.9){
    console.log("Moderately Obese");
}
else if(fixed >= 35.0 && fixed <= 39.9){
    console.log("Severely Obese");
}
else{
    console.log("Morbidly Obese");
}



// var height = Number(prompt("Enter your height (in meters):"));
// var weight = Number(prompt("Enter your weight (in kilograms):"));

// // Calculate BMI
// var BMI = weight / (height ** 2);

// // Display the result
// console.log("Your BMI is: " + BMI.toFixed(2));

// Determine the BMI category
// if (BMI < 18.5) {
//     console.log("You are underweight.");
// } else if (BMI >= 18.5 && BMI <= 25) {
//     console.log("You are normal weight.");
// } else if (BMI > 25 && BMI <= 30) {
//     console.log("You are overweight.");
// } else {
//     console.log("You are obese.");
// }

