const gameBoard = document.querySelector("#gameboard")
const showInfo = document.querySelector("#info")
const showScore = document.querySelector("#score_history")
const player1 = document.querySelector("#p1_name")
const player2 = document.querySelector("#p2_name")
const score1 = document.querySelector("#score1")
const score2 = document.querySelector("#score2")

const empty_cells= ["","","","","","","","",""]

function getVal() {
  val = document.querySelector('#player1_name').value;
  player1.textContent = val
  console.log(val);

  val2 = document.querySelector('#player2_name').value;
  player2.textContent = val2
  console.log(val2);
}

let turn = "circle"
showInfo.textContent = "circle goes first"

function initialize_gameboard(){
    empty_cells.forEach((cell, index)=>{
        const create_element = document.createElement('div')
        create_element.classList.add('square')
        create_element.id = index
        create_element.addEventListener('click', addGo)
        gameBoard.append(create_element)
    })
}
initialize_gameboard()

function addGo(e){
    const display = document.createElement('div')
    display.classList.add(turn)
    e.target.append(display)
    turn = turn === "circle" ? "cross" : "circle"
    if (turn ==="circle"){
    showInfo.textContent = "its now " + val + "'s turn"

    }
    else{
    showInfo.textContent = "its now " + val2 + "'s turn"

    }
    e.target.removeEventListener("click", addGo)
    check_score()
}

function check_score(){
    const squareGroup = document.querySelectorAll(".square")
    const combos = [ 
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]]

    combos.forEach(array => {
        const circelWin = array.every(cell => squareGroup[cell].firstChild?.classList.contains('circle'))

    if(circelWin){
        showInfo.textContent = "Circle wins"
        var currentscore= parseInt(score1.innerHTML)
        var newValue = currentscore + 1;
        score1.innerHTML= newValue;
        squareGroup.forEach(square=> square.replaceWith(square.cloneNode(true)))
        retun
    }

    })

    combos.forEach(array => {
        const crossWin = array.every(cell => squareGroup[cell].firstChild?.classList.contains('cross'))

    if(crossWin){
        showInfo.textContent = "cross wins"
        var currentscore2= parseInt(score2.innerHTML)
        var newValue2 = currentscore2 + 1;
        score2.innerHTML= newValue2;
        squareGroup.forEach(square=> square.replaceWith(square.cloneNode(true)))
        return
    }

    })

}

function restart(){
    gameBoard.innerHTML=''
    initialize_gameboard()
}

function new_game(){
    gameBoard.innerHTML=''
    initialize_gameboard()
    score1.innerHTML=0
    score2.innerHTML=0
}
