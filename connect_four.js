var table = [[0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0]]


function changeColor(buttonID) {
    buttonID.style.background = '#ff0000';
}

function table() {
    for (i = 0; i < 5; i++) {
        table.appendChild()
        for (j = 0; j < 6; j++) {

        }
    }
}



var tablearea = document.getElementById('tablearea');

var table = document.createElement('table');

var tr = [];

var td1 = document.createElement('td');
var td2 = document.createElement('td');

var button = document.createElement('button');

for (var i = 1; i < 4; i++) {
    tr[i] = document.createElement('tr');
    for (var j = 1; j < 4; j++) {
        td1.appendChild(button);
        td2.appendChild(button);
    }
    table.appendChild(tr[i]);

}

tablearea.appendChild(table);
