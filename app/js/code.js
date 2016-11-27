var i=1;
var leftBut =  document.getElementsByClassName("flip-buttons__vector-left")[0];
var rightBut = document.getElementsByClassName("flip-buttons__vector-right")[0];
var buttArr = document.getElementsByClassName("butts");

rightBut.addEventListener("click" , function (e) {
    e.preventDefault();
    if (i >=5) {
        i = 5;
    }
    else i++;
    toogle();

});
leftBut.addEventListener("click", function (e) {
    e.preventDefault();
    if ( i<=1){
        i =1
    }
    else i--;
    toogle();
})

function toogle() {
    for (var j=0; j<buttArr.length;j++){
        if (buttArr[j].innerHTML == i){
            for (var k=0; k<buttArr.length; k++){
                buttArr[k].classList.remove("flip");
            }
            buttArr[j].classList.add("flip");
        }
    }
}

function myFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "responsive") {
        x.className += " show";
    } else {
        x.className = "responsive";
    }
}