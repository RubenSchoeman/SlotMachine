var player_one = "Ruben";//prompt('Enter Player One Name');
var player_two = "Jason";//prompt('Enter Player Two Name');
var player_three = "Don";//prompt('Enter Player Three Name');
var one = "four";

var source_html = $('#slot').html();
var template = Handlebars.compile(source_html);

var context =  {
    person : [
        {
            img : "",
            name : player_one
        },

        {
            img : "",
            name : player_two
        },

        {
            img : "",
            name : player_three
        },
    ],

};

var next = template(context);

$(".container").html(next);

function RandomImage() {
    var i = Math.floor(Math.random() * 5);
    var j = Math.floor(Math.random() * 5);
    var k = Math.floor(Math.random() * 5);
    var image_array = [
        "one",
        "two",
        "three",
        "four",
        "five"
    ];
    context.person[0].img = "images/" + image_array[i] + ".jpeg";
    context.person[1].img = "images/" + image_array[j] + ".jpeg";
    context.person[2].img = "images/" + image_array[k] + ".jpeg";
}

var test = 0;
$('.spin_btn').on('click', function() {

    RandomImage();

    var next = template(context);
    $(".container").html(next);
});
