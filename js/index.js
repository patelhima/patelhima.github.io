function sendEmail() {

    var name =  document.querySelector('input[name=name]').value;
    var email =  document.querySelector('input[name=email]').value;
    var messageToSend =  document.getElementById("message").value;
   
    //perform validation

    var errorMessages = [];
    var isNameValid = false;
    if(name==undefined || name!=undefined && name.length == 0){
        errorMessages.push("Please enter name"); 
        isNameValid = false;
    }else{
        isNameValid = true;
    }

    var isEmailValid = false;
    if(email==undefined || email!=undefined && email.length == 0){
        errorMessages.push("Please enter email"); 
        isEmailValid = false;
    }else if(!(/^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$/.test(email))){
        errorMessages.push("Please enter valid email address"); 
        isEmailValid = false;
    }else{
        isEmailValid = true;
    }
   
    
    var isMessageValid = false;
    if(messageToSend==undefined || messageToSend!=undefined && messageToSend.length == 0){
        errorMessages.push("Please enter message to send"); 
        isMessageValid = false;
    }else{
        isMessageValid = true;
    }

    if(isNameValid && isEmailValid && isMessageValid){
        Email.send({
            Host: "smtp.gmail.com",
            Username : "hima.15beceg118@gmail.com",
            Password : "vcpifbiemqwxmhkh",
            To : 'himap2606@gmail.com',
            From : "hima.15beceg118@gmail.com",
            Subject : "Mail From "+name+" using Github Page Contact Form",
            Body : "The user "+name+" wants to contact you with message '"+messageToSend+"' from emailId "+email,
            }).then(
                message => success("Mail sent successfully")
            );
        
            document.querySelector('input[name=name]').value = "";
            document.querySelector('input[name=email]').value = "";
            document.getElementById("message").value = "";
    }else{
        //display message
        error(errorMessages);
    }
    
}

var error = function(errorList){
	var htmlCode = "";
	if(errorList!=null){
		if(errorList.length > 1){
			htmlCode = '<ul>';
			for (var index = 0; index < errorList.length; index++) {
				htmlCode = htmlCode + '<li>'
						+ errorList[index] + '</li>';
			}
			htmlCode = htmlCode + '</ul>'
		}else{
			htmlCode = errorList[0]
		}	
	}		

	$(".failureId").html(htmlCode);
	$(".failureId").removeClass("nodisplay");
	$(".failureId").show();
	$(".failureId").delay(4000).fadeOut('slow');
};

var success = function(msg){
	$(".successId").html(msg);
	$(".failureId").addClass("nodisplay");
	$(".successId").removeClass("nodisplay");
	$('.successId').delay(4000).fadeOut('slow');
	$(".successId").show();
	window.setTimeout(function() {
		$(".successId").addClass("nodisplay");
	},7000);
};
