$('.number').fadeIn(2000);

$('button').on('click', function () {
    var num = $('input').val();
    
    if (isNaN(num) || $.trim(num) == '') {
        alert("Enter a number dumbass");
    } else {
        fizzBuzz(num);
    }
});
$('.restart').click(function(){
     location.reload();
});

function fizzBuzz(num) {
    var FizzBuzz;

    $('.number').fadeOut(2000);

    for (var i = 1; i <= num; i++) {
        if (i % 3 === 0) {

            if (i % 3 === 0 && i % 5 === 0) {
                FizzBuzz = 'FizzBuzz';
            } else {
                FizzBuzz = 'Fizz';
            }
        } else if (i % 5 === 0) {
            FizzBuzz = 'Buzz';
        } else {
            FizzBuzz = i;
        }

        $('ul').append("<li>" + FizzBuzz + "</li>");
    }
}



//http://jsfiddle.net/b8cbztc2/
