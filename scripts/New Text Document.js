function Numberfunction(){
    let num1 = prompt("Enter the first number: "); 
    let num2 = prompt("Enter the second number: "); // This promts the user to pick 2 numbers
    let output = ""
    if (num1 > num2){
      output = num1;
    } else if (num1 == num2){
      output = "The numbers entered are the same"; // show that the numbers that are choosen are the same
    } else if (num2 > num1){ // if num2 is bigger then num1 it shows num2 as the bigger number
      output = num2;  
    } else {
      output = "Something went wrong"
    }
    document.getElementById("ShowLNumber").innerHTML = output;
   
  }

  function signNumber(){
    let num1 = prompt ("Enter First Number");
    let num2 = prompt ("Enter Second Number");
    let num3 = prompt ("Enter third Number"); //prompts the user to pick 3 numbers
  
    if (num1>0 && num2>0 && num3>0)
    {
      output = "The sign is positive";
    }
    else if (num1<0 && num2<0 && num3<0)
    {
      output = "this sign is negative";
    }
    else if (num1<0 && num2>0 && num3>0)
    {
     output = "this sign is negative" 
    }
    else if (num1>0 && num2<0 && num3>0)
    {
     output = "this sign is negative" 
    }
    else if (num1<0 && num2>0 && num3<0) //last few lines on of code determain if there is a negative number among the 3 numbers
    {
     output = "this sign is negative" 
    }
    document.getElementById("Showsign").innerHTML = output;
      
    }

function sortNumber(){
  let num1 = prompt ("Enter First Number");
  let num2 = prompt ("Enter Second Number");
  let num3 = prompt ("Enter third Number"); //prompts the user to pick 3 numbers
  var numArray = [num1, num2, num3]; // sets numarray to be equal to the three numbers the user has choose
  numArray = numArray.sort(); // sorts the 3 numbers that the user has choose
  output = numArray  // sets the ourput as the sorted numbers from smallest to greatest
  document.getElementById("SortNumber").innerHTML = output; 
}




function centuryFromYear(year) {
  let centuryCount = 0;
  while (year > 0){
    year = year - 100;
    centuryCount = centuryCount + 1;
  }
  return centuryCount;
}