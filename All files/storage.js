//localStorage.setItem("lastname","smith")
//document.getElementById("result").innerHTML = localStorage.getItem("lastname");

function submitForm() {
	
	goal1 = document.getElementById('goal1').value;
	if (goal1 == "") {
    alert("Name must be filled out");
  }
	localStorage.setItem('goal1', goal1);
	
	start = document.getElementById('start').value;
	if (start == "") {
    alert("Start time must be filled out");
  }
	localStorage.setItem('start', start);
	
	end = document.getElementById('end').value;
	if (end == "") {
    alert("End time must be filled out");
  }
	localStorage.setItem('end', end);
	
	Duration = document.getElementById('Duration').value;
	if (Duration == "") {
    alert("Duration must be filled out");
  }
	localStorage.setItem('Duration', Duration);
	
	dropdown = document.getElementById('dropdown').value;
	localStorage.setItem('dropdown', dropdown);
}