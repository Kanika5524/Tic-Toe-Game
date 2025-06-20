let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-game");
let newgamebtn = document.querySelector("#new-game");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = () => {
    turnO = true;
    enableBoxes();
}
boxes.forEach((box)=>{
    box.addEventListener("click",() => {
       // console.log("Box was clicked");
        if(turnO){
        box.innerText = "O";
        turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        msgcontainer.classList.add("hide");
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
     for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;
        if(pos1Val != ""&& posVal2 != "" && posVal3 !=""){
        if(pos1Val===posVal2 && posVal2===posVal3){
           // console.log("winner",pos1Val);
            showWinner(pos1Val);
        }
     }
}
};

newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);