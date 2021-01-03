var xmlhttp = new XMLHttpRequest();
var urlAdvice = "https://api.adviceslip.com/advice";
xmlhttp.open("GET", urlAdvice, true);
xmlhttp.send();

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        document.getElementsByClassName("test")[0].innerText = myArr.slip.advice;
    }
};
