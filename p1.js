let boxes=document.querySelectorAll(".box");
let newgame=document.querySelector(".newG");
let resetbtn=document.querySelector(".reset");
let p1=document.getElementById("p");
let msg=document.querySelector(".msg");
let xcount=document.querySelector(".xcount")
let ocount=document.querySelector(".ocount")
let countx=0;
let counto=0

 let turn0=true;

 const Win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
 //entering pattern in box
for(i=0;i<boxes.length;i++)
{
    boxes[i].addEventListener("click" ,display);
}
function display(event)
{
     let box=event.target;
   if(turn0===true)
   {
   
    box.innerHTML="O";
    turn0=false;
   }
   else{
    box.innerHTML="X";
    turn0=true;
   }
   box.disabled=true;
   CheckWinner();
}

function CheckWinner(pattern)
{
    for ( let pattern of Win){
  let pos1val=boxes[pattern[0]].innerText;
  let pos2val=boxes[pattern[1]].innerText;
  let pos3val=boxes[pattern[2]].innerText;
 
  if(pos1val!=""  &&pos2val !="" &&pos3val !=""){
    if(pos1val===pos2val && pos2val===pos3val)
    {
       showWinner(pos1val);
   return;
    }
  }
    }
  
}

function showWinner(winner)
{
    p1.innerHTML = `WINNER IS ${winner}`;
    msg.classList.remove("hide");
    disableBtn();

    if (winner === 'O') {
        counto += 1;
        ocount.innerHTML = counto;
      } else if (winner === 'X') {
        countx += 1;
        xcount.innerHTML = countx;
      }
}
//disable all buttons after winning

function disableBtn()
{
    for(let i=0;i<boxes.length;i++)
    {
        boxes[i].disabled=true;
    }
}
newgame.addEventListener("click",reset1);
resetbtn.addEventListener("click",reset);

function reset()
{
    for(let i=0;i<boxes.length;i++)
        {
            boxes[i].innerHTML="";
            boxes[i].disabled=false;
        }
    turn0=true;
    msg.classList.add("hide");

}

function reset1()
{
    for(let i=0;i<boxes.length;i++)
        {
            boxes[i].innerHTML="";
            boxes[i].disabled=false;
        }
    turn0=true;
    msg.classList.add("hide");
 xcount.innerHTML="0";
 ocount.innerHTML="0";
}