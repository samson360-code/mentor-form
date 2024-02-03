var form = document.getElementsByTagName("form")[0];
var inputs = document.querySelectorAll("input");
var invalid = document.querySelectorAll(".invalid");
var icon = document.querySelectorAll(".error-icon");

function myFunction(event) {
    var counter=0;
    event.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nameRegex = /^[a-zA-Z\s]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\W]{8,}$/;
    if (!nameRegex.test(inputs[0].value)) {
        inputs[0].style.outlineColor="var(--Red)";
        invalid[0].style.display = "block";
        icon[0].style.display = "block";
        counter--;

    }
    else {
        inputs[0].style.outlineColor="hsl(249, 10%, 26%, 0.5)";        
        invalid[0].style.display = "none";
        icon[0].style.display = "none";
        counter++;
    }
    if (!nameRegex.test(inputs[1].value)) {
        inputs[1].style.outlineColor="var(--Red)";
        invalid[1].style.display = "block";
        icon[1].style.display = "block";
        counter--;
    }
    else {
        inputs[1].style.outlineColor="hsl(249, 10%, 26%, 0.5)";        
        icon[1].style.display = "none";
        invalid[1].style.display = "none";
        counter++;

    }
    if (!emailRegex.test(inputs[2].value)) {
        inputs[2].style.outlineColor="var(--Red)";
        invalid[2].style.display = "block";
        icon[2].style.display = "block";

    }
    else {
        inputs[2].style.outlineColor="hsl(249, 10%, 26%, 0.5)";        
        invalid[2].style.display = "none";
        icon[2].style.display = "none";
        counter++;

    }
    if (!passwordRegex.test(inputs[3].value)) {
        inputs[3].style.outlineColor="var(--Red)";
        invalid[3].style.display = "block";
        icon[3].style.display = "block";
        counter--;
    }
    else {
        inputs[3].style.outlineColor="hsl(249, 10%, 26%, 0.5)";        
        invalid[3].style.display = "none";
        icon[3].style.display = "none";
        counter++;
    }
    if(counter==4){
        form.submit();
        counter=0;

    }
}
