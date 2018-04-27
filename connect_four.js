var turnCount = 1;

var tableVar = [[0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0]];

function sum(){
    for (var i = 0, sum = 0; i < board.length; sum += board[i++]);

}
function changeColor(e) {
    if (e.currentTarget.style.background == "#ff0000"||e.currentTarget.style.background == "#000000") {
        return document.getElementById('message').textContent = "INVALID MOVE!!!";

    } else {
        if (turnCount % 2 == 0) {
            e.currentTarget.style.background = '#ff0000';
            turnCount++
            return document.getElementById('message').textContent = "Player 1";
        } else {
            e.currentTarget.style.background = '#000000';
            turnCount++
            return document.getElementById('message').textContent = "Player 2";
        }
    }
}


var tablearea = document.getElementById('tablearea');
var table = document.createElement('table');
tablearea.appendChild(table);
var tr = [];
var td = document.createElement('td');
for (var i = 0; i < 6; i++) {
    tr[i] = document.createElement('tr');
    for (var j = 0; j < 7; j++) {
        var button = document.createElement('button');
        td = td.appendChild(button);
        button.setAttribute('class', 'button');
        button.id = i + 'x' + j
        button.addEventListener('click', changeColor);
        tr[i].appendChild(td);
    }
    table.appendChild(tr[i]);
}
