//localStorage.setItem("lastname","smith")
//document.getElementById("result").innerHTML = localStorage.getItem("lastname");
console.log('storage loaded')
function submitForm() {
	goal1 = document.getElementById('goal1').value;
	localStorage.setItem('goal1', goal1);
	console.log('item set')
	
}