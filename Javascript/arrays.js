function RemoveElement() {

    var fruits = ["Banana", "Orange", "Apple", "Mango"];

    document.getElementById("demo1").innerHTML = fruits;
    document.getElementById("demo2").innerHTML = fruits.pop();
    document.getElementById("demo3").innerHTML = fruits;
  
}

function AddElement() {

    var fruits = ["Banana", "Orange", "Apple", "Mango"];

    document.getElementById("demo4").innerHTML = fruits.push("Kiwi");
    document.getElementById("demo5").innerHTML = fruits;
}

function ShiftElement(){
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo6").innerHTML = fruits;
fruits.shift();
document.getElementById("demo7").innerHTML = fruits;
}

function UnshiftElement(){
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById("demo8").innerHTML = fruits;
    document.getElementById("demo9").innerHTML = fruits.unshift("Lemon");
    document.getElementById("demo10").innerHTML = fruits;
}

function AddSplice() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(2, 0, "Lemon", "Kiwi");
    document.getElementById("demo12").innerHTML = "New Array:<br>" + fruits;
  }

  function RemoveSplice() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(0, 1);
    document.getElementById("demo13").innerHTML = "New Array:<br>" + fruits;
  }

  function ConcatArrays(){
    var myGirls = ["Shambhavi", "Aditi"];
    var myBoys = ["Keyur", "Amar", "Jaishankar"];
    var myChildren = myGirls.concat(myBoys);
    
    document.getElementById("demo14").innerHTML = myChildren;

  }