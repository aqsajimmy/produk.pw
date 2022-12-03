<script>
var counter = 10;
    document.getElementById('generates').onclick = function changeContent() {
   document.getElementById('tunggu').style.display = 'block';
   

};
    
    // function
    function tampil() {
        
        document.getElementById('tunggu').style.display = 'block';
        document.getElementById('generates').style.display = 'none';
    }
     counter = 10;
		function countDown(){
			if(counter >= 0){
				document.getElementById('timer').innerHTML = counter;
			} else {
				download();
				return;
			}
			counter -=1;

			var counter2 = setTimeout("countDown()",1000);
			return;
		}

		function download(){
			document.getElementById('downs').style.visibility = 'visible';
            document.getElementById('generates').style.display = 'none';
			document.getElementById('tunggu').style.display = 'none';
			counter = 10;
		}
</script>

