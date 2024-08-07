let rows=document.querySelectorAll(".row");
let resetbtn=document.querySelector("#reset-btn");
let newgameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true; //player X,O
const winpatterns=[
    [0,1,2],
    [3,4,5],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [6,7,8],
];
rows.forEach((row)=> {
row.addEventListener("click",() => {
    console.log("button was clicked");
    if(turnO){
        row.innerText="O";
        turnO=false;
    }
    else{
        row.innerText="X";
        turnO=true; 
    }
    row.disabled=true;

    checkwinner();
});
});
const resetgame=()=>{
    turnO=true;
    enablerows();
    msgContainer.classList.add("hide");
}
const disablerows=()=>{
    for(let row of rows){
        row.disabled=true;
    }
}
const enablerows=()=>{
    for(let row of rows){
        row.disabled=false;
        row.innerText="";
    }
}
const showWinner=(winner)=>{
msg.innerText=`Congratulations winner is ${winner}`
msgContainer.classList.remove("hide");
}
const  checkwinner=()=>{
for(let pattern of winpatterns){
    let pos1Val=rows[pattern[0]].innerText;
    let pos2Val=rows[pattern[1]].innerText;
    let pos3Val=rows[pattern[2]].innerText;

    if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
    if(pos1Val===pos2Val && pos2Val===pos3Val){
        showWinner(pos1Val);
    }
}
}};
newgameBtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);