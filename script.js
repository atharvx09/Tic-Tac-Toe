let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#newbtn");
let msgc = document.querySelector(".msgc");
let msg = document.querySelector("#msg");

let turnX = true;
let count = 0;

const winpat = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnX = true;
    count = 0;
    enableBoxes();
    msgc.classList.add("hide");
};

const showWinner = (winner) => {
    msg.innerHTML = `${winner}`;
    msgc.classList.remove("hide");
    disableb();
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
};

const disableb = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Clicked");
        if (turnX) {
            box.innerHTML = "X";
            turnX = false;
        } 
        
        else {
            box.innerHTML = "O";
            turnX = true;
        }

        box.disabled = true;
        count++;
        let iswin = checkWinner();
        if (count == 9 && !iswin) {
            showWinner("OOPs! The game was a Draw");
        }
    });
});

const checkWinner = () => {
    for (let pattern of winpat) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner("Winner is " + pos1Val);
                return true;
            }
        }
    }
};

newbtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
