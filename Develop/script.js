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
    // var fillList = ["#fill1", "#fill2", "#fill3", "#fill4", "#fill5", "#fill6", "#fill7", "#fill8", "#fill9"];
    // var storeList = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    // var refill = [1,2,3,4,5,6,7,8,9];
    // for (var j=0; j<fillList.length; j++){
    //     var k = j+1;
    //     var test = "refill" + k;  
        
        
        
    //    var past = (localStorage.storeList[j]);
    //     $(fillList[j]).val(test);
    // }}
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

function colors() {
    var t = moment().format("H");
    var textFields = ["#time1", "#time2", "#time3", "#time4", "#time5", "#time6", "#time7", "#time8", "#time9"];
    for (var i=0; i<textFields.length; i++) {
        var compareTime = i+9;
    if (t<compareTime) {
        $(textFields[i]).attr("class", "future");
    } else if (t > compareTime) {
        $(textFields[i]).attr("class", "past");
    } else $(textFields[i]).attr("class", "present");
    }
}
colors();
remember();