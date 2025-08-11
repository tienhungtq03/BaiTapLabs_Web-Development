/* function validate()will validate form data */
function validate() {
	var sid = $("#sid").val();
	var pwd1 = $("#pwd1").val();
	var pwd2 = $("#pwd2").val();
	var uname = $("#uname").val();
	var genm = $("#genm").prop("checked");
	var genf = $("#genf").prop("checked");

	var errMsg = "";								/* create variable to store the error message */
	var result = true;								/* assumes no errors */
	var pattern = /^[a-zA-Z ]+$/;					/* regular expression for letters and spaces only */

	/* Rule 1, check if all required date are entered */
if ($("#sid").val() == "") { //check whether User ID is empty
    errMsg += "<li>User ID cannot be empty.</li>";
}
if ($("#pwd1").val() == "") { //check whether Password is empty
    errMsg += "<li>Password cannot be empty.</li>";
}
if ($("#pwd2").val() == "") { //check whether re-typed Password is empty
    errMsg += "<li>Retype password cannot be empty.</li>";
}
if ($("#uname").val() == "") { //check whether User Name is empty
    errMsg += "<li>User name cannot be empty.</li>";
}
if ((!$("#genm").prop("checked")) && (!$("#genf").prop("checked"))) { //check whether gender is selected
    errMsg += "<li>A gender must be selected.</li>";
}

/* Rule 2, check if the user ID contains an @ symbol */
if ($("#sid").val().indexOf('@') == 0) {
    errMsg += "<li>User ID cannot start with an @ symbol.</li>";
}
if ($("#sid").val().indexOf('@') < 0) {
    errMsg += "<li>User ID must contain an @ symbol.</li>";
}

/* Rule 3, check if password and retype password are the same */
if ($("#pwd1").val() != $("#pwd2").val()) {
    errMsg += "<li>Passwords do not match.</li>";
}

/* Rule 4, check if user name contains only letters and spaces */
if (!$("#uname").val().match(pattern)) {
    errMsg += "<li>User name contains symbols.</li>";
}

/* Display error message any error(s) is/are detected */
if (errMsg != "") {
    errMsg = "<div id='scrnOverlay'></div>" //8.3
        + "<section id='errWin' class='window'><ul>"
        + errMsg //8.4
        + "</ul><a href='#' id='errBtn' class='button'>Close</a></section>";
    var numOfItems = ((errMsg.match(/<li>/g)).length) + 6; //8.5
    $("body").after(errMsg); //8.6
    $("#scrnOverlay").css('visibility', 'visible'); //8.7
    $("#errWin").css('height', numOfItems.toString() + 'em'); //8.8
    $("#errWin").css('margin-top', (numOfItems / -2).toString() + 'em'); //8.8
    $("#errWin").show(); //8.9
    $("#errBtn").click(function () { //8.10
        $("#scrnOverlay").remove();
        $("#errWin").remove();
    });
    result = false;
}
return result;
}
function toggle() {
	$(this).parent().next().slideToggle();
	if ($(this).html() == "[-]") {
		$(this).html("[+]");
	} else {
		$(this).html("[-]");
	}
}
/* link HTML elements to corresponding event function */
function init () {
	/* assign the <form> element to variable regForm */
	var regForm = document.getElementById("regform");

	/* link function validate() to the onsubmit event of the form */
	$("#regForm").onsubmit(validate);
	$(".collapse").click(toggle);
}

/* execute function init() once the window is loaded*/
$(document).ready(init);