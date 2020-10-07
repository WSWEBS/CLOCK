
function updateDate(){
    var date = new Date();
    var setTime = document.getElementById("stime");
    setTime.innerHTML = date.getHours() + ":" + date.getMinutes() + "." + date.getSeconds();
    var setDate = document.getElementById("sdata");
    setDate.innerHTML =date.getDate()+"/"+parseInt(date.getMonth()+1) + " / " + date. getFullYear();  
}
setInterval(updateDate,10);
onload = updateDate();

    function gcolor(){
var setColor = document.getElementById("colore").value ;
localStorage.setItem("color",setColor);
document.getElementById("isd").style.background = localStorage.getItem("color");
document.getElementById("body").style.background = localStorage.getItem("color");
    }
  function setcoler(){
    document.getElementById("colore").value = localStorage.getItem("color");
    document.getElementById("isd").style.background = localStorage.getItem("color");
document.getElementById("body").style.background = localStorage.getItem("color");
  }
 setInterval(setcoler(),100);
  
// document.getElementById("color").addEventListener("change" ,()=>{
//       document.body.style.background = document.getElementById('color').value;
     
//     });

