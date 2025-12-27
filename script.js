function getFormvalue() {
    //Write your code here
	// let firstName = document.getElementById("fName").trim();
	// let lastName = document.getElementById("fName").trim();
	let firstName = document.querySelector('input[name="fname"]').value.trim();
	let lastName = document.querySelector('input[name="lname"]').value.trim();

	alert(`${firstName} ${lastName}`);
}
