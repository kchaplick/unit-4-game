//global variables
var magicNumber;
var crystalCount = 0;
var wins = 0;
var losses = 0;
var gemValues = 0;
var usedValues = [0];


//initiate game function
function gameSet() {
    //reset wins and losses
    wins = 0;
    //set crystal count to 0
    crystalCount = 0;
    //reset gemValue

    //generate Magic Number 

   
}
gameSet();



//generate random magic number between 19 - 120
function randomNum(min, max) {
    //create div
    var magicDiv = $("<div>")
    //add classes
    $(magicDiv).addClass("magic-div")
    //random function
    magicNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    $(magicDiv).append(magicNumber)
    //append
    $(".magicContainer").append(magicDiv);
}
randomNum(19, 120);

//generate gem values for each img    
function assignGemVal(min, max) {


    //give each img an attribute and assign gemVal
    $(".crystal").each(function () {
        //random number assignment between 1 - 12
        while (jQuery.inArray(gemValues, usedValues) != -1) {
            gemValues = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        //find crystal imgs add value attribute
        $(this).attr("data-val", gemValues);
        usedValues.push(gemValues);
    })
}
assignGemVal(1, 12);

//onclick event to update crystal count
//assign onclick event to all gems
$(".crystal").click(function () {
    //update crystalcount variable with value of gem
    var getGemVal = parseInt($(this).attr("data-val"))
    crystalCount = crystalCount + getGemVal
    console.log("Value of data attr " + getGemVal);
    console.log("New value of crystalCount " + crystalCount);
    //update html in container
    $(".crystalCounterContainer").html(crystalCount);
});


 //if statement for magic number matching crystal count
    //if statement

        //crystal count = magic number 

        //add to wins

        //reset magic number

        //reset gem values

        //set crystal count to 0

//if statement for crystal count going over magic number
    //if statement

        //crystal count > magic number

        //add to losses

        //reset magic number

        //reset gem values

        //set crystal count to 0





