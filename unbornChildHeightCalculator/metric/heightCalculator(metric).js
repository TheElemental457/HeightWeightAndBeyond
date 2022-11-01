function cheight() {
  var height = document.getElementById('height').value;
  var weight = document.getElementById('weight').value;
  height = parseInt(height);
  weight = parseInt(weight);

  if (height == "") {
    alert("Please fill in all the required values!");
    return;
  }
  if (height < 0) {
    alert("Please enter in a positive value!");
    return;
  }

  if (weight == "") {
    alert("Please fill in all the required values!");
    return;
  }
  if (weight < 0) {
    alert("Please enter in a positive value!");
    return;
  }


  //Checks if the value is positive and it is entered in


  let female = (1 * height - 1 * 5) / 2;
  //If you are a female then it minuses your height by 5 inches


  let femaleheight = female + weight / 2;  //Makes the female height the original height + weight / 2;
  let male = (1 * height + 1 * 5) / 2;
  //Actually there is a very huge reason as to why we made it 1 * 5 rather than 5 there is this very annoying bug where instead of adding numbers it concentates them like they are strings eg: 5 + 6 instead of 11 it would make it 56 and doing it like we did it fixes this bug.

  let maleheight = male + weight / 2;
  //Makes the male height the original height + weight / 2;

  if (maleheight < 1000000000 && maleheight > 0) {
    console.log("pog");

  }
  else {
    alert("Please enter in a number!");
    return;
  }
  if (femaleheight < 1000000000 && femaleheight > 0) {
    console.log("pog");
  }
  else {
    alert("Please enter in a number!");
    return;
  }
  //Checks if all the inputs are numbers


  document.getElementById("result").innerHTML = "If you had a male, his estimated height would be:" + " " + maleheight + " " + "centimeters";

  //Outputs the male height

  document.getElementById("result2").innerHTML = "If you had a female, her estimated height would be:" + " " + femaleheight + " " + "centimeters";

  //Outputs the female height
}

