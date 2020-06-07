function showClock(){
			
			let date = new Date();
			
			let h = String(date.getHours()).padStart(2,0);
			let m = String(date.getMinutes()).padStart(2,0);
			let s = String(date.getSeconds()).padStart(2,0);

			document.getElementById("clock").innerHTML = h + " : " + m + " : " +s;
			setTimeout(showClock, 1000);
		}

		showClock();