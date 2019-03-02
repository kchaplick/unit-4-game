//global variables
var magicNumber; 
var crystalCount = 0;
var wins = 0;
var losses = 0;
var gemValue = 0;


//initiate game function
function gameSet(){
    //reset wins and losses
    wins = 0;
    //set crystal count to 0
    crystalCount = 0;
    //reset gemValue
    
    //generate Magic Number 

    
}


//generate random magic number between 19 - 120
    function randomNum (min,max){
    //create div
        var magicDiv = $("<div>")
    //add classes
        $(magicDiv).addClass("magic-div")
    //random function
    magicNumber = Math.floor(Math.random() * (max - min + 1) ) + min;

    $(magicDiv).append(magicNumber)
    //append
    $(".magicContainer").append(magicDiv);
    }
    randomNum(1,120);
//generate gem values
    //for loop to go through all the gems
    
    //add value attribute

    //random number assignment between 1 - 12

    //assign number to attribute

//onclick event to update crystal count
    //assign onclick event to all gems
    
    //update crystalcount variable 

    //add div and pass it crystal count

    //append 

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
   
        



