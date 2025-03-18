
function calculate(){


const age = document.getElementById('age').value;
const height = document.getElementById('height').value;
const weight = document.getElementById('weight').value;
// const gender = document.getElementById('gender').value;
const Male = document.getElementById('male').checked;
const Female = document.getElementById('female').checked;

// check if any fields are empty or invalid

if(isNaN(weight) || isNaN(height) || (!Male && !Female) || isNaN(age) || weight <= 0 || height <=0 || age<=0 ) {
    let missFild = [];

    if(isNaN(weight) || weight <=0) missFild.push("weight");
    if(isNaN(height) || height <= 0) missFild.push("height");
    if(isNaN(age) || age<=0) missFild.push("age");
    if(!Male && !Female) missFild.push("gender");

    alert("please fill in all fields correctly :" + missFild.join(","));
    return;
} 

// convert height from cm to metters

const heightInM=height/100;

//calculae BMI

const bmi = weight / (heightInM*heightInM);

// Display BIM

document.getElementById('result').textContent = bmi.toFixed(2);

// Determine BIM category

let category = '';

let categoryColor = '';

if (bmi < 18.5){
    category = 'Underweight';
    categoryColor='orange';
}else if (bmi >= 18.5 && bmi <24.9){
    category = 'Normal weight';
    categoryColor='green';
}else if (bmi >= 25 && bmi < 29.9){
    category = 'Over weight';
    categoryColor='orange';

}else {
    category = 'Obesity';
    categoryColor='red';

}


// Display category

 const categoryElement = document.getElementById('comment');
 categoryElement.textContent = category;
categoryElement.style.color = categoryColor;

}