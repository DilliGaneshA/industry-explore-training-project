function displayval(val){
    document.getElementById("display").value=document.getElementById("display").value+val;

}
function clr(){
    document.getElementById("display").value="";

}
function cal() {
    var user = document.getElementById("display").value;
    try {
        var result = eval(user); // evaluates the expression entered by the user
        document.getElementById("display").value = result; // displays the result
    } catch (error) {
        console.error("Error in calculation:", error);
        document.getElementById("display").value = "Error"; // handle invalid input gracefully
    }
}
