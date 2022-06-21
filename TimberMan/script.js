let currentMove = "";
const possibleDirections = ["Left", "Right","None"];
let branchs = [];
let indexOfBranch = 0;
let score = 0;
let isPlaying = false;

document.getElementById("playButton").onclick = () => {
    document.getElementById("menu").style.display = "none";
    isPlaying = true;
    document.getElementById("score").innerHTML = 0;
}

document.getElementById("importButton").onclick = () => {
    if (document.getElementById("linkInput").value == ""){
        alert("Paste Link to the Image! Refresh to reset background");
    }
    else {
        document.body.style.backgroundImage = "url('" + document.getElementById("linkInput").value + "')";
    }
}

document.addEventListener('keydown', (event) => {
    if (isPlaying){
        var key = event.key;
        if (key == "a" || key == "A" || key == "J" || key == "j"){
            currentMove = "Left";
            checkIfPlayerIsDead();
            indexOfBranch += 1;
            goLeft();
            generatingBranches();
            IfWin();
        }
        else if (key == "d" || key == "D" || key == "l" || key == "L"){
            currentMove = "Right";
            checkIfPlayerIsDead();
            indexOfBranch += 1;  
            goRight();
            generatingBranches();
            IfWin();
        }
    }
}, false);

function goLeft() {
    document.getElementById("character").style.marginLeft = "56vh";
}

function goRight() {
    document.getElementById("character").style.marginLeft = "120vh";
}

function createListOfBranch(){

    for (let i = 0;i < 999;i++){
        const randomNumber = Math.floor(Math.random() * 3);
        branchs.push(possibleDirections[randomNumber]);
    }
}

function generatingBranches(){
    for (let i = 0;i<3;i++){
        if (branchs[indexOfBranch + i] == "Right"){
            document.getElementById("branch" + i).style.marginLeft = "985px";
        }
        else if (branchs[indexOfBranch + i] == "Left"){
            document.getElementById("branch" + i).style.marginLeft = "585px"
        }
        else if (branchs[indexOfBranch + i] == "None"){
            document.getElementById("branch" + i).style.marginLeft = "-585px"
        }
    }
}

function checkIfPlayerIsDead(){
    if (currentMove == branchs[indexOfBranch]){
        alert("You Died, with " + score + " Points!")
        resetGame();
    }
    else {
        score += 1
        document.getElementById("score").innerHTML = score;
    }
}

const IfWin = () => {
    if (score == 1000){
        alert("You Win!");
        resetGame();
    }
}

const resetGame = () => {
    document.getElementById("menu").style.display = "inline";
    score = 0;
    branchs = [];
    createListOfBranch();
    generatingBranches();
}

createListOfBranch();
generatingBranches();