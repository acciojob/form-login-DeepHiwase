function getFormvalue() {
    //Write your code here
	// let firstName = document.getElementById("fName").trim();
	// let lastName = document.getElementById("fName").trim();
	let firstName = document.querySelector('input[name="fname"]').trim();
	let lastName = document.querySelector('input[name="lname"]').trim();

	alert(`${firstName} ${lastName}`);
}
