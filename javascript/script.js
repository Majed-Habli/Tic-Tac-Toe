let new_game = document.getElementById("start_session")
new_game.addEventListener('click', redirect)
function redirect() {
    console.log("hello from button")
    location.href = "./html/gameScreen.html";
}
