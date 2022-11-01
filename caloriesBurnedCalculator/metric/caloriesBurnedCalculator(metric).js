function caloriesBurned() {
  let duration = document.getElementById('Duration').value;
  let weight = document.getElementById('Weight').value;
  let intensity = document.getElementById('Intensity').value;
  weight = weight * 0.54;
  
  //Takes the input for the variables
  if (duration == "") {
    alert("Please fill in all the required values!");
    return;
  }
  if (duration < 0) {
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
  if (intensity == "") {
    alert("Please fill in all the required values!");
    return;
  }
  if (intensity < 0) {
    alert("Please enter in a positive value!")
    return;
  }



  //Checks if all the values are positive and if the values are entered into a box
  //Duration (in minutes)(MET3.5*weight in kg)/200


  let caloriesburned = duration * intensity * 3.5 * weight / 200;
  let calsburned = (caloriesburned.toFixed(2));

  //Calories burned formula

  if (calsburned < 1000000000 && calsburned > 0) {
    console.log("pog");

  }
  else {
    alert("Please enter in a number!");
    return;
  }

  //Checks if the input is a number or not


  document.getElementById("result").innerHTML = "Number of calories burned " + calsburned;
  //Outputs the amount of calories that you have burned
}