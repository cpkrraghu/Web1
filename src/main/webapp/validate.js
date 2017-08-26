function validate(){
	var msg="";
	if(document.getElementById("firstName").value.length<8){
		msg+="First Name should be minimum 8 characters\n";
	}
	var pwd=document.getElementById("password").value;
	if(!(/[0-9]/).test(pwd)){
		msg+="Password must contain atleast one number\n";
	}
	if(!("/[!@#$%^&*()_+[]{}/>\~`]/").test(pwd)){
		msg+="Password must contain atleast one special Character\n";
	}
	if(pwd!=document.getElementById("confirmPassword").value){
		msg+="Passwords must match\n";
	}
	if(msg!=""){
		alert(msg);
	}else{
		document.getElementById("registerform").submit();
	}
	
}