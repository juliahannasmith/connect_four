var turnCount = 1;
var tableVar = [[0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0]];


function changeColor(e) {
    if(turnCount%2 == 0){
    e.currentTarget.style.background = '#ff0000';
    turnCount++
    return document.getElementById('message').textContent = "Player 1";
    } else {
     e.currentTarget.style.background = '#000000';
    turnCount++
    return document.getElementById('message').textContent = "Player 2";
    }
}


var tablearea = document.getElementById('tablearea');
var table = document.createElement('table');
tablearea.appendChild(table);
var tr = [];
var td1 = document.createElement('td');
for (var i = 1; i < 7; i++) {
    tr[i] = document.createElement('tr');
    for (var j = 1; j < 8; j++) {
        var button = document.createElement('button');
        td1 = td1.appendChild(button);
        button.setAttribute('class', 'button');
        button.setAttribute('id', 'button' + i + 'x' + j);
        var buttonID = document.getElementById('button' + i + 'x' + j);
        button.addEventListener('click', changeColor);
        tr[i].appendChild(td1);
    }
    table.appendChild(tr[i]);
}
