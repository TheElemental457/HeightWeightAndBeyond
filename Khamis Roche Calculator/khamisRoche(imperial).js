	function cheight() {
   
		var cAge = document.getElementById("cAge").value;
    var male = document.getElementById("Male");
    var female = document.getElementById("Female");
    var cSex;
    if(male.checked==true){
      cSex="b"
    }
    else{
      cSex="g";
    }
    var cHeight = document.getElementById("cHeight").value;
    var cWeight = document.getElementById("cWeight").value;     
    var mHeight = document.getElementById("mHeight").value;
    var fHeight = document.getElementById("fHeight").value;
    var coefficent;
   if(cHeight == ""){
     alert("Please fill in all the required values!");
    return ;
   }
    if(cHeight < 0){
      alert("Please enter in a positive value!")
      return ;
    }
     if(mHeight == ""){
     alert("Please fill in all the required values!");
    return ;
   }
    if(mHeight < 0){
      alert("Please enter in a positive value!")
      return ;
    }
     if(fHeight == ""){
     alert("Please fill in all the required values!");
    return ;
   }
    if(fHeight < 0){
      alert("Please enter in a positive value!")
      return ;
    }
     if(cWeight == ""){
     alert("Please fill in all the required values!");
    return ;
   }
    if(cWeight < 0){
      alert("Please enter in a positive value!")
      return ;
    }
     if(cSex == ""){
     alert("Please fill in all the required values!");
    return ;
   }
    
    
    
    


    if(cSex=="g"){
      if(cAge==4){
        coefficent=[-0.087235, 1.23812, 0.50286, -10.2567];
      }
      if(cAge==4.5){
       coefficent=[-0.18519, 1.22177, 0.41381, -6.47656];
      }
      if(cAge==5){
         coefficent=[-0.1753, 1.19932, 0.38467, -5.13583];
      }
      if(cAge==5.5){
         coefficent=[-0.16484, 1.1788, 0.36039, -4.13791];
      }
      if(cAge==6){
       coefficent=[-0.154, 1.15866, 0.34105, -3.51039];
      }
      if(cAge==6.5){
         coefficent=[-0.154, 1.15866, 0.34105, -3.51039];
      }
      if(cAge==7){
       coefficent=[-0.13184, 1.11342, 0.31748, -2.87645];
      }
      if(cAge==7.5){
         coefficent=[-0.12086, 1.08525, 0.3134, -2.66291];
      }
      if(cAge==8){
       coefficent=[-0.11019, 1.05135, 0.31457, -2.45559];
      }
      if(cAge==8.5){
         coefficent=[-0.09999, 1.01018, 0.32105, -2.20728];
      }
      if(cAge==9){
         coefficent=[-0.09044, 0.9602, 0.33291, -1.87098];
      }
      if(cAge== 9.5){
         coefficent=[-0.08171, 0.89989, 0.35025, -1.0633];
      }
      if(cAge== 10){
         coefficent=[-0.07397, 0.82771, 0.37312, 0.33468];
      }
      if(cAge== 10.5){
       coefficent=[-0.06739, 0.74213, 0.40161, 1.97366];
      }
      if(cAge== 11){
       coefficent=[-0.06136, 0.67173, 0.42042, 3.50436];
      }
      if(cAge== 11.5){
       coefficent=[-0.05518, 0.6415, 0.41686, 4.57747];
      }
      if(cAge== 12){
       coefficent=[-0.04894, 0.64452, 0.3949, 4.84365];
      }
      if(cAge==12.5){
         coefficent=[-0.04272, 0.67386, 0.3585, 4.27869];
      }
      if(cAge==13){
         coefficent=[-0.03661, 0.7226, 0.31163, 3.21417];
      }
      if(cAge==13.5){
       coefficent=[-0.03067, 0.78383, 0.25826, 1.83456];
      }
      if(cAge==14){
         coefficent=[-0.025, 0.85062, 0.20235, 0.32425];
      }
      if(cAge==14.5){
         coefficent[-0.01967, 0.91605, 0.14787, -1.13224];
      }
      if(cAge==15){
         coefficent=[-0.01477, 0.97319, 0.0988, -2.35055];
      }
      if(cAge==15.5){
         coefficent=[-0.01037, 1.01514, 0.05909, -3.10326];
      }
      if(cAge==16){
         coefficent=[-0.00655, 1.03496, 0.03272, -3.17885];
      }
      if(cAge==16.5){
         coefficent=[-0.0034, 1.02573, 0.02364, -2.41657];
      }
      if(cAge==17){
         coefficent=[-0.001, 0.98054, 0.03584, -0.65579];
      }
      if(cAge==17.5){
         coefficent[0.00057, 0.89246, 0.07327, 2.26429];
      }
    }
    else{
      if(cAge==4){
       coefficent = [-0.087235, 1.23812, 0.50286, -10.2567];
      }
      if(cAge==4.5){
         coefficent =[-0.074454, 1.15964, 0.52887, -10.719];
      }
      if(cAge==5){
         coefficent=[-0.064778, 1.10674, 0.53919, -11.0213];
      }
      if(cAge==5.5){
            coefficent =[-0.05776, 1.0748, 0.53691, -11.1556];
      }
      if(cAge==6){
         coefficent=[-0.052947, 1.05923, 0.52513, -11.1138];
      }
      if(cAge==6.5){
           coefficent =[-0.049892, 1.05542, 0.50692, -11.0221];
      }
      if(cAge==7){
            coefficent =[-0.048144, 1.05877, 0.48538, -10.9984];
      }
      if(cAge==7.5){
           coefficent =[-0.047256, 1.06467, 0.46361, -11.0214];
      }
      if(cAge==8){
             coefficent =[-0.046778, 1.06853, 0.44469, -11.0696];
      }
      if(cAge==8.5){
          coefficent =[-0.046261, 1.06572, 0.43171, -11.122];
      }
      if(cAge==9){
         coefficent =[-0.045254, 1.05166, 0.42776, -11.1571];
      }
      if(cAge== 9.5){
             coefficent=[-0.043311, 1.02174, 0.43593, -11.1405];
      }
      if(cAge== 10){
            coefficent =[-0.039981, 0.97135, 0.45932, -11.038];
      }
      if(cAge== 10.5){
         coefficent =[-0.034814, 0.89589, 0.50101, -10.8286];
      }
      if(cAge== 11){
          coefficent= [-0.02905, 0.81239, 0.54781, -10.4917];
      }
      if(cAge== 11.5){
           coefficent=[-0.024167, 0.74134, 0.58409, -10.0065];
      }
      if(cAge== 12){
         coefficent=[-0.020076, 0.68325, 0.60927, -9.3522];
      }
      if(cAge==12.5){
            coefficent=[-0.016681, 0.63869, 0.62279, -8.6055];
      }
      if(cAge==13){
             coefficent =[-0.013895, 0.60818, 0.62407, -7.8632];
      }
      if(cAge==13.5){
           coefficent=[-0.011624, 0.59228, 0.61253, -7.1348];
      } 
      if(cAge==14){
         coefficent =[-0.009776, 0.59151, 0.58762, -6.4299];
      }
      if(cAge==14.5){
           coefficent =[-0.008261, 0.60643, 0.54875, -5.7578];
      }
      if(cAge==15){
          coefficent =[-0.006988, 0.63757, 0.49536, -5.1282];
      }
      if(cAge==15.5){
          coefficent =[-0.005863, 0.68548, 0.42687, -4.5092];
      }
      if(cAge==16){
         coefficent =[-0.004795, 0.75069, 0.34271, -3.9292];
      }
      if(cAge==16.5){
         coefficent =[-0.003695, 0.83375, 0.24231, -3.4873];
      }
      if(cAge==17){
          coefficent=[-0.00247, 0.9352, 0.1251, -3.283];
      }
      if(cAge==17.5){
          coefficent=[-0.001027, 1.05558, -0.0095, -3.4156];
      }
    }
    
  var khamis_height = (coefficent[0] * cWeight)+ (coefficent[1] * cHeight) + (coefficent[2] * ((mHeight/2) + (fHeight/2))) + (coefficent[3]);

			document.getElementById("result").innerHTML="Your estimated adult height is:" + " " + khamis_height + " " + "inches";
    }