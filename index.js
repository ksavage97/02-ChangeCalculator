$(document).ready(function() {

    $("#calculateButton").click(function() {

        var theAmountGiven = $("#amountGiven").val();
        var theAmountDue = $("#amountDue").val();
        var theChangeAmount = theAmountGiven - theAmountDue;
        var dollars = Math.floor(theChangeAmount);
        var decimalChange = Math.round((theChangeAmount - dollars) * 100);
        var listedChange = theChangeAmount.toFixed(2);

        do {
            if (decimalChange >= 25) {
                var quarters = Math.floor(decimalChange / 25);
                decimalChange = Math.round(decimalChange % 25);
            } else if (decimalChange >= 10) {
                var dimes = Math.floor(decimalChange / 10);
                decimalChange = Math.round(decimalChange % 10);
            } else if (decimalChange >= 5) {
                var nickels = Math.floor(decimalChange / 5);
                decimalChange = Math.round(decimalChange % 5);
            } else {
                var pennies = Math.floor(decimalChange / 1);
                decimalChange = (decimalChange / pennies) - .1;
            }
        } while (decimalChange > .9);


        $("#theDiv input").each(function() {
            var allOfThem = $(this).val();
            if (allOfThem <= 0 || isNaN(allOfThem) || allOfThem === "") {
                alert("Whoops! An error has occurred. Please make sure you only input positive numbers and fill out every field.");
            } else if (parseFloat(theAmountGiven) < parseFloat(theAmountDue)) {
                alert("Sorry, the amount given can't be less than the amount due!");
            } else {
                $("#yourChange").html(0);
                $("#dollarsLoc").html(0);
                $("#quartersLoc").html(0);
                $("#dimesLoc").html(0);
                $("#nickelsLoc").html(0);
                $("#penniesLoc").html(0);


                $("#yourChange").html('$' + listedChange);
                $("#dollarsLoc").html(dollars);
                $("#quartersLoc").html(quarters);
                $("#dimesLoc").html(dimes);
                $("#nickelsLoc").html(nickels);
                $("#penniesLoc").html(pennies);
            }
        });

    });

});
