
const gameBoard = document.querySelector("#gameboard")
const showInfo = document.querySelector("#info")

const empty_cells= ["","","","","","","","",""]

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
    showInfo.textContent = "its now " + turn + "'s turn"
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
        squareGroup.forEach(square=> square.replaceWith(square.cloneNode(true)))
        retun
    }

    })

    combos.forEach(array => {
        const crossWin = array.every(cell => squareGroup[cell].firstChild?.classList.contains('cross'))

    if(crossWin){
        showInfo.textContent = "Cross wins"
        squareGroup.forEach(square=> square.replaceWith(square.cloneNode(true)))
        return
    }

    })

}