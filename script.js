const btn1=document.querySelector('#btn-1');
const btn2=document.querySelector('#btn-2');
const btn3=document.querySelector('#btn-3');
const btn4=document.querySelector('#btn-4');
const btn5=document.querySelector('#btn-5');
const btn6=document.querySelector('#btn-6');
const btn7=document.querySelector('#rules');


const container=document.querySelector('.screen');

function clearall(){
  container.innerHTML='';
}

var x=0;

function q(){
  x=document.getElementById('quantity');
  // alert("hell");
}

var y=0;
var z=x.value;

// while(y<x.value){
//   const val=[];
//   val[y]=0;
//   y++;
// }

const val=[];

var t=0;
var max=0;
var position=0;

// while(t<x.value){
  let sum=0;
  function addpara1(){
    clearall();
    let rand=Math.floor(Math.random()*6)+1;
    const bowler="the bowler shows "+rand+" and you show 1";
    const eli=document.createElement('p');
    eli.textContent=bowler;
    container.appendChild(eli);
    if (rand==1){
      const con="Player " + (t+1) + " is OUT with score of "+ sum;
      val[t]=sum;
      if(sum>max){
        position=t;
        max=sum;
      }
      t=t+1;
      sum=0;
      const elme=document.createElement('p');
      elme.textContent=con;
      container.appendChild(elme);
      if(t==x.value){
        const iop="Player " + (position+1) +" has won the tournament ";
        const rt=document.createElement('p');
        rt.textContent=iop;
        container.appendChild(rt);
        
        
        var table=document.createElement("table");
        var top=document.createElement("tr");
        var one=document.createElement("th");
        this.textContent="player number ";
        top.appendChild(one);
        const two=document.createElement("th");
        this.textContent="score ";
        top.appendChild(two);

        for(var i=0;i<t;i++){
          var row=document.createElement("tr");
          var pn=document.createElement("td");
          pn.textContent=i+1+" ";
          row.appendChild(pn);

          var sco=document.createElement("td");
          sco.textContent=val[i]+" ";
          row.appendChild(sco);
        }
        
        container.appendChild(table);
      }
    }
    else{
      sum+=1;
      const con = "your score is "+sum
      const elme=document.createElement('p');
      elme.textContent=con;
      container.appendChild(elme);
    }
  }
  function addpara2(){
    clearall();
    let rand=Math.floor(Math.random()*6)+1;
    const bowler="the bowler threw "+rand+" and you threw 2";
    const eli=document.createElement('p');
    eli.textContent=bowler;
    container.appendChild(eli);
    if (rand==2){
      const con="Player " + (t+1) + " is OUT with score of "+ sum;
      val[t]=sum;
      if(sum>max){
        position=t;
        max=sum;
      }
      t=t+1;
      sum=0;
      const elme=document.createElement('p');
      elme.textContent=con;
      container.appendChild(elme);
      if(t==x.value){
        const iop="Player " + (position+1) +" has won the tournament ";
        const rt=document.createElement('p');
        rt.textContent=iop;
        container.appendChild(rt);
        
        
        var table=document.createElement("table");
        var top=document.createElement("tr");
        var one=document.createElement("th");
        this.textContent="player number ";
        top.appendChild(one);
        const two=document.createElement("th");
        this.textContent="score ";
        top.appendChild(two);

        for(var i=0;i<t;i++){
          var row=document.createElement("tr");
          var pn=document.createElement("td");
          pn.textContent=i+1+" ";
          row.appendChild(pn);

          var sco=document.createElement("td");
          sco.textContent=val[i]+" ";
          row.appendChild(sco);
        }
        
        container.appendChild(table);
      }
    }
    else{
      sum+=2;
      const con = "your score is "+sum
      // sum+=2;
      const elme=document.createElement('p');
      elme.textContent=con;
      container.appendChild(elme);
    }
  }
  function addpara3(){
    clearall();
    let rand=Math.floor(Math.random()*6)+1;
    const bowler="the bowler threw "+rand+" and you threw 3";
    const eli=document.createElement('p');
    eli.textContent=bowler;
    container.appendChild(eli);
    if (rand==3){
      const con="Player " + (t+1) + " is OUT with score of "+ sum;
      val[t]=sum;
      if(sum>max){
        position=t;
        max=sum;
      }
      t=t+1;
      sum=0;
      const elme=document.createElement('p');
      elme.textContent=con;
      container.appendChild(elme);
      if(t==x.value){
        const iop="Player " + (position+1) +" has won the tournament ";
        const rt=document.createElement('p');
        rt.textContent=iop;
        container.appendChild(rt);
        
        
        var table=document.createElement("table");
        var top=document.createElement("tr");
        var one=document.createElement("th");
        this.textContent="player number ";
        top.appendChild(one);
        const two=document.createElement("th");
        this.textContent="score ";
        top.appendChild(two);

        for(var i=0;i<t;i++){
          var row=document.createElement("tr");
          var pn=document.createElement("td");
          pn.textContent=i+1+" ";
          row.appendChild(pn);

          var sco=document.createElement("td");
          sco.textContent=val[i]+" ";
          row.appendChild(sco);
        }
        
        container.appendChild(table);
      }
    }
    else{
      sum+=3;
      const con = "your score is "+sum
      // sum+=3;
      const elme=document.createElement('p');
      elme.textContent=con;
      container.appendChild(elme);
    }
  }
  function addpara4(){
    clearall();
    let rand=Math.floor(Math.random()*6)+1;
    const bowler="the bowler threw "+rand+" and you threw 4";
    const eli=document.createElement('p');
    eli.textContent=bowler;
    container.appendChild(eli);
    if (rand==4){
      const con="Player " + (t+1) + " is OUT with score of "+ sum;
      val[t]=sum;
      if(sum>max){
        position=t;
        max=sum;
      }
      t=t+1;
      sum=0;
      const elme=document.createElement('p');
      elme.textContent=con;
      container.appendChild(elme);
      if(t==x.value){
        const iop="Player " + (position+1) +" has won the tournament ";
        const rt=document.createElement('p');
        rt.textContent=iop;
        container.appendChild(rt);
        
        
        var table=document.createElement("table");
        var top=document.createElement("tr");
        var one=document.createElement("th");
        this.textContent="player number ";
        top.appendChild(one);
        const two=document.createElement("th");
        this.textContent="score ";
        top.appendChild(two);

        for(var i=0;i<t;i++){
          var row=document.createElement("tr");
          var pn=document.createElement("td");
          pn.textContent=i+1+" ";
          row.appendChild(pn);

          var sco=document.createElement("td");
          sco.textContent=val[i]+" ";
          row.appendChild(sco);
        }
        
        container.appendChild(table);
      }
    }
    else{
      sum+=4;
      const con = "your score is "+sum
      // sum+=4;
      const elme=document.createElement('p');
      elme.textContent=con;
      container.appendChild(elme);
    }  
  }
  function addpara5(){
    clearall();
    let rand=Math.floor(Math.random()*6)+1;
    const bowler="the bowler threw "+rand+" and you threw 5";
    const eli=document.createElement('p');
    eli.textContent=bowler;
    container.appendChild(eli);
    if (rand==5){
      const con="Player " + (t+1) + " is OUT with score of "+ sum;
      val[t]=sum;
      if(sum>max){
        position=t;
        max=sum;
      }
      t=t+1;
      sum=0;
      const elme=document.createElement('p');
      elme.textContent=con;
      container.appendChild(elme);
      if(t==x.value){
        const iop="Player " + (position+1) +" has won the tournament ";
        const rt=document.createElement('p');
        rt.textContent=iop;
        container.appendChild(rt);
        
        
        var table=document.createElement("table");
        var top=document.createElement("tr");
        var one=document.createElement("th");
        this.textContent="player number ";
        top.appendChild(one);
        const two=document.createElement("th");
        this.textContent="score ";
        top.appendChild(two);

        for(var i=0;i<t;i++){
          var row=document.createElement("tr");
          var pn=document.createElement("td");
          pn.textContent=i+1+" ";
          row.appendChild(pn);

          var sco=document.createElement("td");
          sco.textContent=val[i]+" ";
          row.appendChild(sco);
        }
        
        container.appendChild(table);
      }
    }
    else{
      sum+=5;
      const con = "your score is "+sum
      // sum+=5;
      const elme=document.createElement('p');
      elme.textContent=con;
      container.appendChild(elme);
    }
  }
  function addpara6(){
    clearall();
    let rand=Math.floor(Math.random()*6)+1;
    const bowler="the bowler threw "+rand+" and you threw 6";
    const eli=document.createElement('p');
    eli.textContent=bowler;
    container.appendChild(eli);
    if (rand==6){
      const con="Player " + (t+1) + " is OUT with score of "+ sum;
      val[t]=sum;
      if(sum>max){
        position=t;
        max=sum;
      }
      t=t+1;
      sum=0;
      const elme=document.createElement('p');
      elme.textContent=con;
      container.appendChild(elme);
      if(t==x.value){
        const iop="Player " + (position+1) +" has won the tournament ";
        const rt=document.createElement('p');
        rt.textContent=iop;
        container.appendChild(rt);
        
        
        var table=document.createElement("table");
        var top=document.createElement("tr");
        var one=document.createElement("th");
        this.textContent="player number ";
        top.appendChild(one);
        const two=document.createElement("th");
        this.textContent="score ";
        top.appendChild(two);

        for(var i=0;i<t;i++){
          var row=document.createElement("tr");
          var pn=document.createElement("td");
          pn.textContent=i+1+" ";
          row.appendChild(pn);

          var sco=document.createElement("td");
          sco.textContent=val[i]+" ";
          row.appendChild(sco);
        }
        
        container.appendChild(table);
      }
    }
    else{
      sum+=6;
      const con = "your score is  " +sum
      // sum+=6;
      const elme=document.createElement('p');
      elme.textContent=con;
      container.appendChild(elme);
    } 
  }
// }
// while(t<x.value){
  
  btn1.onclick=addpara1;
  btn2.onclick=addpara2;
  btn3.onclick=addpara3;
  btn4.onclick=addpara4;
  btn5.onclick=addpara5;
  btn6.onclick=addpara6;
// }





// btn8.onclick=q;
// btn7.onclick=
// reload_btn.onclick=refreshPage();
