$(document).ready(function() {


// Creating Object
var myObj = {
    
    wins: 0,
    losses: 0,
    randomNum: '',
    yourNum: '',
    cOne: '',
    cTwo: '',
    cThree: '',
    cFour: '',
    
    genRandom: function() {
        var result = Math.floor(Math.random() * 120) + 19;
        console.log(result);
        $('#random-number').html(result);
    },

    assignCOne: function() {
        var value = Math.floor(Math.random() * 12) + 1;
        this.cOne = value;
        console.log(this.cOne);
    },

    assignCTwo: function() {
        var value = Math.floor(Math.random() * 12) + 1;
        this.cTwo = value;
        console.log(this.cTwo);
    },

    assignCThree: function() {
        var value = Math.floor(Math.random() * 12) + 1;
        this.cThree = value;
        console.log(this.cThree);
    },

    assignCFour: function() {
        var value = Math.floor(Math.random() * 12) + 1;
        this.cFour = value;
        console.log(this.cFour);
    },

    numberBuilderOne: function() {
        var result = Number(this.yourNum) + Number(this.cOne);
        this.yourNum = result;
        console.log(this.yourNum);
        $('#your-number').html(this.yourNum);
    },

    numberBuilderTwo: function() {
        var result = Number(this.yourNum) + Number(this.cTwo);
        this.yourNum = result;
        console.log(this.yourNum);
        $('#your-number').html(this.yourNum);
    },

    numberBuilderThree: function() {
        var result = Number(this.yourNum) + Number(this.cThree);
        this.yourNum = result;
        console.log(this.yourNum);
        $('#your-number').html(this.yourNum);
    },

    numberBuilderFour: function() {
        var result = Number(this.yourNum) + Number(this.cFour);
        this.yourNum = result;
        console.log(this.yourNum);
        $('#your-number').html(this.yourNum);
    },

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
    myObj.assignCOne();
    myObj.assignCTwo();
    myObj.assignCThree();
    myObj.assignCFour();
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