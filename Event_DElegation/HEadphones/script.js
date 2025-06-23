const categoriesContainer=document.getElementById("categories");
categoriesContainer.addEventListener("click", (event) =>{
    const clickedElement = event.target;
    console.log(clickedElement); //<div class = "product" bis_skin_checked = "1"> Product A </div>
    if(clickedElement.classList.contains("product")){
       const parent = clickedElement.parentElement;
       console.log(parent);
       const category = parent.querySelector("h2").textContent; //querySelector traverse the DOM 
       // and returns the first matching value to get the value Product A
       console.log(category);
       const product = clickedElement.textContent; 
       console.log(product);
       console.log(`Clicked on ${product} in the ${category} category`);
    }
});
