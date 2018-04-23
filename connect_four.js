var tableVar = [[0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0]]


function changeColor(buttonID) {
    buttonID.style.background = '#ff0000';
}

var tablearea = document.getElementById('tablearea');
var table = document.createElement('table');
tablearea.appendChild(table);
var tr = [];
var td1 = document.createElement('td');
var button = document.createElement('button');
for (var i = 1; i < 7; i++) {
    tr[i] = document.createElement('tr');
    for (var j = 1; j < 8; j++) {
        button = document.createElement('button');
        td1 = td1.appendChild(button);
        button.setAttribute('class', 'button');
        button.setAttribute('id', 'button' + i + 'x' + j)
        button.addEventListener("click", changeColor)
        tr[i].appendChild(td1);
    }
    table.appendChild(tr[i]);
}
