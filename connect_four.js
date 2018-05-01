var turnCount = 1;

var board = [[0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0]];

//Function called for each button clicked
var color = 0

function checkWin(e) {
    var marker = e.currentTarget;
    var array = board[e.currentTarget.id.charAt(0)];
    console.log(array)
    var position = board[e.currentTarget.id.charAt(0)][e.currentTarget.id.charAt(2)];
    console.log(position)
    //If for horizontal win
    //for loop for position in the array
    //check for same array dif position
    if (color == 1) {
        if (x) {
            document.getElementById('message').textContent = "Player 1 wins!";
        } else if (position - 1 == 1 && position - 2 == 1 && position - 3 == 1) {
            document.getElementById('message').textContent = "Player 1 wins!";
        }
    } else {
        if (position + 1 == -1 && position + 2 == -1 && position + 3 == -1) {
            document.getElementById('message').textContent = "Player 1 wins!";
        } else if (position - 1 == -1 && position - 2 == -1 && position - 3 == -1) {
            document.getElementById('message').textContent = "Player 1 wins!";
        }
    }
    //If for vertical win
    //for loop for dif array same position
    //check for dif array same position

    //If for diagonal win #1
    //check for dif array and dif position going up to the right
    //If for diagonal win #2
    //check for dif array and dif position ging up to the left
}

function changeColor(e) {
    if (board[e.currentTarget.id.charAt(0)][e.currentTarget.id.charAt(2)] == -1 || board[e.currentTarget.id.charAt(0)][e.currentTarget.id.charAt(2)] == 1) {
        document.getElementById('message').style.color = "#000000";
        document.getElementById('message').textContent = "INVALID MOVE!";
    }else if (turnCount % 2 == 0) {
        board[e.currentTarget.id.charAt(0)][e.currentTarget.id.charAt(2)] = -1
        e.currentTarget.style.background = '#ff0000';
        document.getElementById('message').textContent = "Player 1";
        document.getElementById('message').style.color = "#000000";
        turnCount++
        color = -1
    } else {
        board[e.currentTarget.id.charAt(0)][e.currentTarget.id.charAt(2)] = 1
        e.currentTarget.style.background = '#000000';
        document.getElementById('message').textContent = "Player 2";
        document.getElementById('message').style.color = "#ff0000";
        turnCount++
        color = 1
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
