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
    losses = 0;
    //set crystal count to 0
    crystalCount = 0;
    $(".crystalCounterContainer").html(crystalCount);
    //reset gemValue
    assignGemVal(1, 12);
    //generate Magic Number 
    randomNum(19, 120);
}
gameSet();



//generate random magic number between 19 - 120
function randomNum(min, max) {
    //create div
    var magicDiv = $("<div>");
    //add classes
    $(magicDiv).addClass("magic-div");
    //random function
    magicNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    //add number to div
    $(magicDiv).append(magicNumber);
    //append to container
    $(".magicContainer").append(magicDiv);
};

//generate gem values for each img    
function assignGemVal(min, max) {
    //give each img an attribute and assign gemVal
    $(".crystal").each(function () {
        //random number assignment between 1 - 12 that checks usedVal to prevent repeats
        while (jQuery.inArray(gemValues, usedValues) != -1) {
            gemValues = Math.floor(Math.random() * (max - min + 1)) + min;
        };
        //find crystal imgs add value attribute
        $(this).attr("data-val", gemValues);
        //push gemVal to usedVal array
        usedValues.push(gemValues);
    })
};


//onclick event to update crystal count
    //assign onclick event to all gems
    $(".crystal").click(function () {
    //update crystalcount variable with value of gem
    var getGemVal = parseInt($(this).attr("data-val"));
    crystalCount = crystalCount + getGemVal;
    //update html in container
    $(".crystalCounterContainer").html(crystalCount);

     //if statement for magic number matching crystal count
    if( crystalCount == magicNumber){
        //set crystal count to 0
        crystalCount = 0;
        $(".crystalCounterContainer").html(crystalCount);
        //add to wins
        wins++
        $(".win-count").html(wins);
        //reset magic number
        $(".magic-div").remove();
        randomNum(19, 120);
        //reset gem values
        usedValues = [];
        assignGemVal(1, 12);
    }
    //if statement for magic number going over crystal count
    if (crystalCount > magicNumber){
        //set crystal count to 0
        crystalCount = 0;
        $(".crystalCounterContainer").html(crystalCount);
        //add to losses
        losses++
        $(".loss-count").html(losses);
        //reset magic number
        $(".magic-div").remove();
        randomNum(19, 120);
        //reset gem values
        usedValues = [];
        assignGemVal(1, 12);
    }       
//end on click event    
});





