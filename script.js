function showClock(){
			
			let date = new Date();
			
			let h = String(date.getHours()).padStart(2,0);
			let m = String(date.getMinutes()).padStart(2,0);
			let s = String(date.getSeconds()).padStart(2,0);

			document.getElementById("clock").innerHTML = h + " : " + m + " : " +s;
			setTimeout(showClock, 1000);
		}

showClock();

// Targeting the CSS queries
const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');
const container = document.querySelector('.container');
const clock = document.querySelector('#clock');

// Initializations
const bodyColors = ['lightgrey','#eb9393','#6fdc6f','#b3d9ff','#fff099'];
const containerColors = ['dimgrey','#b22222','#239023','#3399ff','#e6c300'];
const clockColors = ['grey','#e26969','#46d246','#80bfff','#ffe44d'];
const clockFontColors = ["#e2e2e2", '#FFEBCD','honeydew','white','#222'];
const bodyFontColors = ['#555', 'white','#333','black','#222']
let colorIndex = 0;

//Initial colors
bodyBcg.style.backgroundColor = bodyColors[colorIndex];
container.style.backgroundColor = containerColors[colorIndex];

// Change theme button event listener
colorBtn.addEventListener('click',changeColor);

// Definition for changeColor function
function changeColor(){
	if (colorIndex >= bodyColors.length - 1) {
		colorIndex = -1;
	}
	colorIndex++;
	console.log(colorIndex);
	bodyBcg.style.backgroundColor = bodyColors[colorIndex];
	bodyBcg.style.color = bodyFontColors[colorIndex];
	container.style.backgroundColor = containerColors[colorIndex];
	container.style.color = clockFontColors[colorIndex];
	clock.style.backgroundColor = clockColors[colorIndex];
}