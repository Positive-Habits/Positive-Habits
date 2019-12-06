// Reminder Storage has to be edited

function submitForm()
{
  hab = document.getElementById('hab').value;
	localStorage.setItem('hab', hab);

  retime = document.getElementById('retime').value;
	if (retime == "")
	{
  alert("Enter Reminder time");
	return false;
  }
	localStorage.setItem('retime', retime);

	prior = document.getElementById('prior').value;
	localStorage.setItem('prior', prior);

	note = document.getElementById('note').value
	if (note == "")
	{
  alert("Write a note");
	return false;
  }
	localStorage.setItem('note', note);
}
