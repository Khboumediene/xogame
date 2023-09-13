let x = document.getElementsByClassName("x");
let o = document.getElementsByClassName("o");
let cases = document.getElementsByClassName("c");
let gameplan =document.getElementById('gameplan');
let cons = 1;
let xo =o[0];
let etat = [];
let a3 = document.getElementsByClassName("a3"); 
let yo = document.getElementById("yo");
let yx = document.getElementById("yx");
let ye = document.getElementById("ye");
let py = document.getElementById("py");
gameplan.onclick = function doSomething()
   {
    cons++;
    console.log(cons);
    for(let i=0;i<=4;i++){
      if(cons%2==0){
        xo =x[i];
    }
    } 
    for(let j=0;j<=4;j++){
        if(cons%2!==0){
          xo =o[j];
      }  
    }
    }
cases[0].onclick = function(){cases[0].appendChild(xo);xo.style.display = "block";if (xo==x[0]||xo==x[1]||xo==x[2]||xo==x[3]||xo==x[4])etat[0]=1;else etat[0]=0;gametest();}
cases[1].onclick = function(){cases[1].appendChild(xo);xo.style.display = "block";if (xo==x[0]||xo==x[1]||xo==x[2]||xo==x[3]||xo==x[4])etat[1]=1;else etat[1]=0;gametest()}
cases[2].onclick = function(){cases[2].appendChild(xo);xo.style.display = "block";if (xo==x[0]||xo==x[1]||xo==x[2]||xo==x[3]||xo==x[4])etat[2]=1;else etat[2]=0;gametest()}
cases[3].onclick = function(){cases[3].appendChild(xo);xo.style.display = "block";if (xo==x[0]||xo==x[1]||xo==x[2]||xo==x[3]||xo==x[4])etat[3]=1;else etat[3]=0;gametest()}
cases[4].onclick = function(){cases[4].appendChild(xo);xo.style.display = "block";if (xo==x[0]||xo==x[1]||xo==x[2]||xo==x[3]||xo==x[4])etat[4]=1;else etat[4]=0;gametest()}
cases[5].onclick = function(){cases[5].appendChild(xo);xo.style.display = "block";if (xo==x[0]||xo==x[1]||xo==x[2]||xo==x[3]||xo==x[4])etat[5]=1;else etat[5]=0;gametest()}
cases[6].onclick = function(){cases[6].appendChild(xo);xo.style.display = "block";if (xo==x[0]||xo==x[1]||xo==x[2]||xo==x[3]||xo==x[4])etat[6]=1;else etat[6]=0;gametest()}
cases[7].onclick = function(){cases[7].appendChild(xo);xo.style.display = "block";if (xo==x[0]||xo==x[1]||xo==x[2]||xo==x[3]||xo==x[4])etat[7]=1;else etat[7]=0;gametest()}
cases[8].onclick = function(){cases[8].appendChild(xo);xo.style.display = "block";if (xo==x[0]||xo==x[1]||xo==x[2]||xo==x[3]||xo==x[4])etat[8]=1;else etat[8]=0;gametest()}
function gametest(){
    if((etat[0]==0&&etat[0]==etat[3]&&etat[0]==etat[6])
        ||(etat[1]==0&&etat[1]==etat[4]&&etat[1]==etat[7]&&etat[4]==etat[7])
        ||(etat[2]==0&&etat[2]==etat[5]&&etat[2]==etat[8]&&etat[5]==etat[8])
        ||(etat[0]==0&&etat[0]==etat[1]&&etat[0]==etat[2]&&etat[1]==etat[2])
        ||(etat[3]==0&&etat[3]==etat[4]&&etat[3]==etat[5]&&etat[4]==etat[5])
        ||(etat[6]==0&&etat[6]==etat[7]&&etat[6]==etat[8]&&etat[7]==etat[8])
        ||(etat[0]==0&&etat[0]==etat[4]&&etat[0]==etat[8]&&etat[4]==etat[8])
        ||(etat[2]==0&&etat[2]==etat[4]&&etat[2]==etat[6]&&etat[4]==etat[6])){
        a3[0].style.display = "block";
        yo.style.display = "block";
    }
    else if((etat[0]==1&&etat[0]==etat[3]&&etat[0]==etat[6])
    ||(etat[1]==1&&etat[1]==etat[4]&&etat[1]==etat[7]&&etat[4]==etat[7])
    ||(etat[2]==1&&etat[2]==etat[5]&&etat[2]==etat[8]&&etat[5]==etat[8])
    ||(etat[0]==1&&etat[0]==etat[1]&&etat[0]==etat[2]&&etat[1]==etat[2])
    ||(etat[3]==1&&etat[3]==etat[4]&&etat[3]==etat[5]&&etat[4]==etat[5])
    ||(etat[6]==1&&etat[6]==etat[7]&&etat[6]==etat[8]&&etat[7]==etat[8])
    ||(etat[0]==1&&etat[0]==etat[4]&&etat[0]==etat[8]&&etat[4]==etat[8])
    ||(etat[2]==1&&etat[2]==etat[4]&&etat[2]==etat[6]&&etat[4]==etat[6])){
        a3[0].style.display = "block";
        yx.style.display = "block";
    }
    else if((cases[0].hasChildNodes())&&
        (cases[1].hasChildNodes())&&
        (cases[2].hasChildNodes())&&
        (cases[3].hasChildNodes())&&
        (cases[4].hasChildNodes())&&
        (cases[5].hasChildNodes())&&
        (cases[6].hasChildNodes())&&
        (cases[7].hasChildNodes())&&
        (cases[8].hasChildNodes())
        ){
        a3[0].style.display = "block";
        ye.style.display = "block";
    }
}
let o0 = document.getElementById("o0"); 
let o4 = document.getElementById("o4"); 
let o1 = document.getElementById("o1"); 
let o2 = document.getElementById("o2"); 
let o3 = document.getElementById("o3"); 
let x0 = document.getElementById("x0"); 
let x1 = document.getElementById("x1"); 
let x2 = document.getElementById("x2"); 
let x3 = document.getElementById("x3"); 
let x4 = document.getElementById("x4"); 
py.onclick = function(){
    a3[0].style.display = "none";
    yx.style.display = "none";
    yo.style.display = "none";
    ye.style.display = "none";
    o0.style.display = "none";
    o1.style.display = "none";
    o2.style.display = "none";
    o3.style.display = "none";
    o4.style.display = "none";
    x0.style.display = "none";
    x1.style.display = "none";
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "none";
    

    document.body.appendChild(o0);
    document.body.appendChild(o1);
    document.body.appendChild(o2);
    document.body.appendChild(o3);
    document.body.appendChild(o4);
    document.body.appendChild(x0);
    document.body.appendChild(x1);
    document.body.appendChild(x2);
    document.body.appendChild(x3);
    document.body.appendChild(x4);
    etat=[]
}

