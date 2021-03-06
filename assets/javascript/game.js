$(document).ready(function () {

    var randNumber = Math.floor(Math.random() * 101) + 19;
    var randomCrystalNumber1 = Math.floor(Math.random() * 12) + 1;
    var randomCrystalNumber2 = Math.floor(Math.random() * 12) + 1;
    var randomCrystalNumber3 = Math.floor(Math.random() * 12) + 1;
    var randomCrystalNumber4 = Math.floor(Math.random() * 12) + 1;
    var counter = 0;
    var wins = 0;
    var losses = 0;

    function reset() {
        randNumber = Math.floor(Math.random() * 101) + 19;
        randomCrystalNumber1 = Math.floor(Math.random() * 12) + 1;
        randomCrystalNumber2 = Math.floor(Math.random() * 12) + 1;
        randomCrystalNumber3 = Math.floor(Math.random() * 12) + 1;
        randomCrystalNumber4 = Math.floor(Math.random() * 12) + 1;
        counter = 0;
        $("#totalScore").text("Current Score: 0");
        $("#targetNumbner").text("Target Number: " + randNumber);
    }

    function win() {
        wins++;
        $("#wins").text("Wins: " + wins);
        reset();
    }

    function loss() {
        losses++;
        $("#losses").text("Losses: " + losses);
        reset();
    }

    $("#targetNumbner").text("Target Number: " + randNumber);

    $("#crystalOne").on("click", function () {
        counter += randomCrystalNumber1;
        $("#totalScore").text("Current Score: " + counter);
        if (counter === randNumber) {
            win();
        }
        else if (counter > randNumber) {
            loss();
        }
    });

    $("#crystalTwo").on("click", function () {
        counter += randomCrystalNumber2;
        $("#totalScore").text("Current Score: " + counter);
        if (counter === randNumber) {
            win();
        }
        else if (counter > randNumber) {
            loss();
        }
    });

    $("#crystalThree").on("click", function () {
        counter += randomCrystalNumber3;
        $("#totalScore").text("Current Score: " + counter);
        if (counter === randNumber) {
            win();
        }
        else if (counter > randNumber) {
            loss();
        }
    });

    $("#crystalFour").on("click", function () {
        counter += randomCrystalNumber4;
        $("#totalScore").text("Current Score: " + counter);
        if (counter === randNumber) {
            win();
        }
        else if (counter > randNumber) {
            loss();
        }
    });

    $(document).keydown(function (e) {
        var key_one = 49;
        var key_two = 50;
        var key_three = 51;
        var key_four = 52;

        if (e.keyCode == key_one) {
            counter += randomCrystalNumber1;
            $("#totalScore").text("Current Score: " + counter);
            console.log(randomCrystalNumber1);

            if (counter === randNumber) {
                win();
            }
            else if (counter > randNumber) {
                loss();
            }
        }
        if (e.keyCode == key_two) {
            counter += randomCrystalNumber2;
            $("#totalScore").text("Current Score: " + counter);
            console.log(randomCrystalNumber2);
            if (counter === randNumber) {
                win();
            }
            else if (counter > randNumber) {
                loss();
            }
        }
        if (e.keyCode == key_three) {
            counter += randomCrystalNumber3;
            $("#totalScore").text("Current Score: " + counter);
            console.log(randomCrystalNumber3);
            if (counter === randNumber) {
                win();
            }
            else if (counter > randNumber) {
                loss();
            }
        }
        if (e.keyCode == key_four) {
            counter += randomCrystalNumber4;
            $("#totalScore").text("Current Score: " + counter);
            console.log(randomCrystalNumber4);
            if (counter === randNumber) {
                win();
            }
            else if (counter > randNumber) {
                loss();
            }
        }
    });
});
//generate random number between 19-120
//output number
//crystals random number between 1-12
//on click, add number to total
//if statements for when you reach the total or go over
//factor wins and losses