function childHeight() {


  let male = document.getElementById("male");
  let female = document.getElementById("female");
  var gender;

  if (male.checked == true) {
    gender = "male";
  }
  else if (female.checked == true)
    gender = "female";

  else {
    alert("Please enter all the required values!");
    return;
  }
  //It first checks whether you are a male or a female and if you didnt enter in anything then it tells you to fill in the values


  let age = document.getElementById("age").value;
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  let motherHeight = document.getElementById("motherHeight").value;
  let fatherHeight = document.getElementById("fatherHeight").value;
  //Gets the values of all of the variables


  let coefficent;
  if (height == "") {
    alert("Please fill in all the required values!");
    return;
  }
  if (height < 0) {
    alert("Please enter in a positive value!")
    return;
  }
  if (motherHeight == "") {
    alert("Please fill in all the required values!");
    return;
  }
  if (motherHeight < 0) {
    alert("Please enter in a positive value!")
    return;
  }
  if (fatherHeight == "") {
    alert("Please fill in all the required values!");
    return;
  }
  if (fatherHeight < 0) {
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


  //Checks if all the variables were positive and they were filled in 





  if (age % 1 > 0.5) {
    age = Math.ceil(age);
  }
  else if (age % 1 < 0.5) {
    age = Math.floor(age);
  }
  //Rounds the value to a integer 


  if (gender == "female") {
    if (age == 4) {
      coefficent = [-0.19435, 1.24768, 0.44774, -8.1325];
    }
    if (age == 4.5) {
      coefficent = [-0.18519, 1.22177, 0.41381, -6.47656];
    }
    if (age == 5) {
      coefficent = [-0.1753, 1.19932, 0.38467, -5.13583];
    }
    if (age == 5.5) {
      coefficent = [-0.16484, 1.1788, 0.36039, -4.13791];
    }
    if (age == 6) {
      coefficent = [-0.154, 1.15866, 0.34105, -3.51039];
    }
    if (age == 6.5) {
      coefficent = [-0.14294, 1.13737, 0.32672, -3.14322];
    }
    if (age == 7) {
      coefficent = [-0.13184, 1.11342, 0.31748, -2.87645];
    }
    if (age == 7.5) {
      coefficent = [-0.12086, 1.08525, 0.3134, -2.66291];
    }
    if (age == 8) {
      coefficent = [-0.11019, 1.05135, 0.31457, -2.45559];
    }
    if (age == 8.5) {
      coefficent = [-0.09999, 1.01018, 0.32105, -2.20728];
    }
    if (age == 9) {
      coefficent = [-0.09044, 0.9602, 0.33291, -1.87098];
    }
    if (age == 9.5) {
      coefficent = [-0.08171, 0.89989, 0.35025, -1.0633];
    }
    if (age == 10) {
      coefficent = [-0.07397, 0.82771, 0.37312, 0.33468];
    }
    if (age == 10.5) {
      coefficent = [-0.06739, 0.74213, 0.40161, 1.97366];
    }
    if (age == 11) {
      coefficent = [-0.06136, 0.67173, 0.42042, 3.50436];
    }
    if (age == 11.5) {
      coefficent = [-0.05518, 0.6415, 0.41686, 4.57747];
    }
    if (age == 12) {
      coefficent = [-0.04894, 0.64452, 0.3949, 4.84365];
    }
    if (age == 12.5) {
      coefficent = [-0.04272, 0.67386, 0.3585, 4.27869];
    }
    if (age == 13) {
      coefficent = [-0.03661, 0.7226, 0.31163, 3.21417];
    }
    if (age == 13.5) {
      coefficent = [-0.03067, 0.78383, 0.25826, 1.83456];
    }
    if (age == 14) {
      coefficent = [-0.025, 0.85062, 0.20235, 0.32425];
    }
    if (age == 14.5) {
      coefficent[-0.01967, 0.91605, 0.14787, -1.13224];
    }
    if (age == 15) {
      coefficent = [-0.01477, 0.97319, 0.0988, -2.35055];
    }
    if (age == 15.5) {
      coefficent = [-0.01037, 1.01514, 0.05909, -3.10326];
    }
    if (age == 16) {
      coefficent = [-0.00655, 1.03496, 0.03272, -3.17885];
    }
    if (age == 16.5) {
      coefficent = [-0.0034, 1.02573, 0.02364, -2.41657];
    }
    if (age == 17) {
      coefficent = [-0.001, 0.98054, 0.03584, -0.65579];
    }
    if (age == 17.5) {
      coefficent = [0.00057, 0.89246, 0.07327, 2.26429];
    }
  }
  //If you were a female it would use this data table and use the coefficient array correlated to the age



  else if (gender == "male") {
    if (age == 4) {
      coefficent = [-0.087235, 1.23812, 0.50286, -10.2567];
    }
    if (age == 4.5) {
      coefficent = [-0.074454, 1.15964, 0.52887, -10.719];
    }
    if (age == 5) {
      coefficent = [-0.064778, 1.10674, 0.53919, -11.0213];
    }
    if (age == 5.5) {
      coefficent = [-0.05776, 1.0748, 0.53691, -11.1556];
    }
    if (age == 6) {
      coefficent = [-0.052947, 1.05923, 0.52513, -11.1138];
    }
    if (age == 6.5) {
      coefficent = [-0.049892, 1.05542, 0.50692, -11.0221];
    }
    if (age == 7) {
      coefficent = [-0.048144, 1.05877, 0.48538, -10.9984];
    }
    if (age == 7.5) {
      coefficent = [-0.047256, 1.06467, 0.46361, -11.0214];
    }
    if (age == 8) {
      coefficent = [-0.046778, 1.06853, 0.44469, -11.0696];
    }
    if (age == 8.5) {
      coefficent = [-0.046261, 1.06572, 0.43171, -11.122];
    }
    if (age == 9) {
      coefficent = [-0.045254, 1.05166, 0.42776, -11.1571];
    }
    if (age == 9.5) {
      coefficent = [-0.043311, 1.02174, 0.43593, -11.1405];
    }
    if (age == 10) {
      coefficent = [-0.039981, 0.97135, 0.45932, -11.038];
    }
    if (age == 10.5) {
      coefficent = [-0.034814, 0.89589, 0.50101, -10.8286];
    }
    if (age == 11) {
      coefficent = [-0.02905, 0.81239, 0.54781, -10.4917];
    }
    if (age == 11.5) {
      coefficent = [-0.024167, 0.74134, 0.58409, -10.0065];
    }
    if (age == 12) {
      coefficent = [-0.020076, 0.68325, 0.60927, -9.3522];
    }
    if (age == 12.5) {
      coefficent = [-0.016681, 0.63869, 0.62279, -8.6055];
    }
    if (age == 13) {
      coefficent = [-0.013895, 0.60818, 0.62407, -7.8632];
    }
    if (age == 13.5) {
      coefficent = [-0.011624, 0.59228, 0.61253, -7.1348];
    }
    if (age == 14) {
      coefficent = [-0.009776, 0.59151, 0.58762, -6.4299];
    }
    if (age == 14.5) {
      coefficent = [-0.008261, 0.60643, 0.54875, -5.7578];
    }
    if (age == 15) {
      coefficent = [-0.006988, 0.63757, 0.49536, -5.1282];
    }
    if (age == 15.5) {
      coefficent = [-0.005863, 0.68548, 0.42687, -4.5092];
    }
    if (age == 16) {
      coefficent = [-0.004795, 0.75069, 0.34271, -3.9292];
    }
    if (age == 16.5) {
      coefficent = [-0.003695, 0.83375, 0.24231, -3.4873];
    }
    if (age == 17) {
      coefficent = [-0.00247, 0.9352, 0.1251, -3.283];
    }
    if (age == 17.5) {
      coefficent = [-0.001027, 1.05558, -0.0095, -3.4156];
    }
    //If you were a male it would use this data table and use the coefficient array correlated to the age
  }

  let khamisHeight = (coefficent[0] * weight) + (coefficent[1] * height) + (coefficent[2] * ((motherHeight / 2) + (fatherHeight / 2))) + (coefficent[3]);

  //Formula for the khamis height Harry Khamis and Dr. Alex Roche made this method this is where the data tables comes in as you can see with coefficient[0], coefficient[1], coefficient[2], and coefficient[3]

  if (khamisHeight % 1 > 0.5) {
    khamisHeight = Math.ceil(khamisHeight);
  }
  else {
    khamisHeight = Math.floor(khamisHeight);
  }
  //Rounds the khamisheight to an integer

  let inches = khamisHeight % 12;
  khamisHeight -= inches;
  let feet = khamisHeight / 12;
  //Converts it into feet and inches using the modulus operator eg:: 60 inches is the khamis height so it would modulus 12 by it so you would be 0 inches and then it minus that by 60 which is still 60 and would divide it by 12 to find the amount of feet you are.


  if (feet < 1000000000 && feet >= 0) {
    console.log("pog");

  }
  else {
    alert("Please enter in a number!");
    return;
  }



  //Checks if the inputs are numbers are not


  document.getElementById("result").innerHTML = "Your estimated adult height is:" + " " + feet + " " + "feet," + " " + inches + "inches";
  document.getElementById("result2").innerHTML = "How to increase your height as a child:" + "<a href = '/khamisRocheCalculator/heightTips.html'>LINK</a>";

  //Outputs your feet and inches
}
