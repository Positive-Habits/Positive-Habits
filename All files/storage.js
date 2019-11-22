//localStorage.setItem("lastname","smith")
//document.getElementById("result").innerHTML = localStorage.getItem("lastname");
console.log('storage loaded');
function submitForm() {
	goal1 = document.getElementById('goal1').value;
	localStorage.setItem('goal1', goal1);
	console.log('item set');
	start = document.getElementById('start').value;
	localStorage.setItem('start', start);
	//console.log('item set')
	end = document.getElementById('end').value;
	localStorage.setItem('end', end);
	//console.log('item set');
	Duration = document.getElementById('Duration').value;
	localStorage.setItem('Duration', Duration);
	//console.log('item set')
	dropdown = document.getElementById('dropdown').value;
	localStorage.setItem('dropdown', dropdown);
	//console.log('item set');
}