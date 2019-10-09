//global variables
var time = 9;


//a function that displays and updates the time dynamically (the function call is built into the setInterval command)
var update = function() {
    $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
}
setInterval(update, 1000);




//a function that creates calendar table rows and collumns

var addHour = function() {
    var newRow = $("<tr>");
    newRow.attr("class", "newRow");
    var newTh = $("<th>");
    newTh.attr("scope", "row");
    newTh.attr("class", "th");
    $(".newRow").append(newTh);
    var newTd = $("<td>");
    newTd.attr("class", "td");
    $(".newRow").append(newTd);
    $(".th").text(time + "-" + (time+1));
    $(".table").append(newRow);
    console.log(time);
    time++;
}

