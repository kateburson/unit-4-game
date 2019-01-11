$(document).ready(function() {


// Creating Object
var myObj = {
    
    wins: 0,
    losses: 0,
    randomNum: '',
    yourNum: '',
    cOne: [],
    cTwo: [],
    cThree: [],
    cFour: [],
    crystals: [cOne, cTwo, cThree, cFour],

    genRandom: function() {
        var result = Math.floor(Math.random() * 120) + 19;
        console.log(result);
        $('#random-number').html(result);
    },

    // assignValue: function() {
    //     for(var i=0; i<this.crystals.length; i++) {
    //         var value = Math.floor(Math.random() * 12) + 1;
    //         this.crystals.indexOf(i).push(value);
    //     }
    //     console.log(crystals[i]);
    // }

    assignCOne: function() {
        var value = Math.floor(Math.random() * 12) + 1;
        this.cOne.push(value);
        console.log(value);
    },

    assignCTwo: function() {
        var value = Math.floor(Math.random() * 12) + 1;
        this.cTwo.push(value);
        console.log(value);
    },

    assignCThree: function() {
        var value = Math.floor(Math.random() * 12) + 1;
        this.cThree.push(value);
        console.log(value);
    },

    assignCFour: function() {
        var value = Math.floor(Math.random() * 12) + 1;
        this.cFour.push(value);
        console.log(value);
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

$('.crystals').on('click', function() {
    $('#your-number').html($('.crystals').val());
});



  

});