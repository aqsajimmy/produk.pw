var counter=10;function tampil(){document.getElementById("tunggu").style.display="block",document.getElementById("generates").style.display="none"}function countDown(){0<=counter?(document.getElementById("timer").innerHTML=counter,--counter,setTimeout("countDown()",1e3)):download()}function download(){document.getElementById("downs").style.visibility="visible",document.getElementById("generates").style.display="none",document.getElementById("tunggu").style.display="none",counter=10}document.getElementById("generates").onclick=function(){document.getElementById("tunggu").style.display="block"},counter=10;