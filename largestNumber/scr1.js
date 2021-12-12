
function largestno(){
    var f = document.getElementById("fno").value;
    var s = document.getElementById("2ndno").value;
    var f = parseInt(f);
    var s = parseInt(s);
    text = "Largest number is " ;
    if(f>s){
        text+=f
    }
    else{
        text+=s
    }
    document.getElementById("largest").innerHTML=text;

}