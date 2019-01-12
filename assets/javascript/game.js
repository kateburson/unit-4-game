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
    
    numberBuilder: function() {
        var result = Number(this.yourNum) + Number(this.crystals);
        this.yourNum = result;
        console.log(this.yourNum);
        $('#your-number').html(this.yourNum);
        if(Number(this.yourNum) === Number(this.randomNum)) {
            alert('You win!');
            this.wins++;
            myObj.reset();
        }
        else if(Number(this.yourNum) > Number(this.randomNum)) {
            // alert('Game over.');
            console.log(this.yourNum, this.randomNum);
            this.losses++;
            myObj.reset();

        }
    },

    // numberBuilderTwo: function() {
    //     var result = Number(this.yourNum) + Number(this.cTwo);
    //     this.yourNum = result;
    //     console.log(this.yourNum);
    //     $('#your-number').html(this.yourNum);
    // },

    // numberBuilderThree: function() {
    //     var result = Number(this.yourNum) + Number(this.cThree);
    //     this.yourNum = result;
    //     console.log(this.yourNum);
    //     $('#your-number').html(this.yourNum);
    // },

    // numberBuilderFour: function() {
    //     var result = Number(this.yourNum) + Number(this.cFour);
    //     this.yourNum = result;
    //     console.log(this.yourNum);
    //     $('#your-number').html(this.yourNum);
    //     }
    // },

    reset: function() {
        yourNum = '';
        cOne = '';
        cTwo = '';
        cThree = '';
        cFour = '';
    },

};

// Calling Functions
$('#random-number').ready(function() {
    myObj.genRandom();
    });

$(document).ready(function(){
    myObj.assignValue();
    // myObj.assignCOne();
    // myObj.assignCTwo();
    // myObj.assignCThree();
    // myObj.assignCFour();
});

$('#one').on('click', function() {
    myObj.numberBuilderOne();
});

$('#two').on('click', function() {
    myObj.numberBuilderTwo();
});

$('#three').on('click', function() {
    myObj.numberBuilderThree();
});

$('#four').on('click', function() {
    myObj.numberBuilderFour();
});






});