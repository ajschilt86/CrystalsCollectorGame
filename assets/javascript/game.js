var targetNumber = Math.floor(Math.random() * 120) + 19;
var randomCrystalNumber1 = Math.floor(Math.random() * 12) + 1;
var randomCrystalNumber2 = Math.floor(Math.random() * 12) + 1;
var randomCrystalNumber3 = Math.floor(Math.random() * 12) + 1;
var randomCrystalNumber4 = Math.floor(Math.random() * 12) + 1;
var counter = 0;
var wins = 0;
var losses = 0;

console.log(targetNumber);

function reset() {
    targetNumber = Math.floor(Math.random() * 120) + 19;
    randomCrystalNumber1 = Math.floor(Math.random() * 12) + 1;
    randomCrystalNumber2 = Math.floor(Math.random() * 12) + 1;
    randomCrystalNumber3 = Math.floor(Math.random() * 12) + 1;
    randomCrystalNumber4 = Math.floor(Math.random() * 12) + 1;
    counter = 0;
    wins = 0;
    losses = 0;
    $("#totalScore").text("Total Score: ");
}


$("#targetNumbner").text(targetNumber);


$("#crystalOne").on("click", function () {

    counter += randomCrystalNumber1;
    console.log(randomCrystalNumber1);

    $("#totalScore").text("Total Score: " + counter);

    if (counter === targetNumber) {
        wins++;
        $("#wins").text("wins: " + wins);
        console.log("you win" + wins);
        reset();
    }
    else if (counter > targetNumber) {
        losses++;
        $("#losses").text("losses: " + losses);
        console.log("you lose " + losses);
        reset();
    }

});

$("#crystalTwo").on("click", function () {

    counter += randomCrystalNumber2;
    console.log(randomCrystalNumber2);

    $("#totalScore").text("Total Score: " + counter);

    if (counter === targetNumber) {
        wins++;
        $("#wins").text("wins: " + wins);
        console.log("you win" + wins);
        reset();
    }
    else if (counter > targetNumber) {
        losses++;
        $("#losses").text("losses: " + losses);
        console.log("you lose " + losses);
        reset();
    }

});

$("#crystalThree").on("click", function () {

    counter += randomCrystalNumber3;
    console.log(randomCrystalNumber3);

    $("#totalScore").text("Total Score: " + counter);

    if (counter === targetNumber) {
        wins++;
        $("#wins").text("wins: " + wins);
        console.log("you win" + wins);
        reset();
    }
    else if (counter > targetNumber) {
        losses++;
        $("#losses").text("losses: " + losses);
        console.log("you lose " + losses);
        reset();
    }

});

$("#crystalFour").on("click", function () {

    counter += randomCrystalNumber4;
    console.log(randomCrystalNumber4);

    $("#totalScore").text("Total Score: " + counter);

    if (counter === targetNumber) {
        wins++;
        $("#wins").text("wins: " + wins);
        console.log(" you win" + wins);
        reset();
    }
    else if (counter > targetNumber) {
        losses++;
        $("#losses").text("losses: " + losses);
        console.log("you lose " + losses);
        reset();
    }

});












//generate random number between 19-120
//output number
//crystals random number between 1-12
//on click, add number to total
//if statements for when you reach the total or go over
//factor wins and losses