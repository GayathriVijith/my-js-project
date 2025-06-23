const inputs = document.getElementById("inputs");
inputs.addEventListener("input", function(e){
    const target = e.target;
    console.log(target);
    const val = e.target.value;
    console.log(val);

if(isNaN(val)){
    target.value = "";
    return; 
};
if(val != ""){
    const next = target.nextElementSibling;
    if(next){
        next.focus();
    }
}
});
inputs.addEventListener("keyup", function(e){
    const target = e.target;
    console.log(target);
    const key = e.key.toLowerCase();
    console.log(key);
    if(key == "backspace" || key == "delete"){
        target.value = "";
        const prev = target.previousElementSibling;
        if(prev){
            prev.focus();
        }
        return;
    }
});
