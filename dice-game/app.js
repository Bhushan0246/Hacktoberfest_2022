let global0=0;
let global1=0;
let current=0;
let active=0;
let flag=0;
document.querySelector(".dice").style.display="none";
document.querySelector(".roll").addEventListener("click",()=>{
 if (flag===0){
    let random=Math.floor(Math.random()*6)+1;
    if(random!=1)
        {
            document.querySelector(".current_"+active).textContent=random;
            let dice= document.querySelector(".dice");
            dice.style.display="block";
            dice.src=`dice-${random}.png`;
            if(active===0)
                {
                 global0=global0+random;
            document.querySelector(".main_"+active).textContent=global0;   
                }
             else
                {
                 global1=global1+random;
            document.querySelector(".main_"+active).textContent=global1;   
                }
            if(global0>=20)
                { 
                    flag=1;   
                    document.querySelector(".player1").textContent="WINNER!";
                      document.querySelector(".dice").style.display="none";
                }
            else if(global1>=20)
                {
                    flag=1;
                document.querySelector(".player2").textContent="WINNER!";
                document.querySelector(".dice").style.display="none";
            }
        }
    else{
        current=0;
         document.querySelector(".current_"+active).textContent=current;
        if(active===0)
            {
                document.querySelector('.part1').classList.remove('active');
                document.querySelector(".part2").classList.add("active");
                global0=0;
                document.querySelector(".main_"+active).textContent=global0;
                active=1;
            }
        else{
                document.querySelector(".part2").classList.remove("active");
                document.querySelector(".part1").classList.add("active");
                global1=0;
                document.querySelector(".main_"+active).textContent=global1;
                active=0;
            }
        document.querySelector(".dice").style.display="none";
    }
 }
});

document.querySelector(".btn").addEventListener("click",()=>{
    global1=0;
    global0=0;
    current=0;
    active=0;
    flag=0;
    document.querySelector(".main_0").textContent=global0;
    document.querySelector(".main_1").textContent=global1;
     document.querySelector(".current_0").textContent=current;
     document.querySelector(".current_1").textContent=current;
    document.querySelector(".player1").textContent="PLAYER 1";
    document.querySelector(".player2").textContent="PLAYER 2";
    document.querySelector(".part2").classList.remove("active");
     document.querySelector(".part1").classList.add("active");
    document.querySelector(".dice").style.display="none";
    
})
document.querySelector(".hold").addEventListener("click",()=>{
    if(flag===0)
    {
    current=0;
    document.querySelector(".current_"+active).textContent=current;
    document.querySelector(".dice").style.display="none";
   if(active===0)
            {
                document.querySelector('.part1').classList.remove('active');
                document.querySelector(".part2").classList.add("active");
                active=1;
            }
    else{
        document.querySelector('.part2').classList.remove('active');
                document.querySelector(".part1").classList.add("active");
                active=0;
       }
    }
})