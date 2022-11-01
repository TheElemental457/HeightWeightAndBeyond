
function bodyFat() {

  let male = document.getElementById("male");
  let female = document.getElementById("female");
  let gender;
  if (male.checked == true) {
    gender = "boy"
  }
  else if (female.checked == true) {
    gender = "girl"
  }

  else {
    alert("Please fill in all the required values!");
    return;
  }

  //Checks whether you are a boy or a girl


  let height = document.getElementById('height').value;
  let weight = document.getElementById('weight').value;
  let age = document.getElementById('age').value;
  //Gets the variables values
  if (height == "") {
    alert("Please fill in all the required values!");
    return;
  }
  if (height < 0) {
    alert("Please enter in a positive value!")
    return;
  }

  if (weight == "") {
    alert("Please fill in all the required values!");
    return;
  }
  if (weight < 0) {
    alert("Please enter in a positive value!")
    return;
  }
  if (age == "") {
    alert("Please fill in all the required values!");
    return;
  }
  if (age < 0) {
    alert("Please enter in a positive value!")
    return;
  }



  //Checks whether the variables are positive and whether they are filled in



  let bmi = (weight / (height ** 2)) * 703;
  //For this formula we actually have to calculate the bmi so this is the formula 


  if (gender == "Male") {
    result = (1.39 * bmi) + (0.16 * age) - (10.34 * 1) - 20;
  }
  else if (gender = "Female") {
    result = (1.39 * bmi) + (0.16 * age) - (10.34 * 0) - 20;
  }
  //Formula for body fat percentages uses if statements to whether you are a boy or a girl. 
  if (result < 1000000000 && result > 0) {
    console.log("pog");

  }
  else {
    alert("Please enter in a number!");
    return;
  }
  if (result % 1 > 0.5) {
    result = Math.ceil(result);
  }
  else {
    result = Math.floor(result);
  }

  //Rounds the variable/
  document.getElementById("result").innerHTML = "Your average body fat percentage is " + result + "%";
  if (result > 25) {
    document.getElementById("result2").innerHTML = "You are Obese- Click this link for some tips: " + "<a href = '/bodyFatCalculator/obeseTips.html'>LINK</a>";
  }

  else if (result > 6 && result < 25) {
    document.getElementById("result2").innerHTML = "You are Healthy- Click this link for some tips:" + "<a href = '/bodyFatCalculator/healthyTips.html'>LINK</a>";
  }
  else if (result < 6) {
    document.getElementById("result2").innerHTML = "You are underweight- Click this link for some tips:" + "<a href = '/bodyFatCalculator/underWeightTips.html'>LINK</a>";
  }
  //Outputs the variables
}
