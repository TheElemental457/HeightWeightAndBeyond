function BMI() {
  let height = document.getElementById('height').value;
  let weight = document.getElementById('weight').value;
  //Gets all the variables values

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


  //Checks if the variables are positive and if they are entered in and if they are a number.

  height = height * 2.54
  weight = weight * 0.453592
  //Multiplies height by 2.54
  //Multiplies weight by 0.45


  let bmi = weight / (height / 100 * height / 100);
  //Formula to bmi
  let bmio = (bmi.toFixed(2));

  if (bmio % 1 > 0.5) {
    bmio = Math.ceil(bmio);
  }
  else {
    bmio = Math.floor(bmio);
  }
  //Rounds bmi

  if (bmio < 1000000000 && bmio >= 0) {
    console.log("pog");

  }
  else {
    alert("Please enter in a number!");
    return;
  }
  //Checks if the input is a number or not


  document.getElementById("result").innerHTML = "Your BMI is " + bmio;
  if (bmio > 30) {
    document.getElementById("result2").innerHTML = "You are Obese- Click this link for some tips: " + "<a href = '/bmiCalculator/obeseTips.html'>LINK</a>";
  }
  else if (bmi > 25 && bmi < 29.9) {
    document.getElementById("result2").innerHTML = "You are Overweight- Click this link for some tips:" + "<a href = '/bmiCalculator/overWeightTips.html'>LINK</a>";
  }
  else if (bmi > 18.5 && bmi < 24.9) {
    document.getElementById("result2").innerHTML = "You are Healthy- Click this link for some tips:" + "<a href = '/bmiCalculator/healthyTips.html'>LINK</a>";
  }
  else {
    document.getElementById("result2").innerHTML = "You are underweight- Click this link for some tips:" + "<a href = '/bmiCalculator/underWeightTips.html'>LINK</a>";
  }
  //Outputs bmi
}