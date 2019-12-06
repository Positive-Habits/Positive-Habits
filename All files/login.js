function read(form){
if(form.uname.value == "rawr" && form.psw.value == "yeet")
	{
      window.open('profile-rawr.html');
	}
	else if(form.uname.value == "cool" && form.psw.value =="elite")
	{
		window.open('profile-cool.html');
	}
	else
	{
		alert("Incorrect username or password");
	}
}
