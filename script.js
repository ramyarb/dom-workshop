function changeTextColor(color)
{
    document.getElementById("card-text").style.color = color;
}
const newLocal = document.getElementById("user-text").textContent;
function updateText()
{
    var userTxt = newLocal;
    document.getElementById("card-text").textContent = userTxt;
}