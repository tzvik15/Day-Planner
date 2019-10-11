$("#cell1").on("click", function(event){
    var text = (this).parentElement.childNodes[0].value;
    var saved = JSON.parse(localStorage.getItem("memo1")) || [];
    saved.splice(0);
    saved.push({text});
    localStorage.setItem("memo1", JSON.stringify(saved));
})
$("#cell2").on("click", function(event){
    var text = (this).parentElement.childNodes[0].value;
    var saved = JSON.parse(localStorage.getItem("memo2")) || [];
    saved.splice(0);
    saved.push({text});
    localStorage.setItem("memo2", JSON.stringify(saved));
})
$("#cell3").on("click", function(event){
    var text = (this).parentElement.childNodes[0].value;
    var saved = JSON.parse(localStorage.getItem("memo3")) || [];
    saved.splice(0);
    saved.push({text});
    localStorage.setItem("memo3", JSON.stringify(saved));
})
$("#cell4").on("click", function(event){
    var text = (this).parentElement.childNodes[0].value;
    var saved = JSON.parse(localStorage.getItem("memo4")) || [];
    saved.splice(0);
    saved.push({text});
    localStorage.setItem("memo4", JSON.stringify(saved));
})
$("#cell5").on("click", function(event){
    var text = (this).parentElement.childNodes[0].value;
    var saved = JSON.parse(localStorage.getItem("memo5")) || [];
    saved.splice(0);
    saved.push({text});
    localStorage.setItem("memo5", JSON.stringify(saved));
})
$("#cell6").on("click", function(event){
    var text = (this).parentElement.childNodes[0].value;
    var saved = JSON.parse(localStorage.getItem("memo6")) || [];
    saved.splice(0);
    saved.push({text});
    localStorage.setItem("memo6", JSON.stringify(saved));
})
$("#cell7").on("click", function(event){
    var text = (this).parentElement.childNodes[0].value;
    var saved = JSON.parse(localStorage.getItem("memo7")) || [];
    saved.splice(0);
    saved.push({text});
    localStorage.setItem("memo7", JSON.stringify(saved));
})
$("#cell8").on("click", function(event){
    var text = (this).parentElement.childNodes[0].value;
    var saved = JSON.parse(localStorage.getItem("memo8")) || [];
    saved.splice(0);
    saved.push({text});
    localStorage.setItem("memo8", JSON.stringify(saved));
})
$("#cell9").on("click", function(event){
    var text = (this).parentElement.childNodes[0].value;
    var saved = JSON.parse(localStorage.getItem("memo9")) || [];
    saved.splice(0);
    saved.push({text});
    localStorage.setItem("memo9", JSON.stringify(saved));
})
