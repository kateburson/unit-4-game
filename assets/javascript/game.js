$(document).ready(function() {


// Creating Object
var myObj = {
    
    wins: 0,
    losses: 0,
    randomNum: '',
    yourNum: '',
    // cOne: '',
    // cTwo: '',
    // cThree: '',
    // cFour: '',
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

    // assignCOne: function() {
    //     var value = Math.floor(Math.random() * 12) + 1;
    //     this.cOne = value;
    //     console.log(this.cOne);
    // },

    // assignCTwo: function() {
    //     var value = Math.floor(Math.random() * 12) + 1;
    //     this.cTwo = value;
    //     console.log(this.cTwo);
    // },

    // assignCThree: function() {
    //     var value = Math.floor(Math.random() * 12) + 1;
    //     this.cThree = value;
    //     console.log(this.cThree);
    // },

    // assignCFour: function() {
    //     var value = Math.floor(Math.random() * 12) + 1;
    //     this.cFour = value;
    //     console.log(this.cFour);
    // },
    
    numberBuilder: function(i) {
        var result = Number(this.yourNum) + Number(this.crystals[i]);
        this.yourNum = result;
        console.log(this.yourNum);
        $('#your-number').html(this.yourNum);
        if(Number(this.yourNum) === Number(this.randomNum)) {
            alert('You win!');
            this.wins++;
            $('#wins').text('Wins: ' + this.wins);
            myObj.reset();
        }
        else if(this.yourNum > this.randomNum) {
            console.log('Game over.');
            console.log(this.yourNum, this.randomNum);
            this.losses++;
            $('#losses').html('<p>Losses: </p>' + this.losses);
            myObj.reset();
        }
    },

    reset: function() {
        yourNum = '';
        $('#your-number').html(yourNum);
        crystals = [];
        this.genRandom();
        randomNum = '';
        $('#random-number')
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
});

$('#two').on('click', function() {
    myObj.numberBuilder(1);
});

$('#three').on('click', function() {
    myObj.numberBuilder(2);
});

$('#four').on('click', function() {
    myObj.numberBuilder(3);
});






});