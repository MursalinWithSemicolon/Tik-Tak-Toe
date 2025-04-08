let audio = new Audio("mixkit-on-or-off-light-switch-tap-2585.wav");
let turn = "X";
let boxes = document.querySelectorAll(".box");
let gameover= new Audio("gameover.mp3");

let changeturn = () => {
    turn = (turn === "X") ? "O" : "X";
};

let checkwin = () => {
    let win = [
        [0,1,2], [3,4,5], [6,7,8],  
        [0,3,6], [1,4,7], [2,5,8],  
        [0,4,8], [2,4,6]            
    ];
    
    win.forEach(e => {
        if ((boxes[e[0]].innerText === boxes[e[1]].innerText) &&
            (boxes[e[2]].innerText === boxes[e[1]].innerText) &&
            boxes[e[0]].innerText !== "") {

            document.querySelector(".winner").innerText = boxes[e[0]].innerText + " wins the game";
            document.querySelector(".gif").style.display = "block";
            document.querySelector(".gif").style.width = "200px";
            gameover.volume=1;
            gameover.play();
        }
    });
};

boxes.forEach(element => {
    element.addEventListener("click", () => {
        if (element.innerText === "") { 
            element.innerText = turn;
            audio.play();
            checkwin();
            changeturn();
        }
    });
});

let reset=document.querySelector(".reset");
reset.addEventListener("click", () => {
    boxes.forEach(e => {
        e.innerText = "";
    });
    turn = "X";
    document.querySelector(".winner").innerText = "";
    
    let imgElement = document.querySelector(".gif");
    imgElement.style.display = "none";  // Hide GIF again
    
    console.log("Game reset!");
});


