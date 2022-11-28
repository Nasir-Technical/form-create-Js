var textinput = document.getElementById("inp")
var errorinput = document.getElementById("error")
var a = [];

function addvalue(){
    var b = textinput.value;
    if (b == ""){
        errorinput.value = "entervalue";
    } else {
      a.push(b);
      console.log(a);
    }
}