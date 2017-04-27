$(document).ready(function() {
  // Making the onclick function to get the change amount
  $("button").on("click", function() {
    var itemAmount = $("#itemCost").val();
    var givenAmount = $("#customerAmount").val();
    var changeGiven = (givenAmount - itemAmount).toFixed(2);


    // Defining the the Dollar amaount
    var numberOfDollars = Math.floor(givenAmount - itemAmount).toFixed(0);
    // Defining the remainder variable
    var remainder = ((changeGiven - numberOfDollars) * 100).toFixed(0);
    // Defining the rest of the money values
    var numberOfQuarters = Math.floor(remainder / 25).toFixed(0);
    remainder %= 25
    var numberOfDimes = Math.floor(remainder / 10).toFixed(0);
    remainder %= 10
    var numberOfNickels = Math.floor(remainder / 5).toFixed(0);
    remainder %= 5
    var numberOfPennies = Math.floor(remainder / 1);

    //Printing out the various change amounts.
    $('#totalChange').html('Your ' + 'total ' + 'change ' + 'is ' + changeGiven);
    $('#dollarAmout').html('Total ' + 'dollars ' + numberOfDollars);
    $('#quarterAmount').html('Total ' + 'quarters ' + numberOfQuarters);
    $('#dimeAmount').html('Total ' + 'dimes ' + numberOfDimes);
    $('#nickelAmount').html('Total '+ 'nickles ' + numberOfNickels);
    $('#pennyAmount').html('Total ' + 'pennies ' + numberOfPennies);

//Button animation
    $("button").animate({
      top: '210px',
      left: '150px'
    }, 350);



  })
});
