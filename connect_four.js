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

for (var i = 1; i < 7; i++) {
    tr[i] = document.createElement('tr');
    for (var j = 1; j < 8; j++) {
        tr[i].appendChild(td1);
        td1.appendChild(button);

    }
    table.appendChild(tr[i]);

}



var tablearea = document.getElementById('tablearea');
tablearea.appendChild(table);

for (var i = 1; i < 7; i++) {
    tr[i] = document.createElement('tr');
    for (var j = 1; j < 8; j++) {
        var td1 = document.createElement('td');
        td1.appendChild(document.createElement('Button'));
        tr[i].appendChild(td1);
    }
    table.appendChild(tr[i]);
}
