var table = [[0, 0, 0, 0, 0, 0, 0],
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

var tr = [];

var td1 = document.createElement('td');
var td2 = document.createElement('td');

var button = document.createElement('button');

for (var i = 1; i < 6; i++) {
    tr[i] = document.createElement('tr');
    for (var j = 1; j < 7; j++) {
        tr[i].appendChild(button);
    }
    table.appendChild(tr[i]);

}

tablearea.appendChild(table);
