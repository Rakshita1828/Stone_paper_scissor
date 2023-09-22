
const score1=JSON.parse(localStorage.getItem('score')) ||{
    yourSc:0,
    compSc:0,
};

function getResult(user,comp)
{
    var res="";
    if((user=='stone' && comp=='scissors') || (user=='paper' && comp=='scissors') || (user=='scissors' && comp=='paper'))
    {
        res="win";
    }
    else if(user==comp)
    {
        res="tie";
    }
    else
    {
        res="lost";
    }
    
    return res;


};

//var tempImage1="STONE.png";
//var tempImage2;

function Play(user)
{
    var arr=["stone","paper","scissors"];
    var randomIndex=Math.floor(Math.random()*arr.length);
    var comp=arr[randomIndex];
   
    const button1=document.querySelector(".yourScore");

    const button2=document.querySelector(".compScore");
    const res=getResult(user,comp);
    if(res=="win")
    {
        score1.yourSc++;
        console.log(res);
       
        var winnerURL = "index2.html?user=" + encodeURIComponent(user) + "&comp=" + encodeURIComponent(comp);

        
        window.location.href=winnerURL;
       
    }

    else if(res=="lost")
    {
        score1.compSc++;
        console.log(res);

        var winnerURL = "index3.html?user=" + encodeURIComponent(user) + "&comp=" + encodeURIComponent(comp);

        
        window.location.href=winnerURL;
       
     }
    
     else
     {
         var winnerURL = "index4.html?user=" + encodeURIComponent(user) + "&comp=" + encodeURIComponent(comp);

        
        window.location.href=winnerURL;
     }

    localStorage.setItem("score",JSON.stringify(score1));
}


function display()
{
    //open index5.html
       window.location.href="index5.html";
}

function playAgain()
{
    //open index1.html
    window.location.href="index.html";

}


function openModal()
{
    var modal1=document.querySelector(".modal")
    modal1.style.display='block';
}


function Close()
{
    var modal1=document.querySelector(".modal")
    modal1.style.display='none';
}




