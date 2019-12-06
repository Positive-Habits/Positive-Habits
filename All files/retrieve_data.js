document.getElementById('results').innerHTML = localStorage.getItem('goal1');
document.getElementById('results2').innerHTML = localStorage.getItem('start');
document.getElementById('results3').innerHTML = localStorage.getItem('end');
document.getElementById('results4').innerHTML = localStorage.getItem('Duration');
document.getElementById('results5').innerHTML = localStorage.getItem('dropdown');

var counter = 0;

function complete(){
	counter++;
	document.getElementById('results6').innerHTML = 'Yes';
if (counter == 1){
  alert("You have Earned the badge: Add 3 habits!");
	}
}