let currentPlayer = "cross";

let fields = [];

function showShape(fieldId) {
    fields[fieldId] = currentPlayer;
    if (!fieldsAreFull()) {
        switchPlayer();
        draw();
    }
}

function fieldsAreFull() {
    return fields.length >= 9;
}

function switchPlayer() {
    if (currentPlayer == "cross")
        currentPlayer = "circle";
    else if (currentPlayer == "circle")
        currentPlayer = "cross";
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