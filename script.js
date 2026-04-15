function highlight() {
    const boldWords = document.querySelectorAll("strong");
    boldWords.forEach(function(word) {
        word.style.color = "rgb(0, 128, 0)";
    });
}
function return_normal() {
    const boldWords = document.querySelectorAll("strong");

    boldWords.forEach(function(word) {
        word.style.color = "rgb(0, 0, 0)";
    });
}
const link = document.querySelector("a");
link.addEventListener("mouseover", highlight);
link.addEventListener("mouseout", return_normal);