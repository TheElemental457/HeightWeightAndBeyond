
function cheight() {
  var male = document.getElementById("Male");
  var female = document.getElementById("Female");

  var gender;
  if (male.checked == true) {
    gender = "b"
  }
  else if (female.checked == true) {
    gender = "g"
  }
  else {
    alert("Please fill in all the required values!")
    return;
  }
  //Checks whether you are a male or a female

  var height = document.getElementById('height').value;
  var weight = document.getElementById('weight').value;
  var age = document.getElementById('age').value;
  var active = document.getElementById('active').value;
  var gainLoss = document.getElementById('gainLoss').value;
  //Gets all the values for the variables.


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

  //Checks if the values are positive or not and if they are entered in or not



  height = height * 2.54;
  weight = weight * 0.453592;
  //Multiplies the height by 2.54 and multiplies the weight by 0.45


  var menbmr = 66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age);
  var womenbmr = 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age);
  //Formula for menbmr and formula for womenbmr

  if (gender == "b") {
    if (active == "Sedentary") {
      var calories = menbmr * 1.2;
    }
    else if (active == "Lightly Active") {
      var calories = menbmr * 1.375;
    }
    else if (active == "Moderately Active") {
      var calories = menbmr * 1.55;
    }
    else if (active == "Very Active") {
      var calories = menbmr * 1.725;
    }
    else if (active == "Extra Active") {
      var calories = menbmr * 1.9;
    }
    else {
      alert("Please fill in all the required values!")
      return;
    }


    if (gainLoss == "Extreme Weight Gain") {
      calories = calories + 1000;
    }
    else if (gainLoss == "Weight Gain") {
      calories = calories + 500;
    }
    else if (gainLoss == "Mid Weight Gain") {
      calories = calories + 250;

    }
    else if (gainLoss == "Maintain Weight") {
      calories = calories + 0;

    }
    else if (gainLoss == "Mid Weight Loss") {
      calories = calories - 250;

    }
    else if (gainLoss == "Weight Loss") {
      calories = calories - 500;

    }
    else if (gainLoss == "Extreme Weight Loss") {
      calories = calories - 1000;
    }
    else {
      alert("Please fill in all the required values!")
      return;
    }
    //Checks how much weight you want to lose and subtracts the amount of calories by that amount if you didnt put anything in it just breaks
  }

  if (gender == "g") {
    if (active == "Sedentary") {
      var calories = womenbmr * 1.2;
    }
    else if (active == "Lightly Active") {
      var calories = womenbmr * 1.375;
    }
    else if (active == "Moderately Active") {
      var calories = womenbmr * 1.55;
    }
    else if (active == "Very Active") {
      var calories = womenbmr * 1.725;
    }
    else if (active == "Extra Active") {
      var calories = womenbmr * 1.9;
    }
    //Updates calories based on what amount of activity you are

    else {
      alert("Please fill in all the required values!")
      return;
    }
    if (gainLoss == "Extreme Weight Gain") {
      calories = calories + 1000;
    }
    else if (gainLoss == "Weight Gain") {
      calories = calories + 500;
    }
    else if (gainLoss == "Mid Weight Gain") {
      calories = calories + 250;

    }
    else if (gainLoss == "Maintain Weight") {
      calories = calories + 0;

    }
    else if (gainLoss == "Mid Weight Loss") {
      calories = calories - 250;

    }
    else if (gainLoss == "Weight Loss") {
      calories = calories - 500;

    }
    else if (gainLoss == "Extreme Weight Loss") {
      calories = calories - 1000;
    }

    else {
      alert("Please fill in all the required values!")
      return;
    }

    // Subtracts calories based on what you chose for the amount of gain or loss
  }

  if (calories < 1000000000 && calories > 0) {
    console.log("pog");

  }
  else {
    alert("Please enter in a number!");
    return;
  }
  //Checks if the input is a number or not



  document.getElementById("result").innerHTML = "To accomplish your goals, you need an intake of" + " " + calories + " " + "calories per day ";
  //Outputs the amount of calories that you had


}
