const colorPalette = document.getElementById("colorPalette");
colorPalette.addEventListener("click", function(e){
const clickedElement = e.target;
if(clickedElement.classList.contains("color-box")){
    let color = clickedElement.style.backgroundColor;
    console.log(color);
    color = color.replace('rgb', 'rgba').replace(')', ', 0.2)');
    document.body.style.backgroundColor = color; //set the bg color - body-node obj, style-property, bgColor-attribute
}
});