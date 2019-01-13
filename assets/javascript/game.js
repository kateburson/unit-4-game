$(document).ready(function() {

// Creating Object
var myObj = {
    
    wins: 0,
    losses: 0,
    randomNum: '',
    yourNum: '',
    crystals: [],
    
    genRandom: function() {
        var result = Math.floor(Math.random() * 120) + 19;
        this.randomNum = result;
        console.log(result);
        $('#random-number').html(result);
    },

    assignValue: function() {
        for(i=0; i<4; i++){
            var value = Math.floor(Math.random() * 12) + 1;
            this.crystals.push(value);
        }
        console.log(this.crystals);
    },

    numberBuilder: function(i) {
        var result = Number(this.yourNum) + Number(this.crystals[i]);
        this.yourNum = result;
        console.log(this.yourNum);
        $('#your-number').html(this.yourNum);
        if(Number(this.yourNum) === Number(this.randomNum)) {
            alert('You win!');
            this.wins++;
            $('#wins').html('Wins: ' + this.wins);
            myObj.reset();
        }
        else if(this.yourNum > this.randomNum) {
            alert('Game over.');
            console.log(this.yourNum, this.randomNum);
            this.losses++;
            $('#losses').html('Losses: ' + this.losses);
            myObj.reset();
        }
    },

    reset: function() {
        this.genRandom();
        
        this.yourNum = '';
        $('#your-number').html(this.yourNum);
        
        this.crystals = [];
        this.assignValue();
    },

    randomColor: function() {
        var colorR = Math.floor((Math.random() * 256));
        var colorG = Math.floor((Math.random() * 256));
        var colorB = Math.floor((Math.random() * 256));
        $('#your-number').css("color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
    },

};

// Calling Functions
$('#random-number').ready(function() {
    myObj.genRandom();
    });

$(document).ready(function(){
    myObj.assignValue();
});

$('#one').on('click', function() {
    myObj.numberBuilder(0);
    myObj.randomColor();
});

$('#two').on('click', function() {
    myObj.numberBuilder(1);
    myObj.randomColor();
});

$('#three').on('click', function() {
    myObj.numberBuilder(2);
    myObj.randomColor();
});

$('#four').on('click', function() {
    myObj.numberBuilder(3);
    myObj.randomColor();
});


});