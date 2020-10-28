function LengthOfText() {

    var txt = "The quick brown fox jumped over the lazy dog.";
var sln = "length = "+ txt.length + " characters";
document.getElementById("demo").innerHTML = sln;
}

function FindSubString() {
    var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
document.getElementById("demo2").innerHTML = pos;
}