const stars = document.querySelectorAll(".star");
const ratingDisplay = document.getElementById("rating");
stars.forEach((star) => {
    star.addEventListener("click", () => {
    const value = parseInt(star.getAttribute("data-value"));
    updateRating(value);
});
});

function updateRating(value){
    stars.forEach((star) =>{
        const starValue = parseInt(star.getAttribute("data-value"));
        star.classList.toggle("filled", starValue <= value);
    });
    ratingDisplay.textContent = value;
}
