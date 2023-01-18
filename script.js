let currentPlayer = "cross";

let fields = [, , , , , , , , ,];
let AUDIO_WIN = new Audio("audio/win.mp3")
AUDIO_WIN.volume = 0.2;

function showShape(fieldId) {
    if (!fieldsAreFull())
        switchPlayer(fieldId);


    if (!fieldIsFilled(fieldId))
        fields[fieldId] = currentPlayer;

    draw();
    checkForWin();
}

function fieldIsFilled(fieldId) {
    return fields[fieldId] != undefined;
}

function fieldsAreFull() {
    let bool = true;
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == undefined) {
            bool = false;
        }
    }
    return bool;
}

function switchPlayer(fieldId) {
    if (fieldIsFilled(fieldId)) console.log("aa");
    if (fieldIsFilled(fieldId)) return;

    let player1 = document.getElementById("player-cross");
    let player2 = document.getElementById("player-circle");

    toggleOppacity(player1);
    toggleOppacity(player2);

    if (currentPlayer == "cross")
        currentPlayer = "circle";
    else if (currentPlayer == "circle")
        currentPlayer = "cross";
}

function toggleOppacity(field) {
    if (field.classList.contains("oppacity-50"))
        field.classList.remove("oppacity-50");
    else
        field.classList.add("oppacity-50");
}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == "cross") {
            let field = document.getElementById(`cross-${i + 1}`)
            field.classList.remove("hidden")
        }
        else if (fields[i] == "circle") {
            let field = document.getElementById(`circle-${i + 1}`)
            field.classList.remove("hidden")
        }
    }

}

function checkForWin() {
    if (fields[0] == fields[1] && fields[0] == fields[2] && fields[0]) {
        win(fields[0]);
        showWinAnimation(0, 0, -1);
    }

    if (fields[0] == fields[3] && fields[0] == fields[6] && fields[0]) {
        win(fields[0]);
        showWinAnimation(90, -1);
    }

    if (fields[1] == fields[4] && fields[1] == fields[7] && fields[1]) {
        win(fields[1]);
        showWinAnimation(90);
    }

    if (fields[2] == fields[5] && fields[2] == fields[8] && fields[2]) {
        win(fields[2]);
        showWinAnimation(90, 1);
    }

    if (fields[3] == fields[4] && fields[3] == fields[5] && fields[3]) {
        win(fields[3]);
        showWinAnimation();
    }

    if (fields[6] == fields[7] && fields[6] == fields[8] && fields[6]) {
        win(fields[6]);
        showWinAnimation(0, 0, 1);
    }

    if (fields[0] == fields[4] && fields[0] == fields[8] && fields[0]) {
        win(fields[0]);
        showWinAnimation(45);
    }

    if (fields[2] == fields[4] && fields[2] == fields[6] && fields[2]) {
        win(fields[2]);
        showWinAnimation(-45);
    }
}

function win(winner) {
    console.log(winner + " WINS!");
    playWinSound();
    showWinDisplay(winner);
}

function playWinSound() {
    AUDIO_WIN.pause();
    AUDIO_WIN.currentTime = 0;
    AUDIO_WIN.play();
}

function showWinDisplay(winner) {
    let display = document.getElementById("winDisplay");
    display.parentNode.classList.remove("hidden");
    display.innerHTML = winner.toUpperCase() + " WINS!";
}

function hideWinDisplay() {
    let display = document.getElementById("winDisplay");
    display.parentNode.classList.add("hidden");
}

function showWinAnimation(rotation, offset_x, offset_y) {
    let line = document.getElementById("winLine");
    switch (rotation) {
        case 45:
            line.classList.add("rotate-45")
            break;

        case -45:
            line.classList.add("rotate-minus-45")
            break;

        case 90:
            line.classList.add("rotate-90")
            break;

        default:
            line.classList.add("rotate-0")
            break;
    }

    switch (offset_x) {
        case -1:
            line.style = "translate:-200px";
            break;

        case 1:
            line.style = "translate:200px";
            break;
    }

    switch (offset_y) {
        case -1:
            line.style = "translate:0 -200px";
            break;

        case 1:
            line.style = "translate:0 200px";
            break;
    }



}

function replay() {
    hideWinDisplay();
    clearFields();
    clearLine();
}


function clearLine() {
    let line = document.getElementById("winLine");
    line.classList = "horizontal-line";
    line.style = "";
}
function clearFields() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == "cross") {
            let field = document.getElementById(`cross-${i + 1}`)
            field.classList.add("hidden")
        }
        else if (fields[i] == "circle") {
            let field = document.getElementById(`circle-${i + 1}`)
            field.classList.add("hidden")
        }
        fields[i] = undefined;
    }
}