function whosPaying(names) {
  names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
  var randomnames= Math.floor(Math.random() * names.length);
 var  payingperson = names[randomnames]
  
  return payingperson + " is going to buy lunch today!"
}
whosPaying();
whosPaying();



// names already defined, simply needed to add names
//new varaible 'randomnames' math.random gives random numbers (0-0.9) need to times by .length to accurately  adjust to number of data in arrays (5)
//math.floor to make sure it is rounded to a whole number (programmers count from 0)
//new variable 'payingperson', names in brackets to assign who will pay from the random number generator
//square brackets because it is an arrays
// returns random value (name)