//global variables
var now = moment();


//a function that displays and updates the time dynamically (the function call is built into the setInterval command)
var update = function() {
    $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
}
setInterval(update, 1000);

//a set of click events tied to the individual buttons that save the text in the textarea to local storage

$("#cell1").click(function (){
    localStorage.one = ($("#fill1").val());
})
$("#cell2").click(function (){
    localStorage.two = ($("#fill2").val());
})
$("#cell3").click(function (){
    localStorage.three = ($("#fill3").val());
})
$("#cell4").click(function (){
    localStorage.four = ($("#fill4").val());
})
$("#cell5").click(function (){
    localStorage.five = ($("#fill5").val());
})
$("#cell6").click(function (){
    localStorage.six = ($("#fill6").val());
})
$("#cell7").click(function (){
    localStorage.seven = ($("#fill7").val());
})
$("#cell8").click(function (){
    localStorage.eight = ($("#fill8").val());
})
$("#cell9").click(function (){
    localStorage.nine = ($("#fill9").val());
})

//a function that will get called on page load that imports the data from local storage into the text field
var remember = function() {
    var refill1 = localStorage.one;
    $("#fill1").val(refill1);
    var refill2 = localStorage.two;
    $("#fill2").val(refill2);
    var refill3 = localStorage.three;
    $("#fill3").val(refill3);
    var refill4 = localStorage.four;
    $("#fill4").val(refill4);
    var refill5 = localStorage.five;
    $("#fill5").val(refill5);
    var refill6 = localStorage.six;
    $("#fill6").val(refill6);
    var refill7 = localStorage.seven;
    $("#fill7").val(refill7);
    var refill8 = localStorage.eight;
    $("#fill8").val(refill8);
    var refill9 = localStorage.nine;
    $("#fill9").val(refill9);
}

if (moment("9am", "h:mma").isBefore(now)) {
    $("#testing").attr("class", "past");
}

remember();