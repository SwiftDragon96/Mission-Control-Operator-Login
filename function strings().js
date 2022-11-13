/* this function will verify user info and badge number before logging in */
function strings()
{
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
    var badgeNumber = document.getElementById("badgeNumber").value;
	var userInput = firstName + " " + lastName;
    /* this is the loop */
    if (userInput.length > 20 || userInput.length < 3)
        {
            document.getElementById("Updated string").innerHTML = "invalid user input, try again";
        }
    else if (badgeNumber.length > 3)
        {
            document.getElementById("Updated string").innerHTML = "invalid badge number, try again";
        }
    else
    /* if and only if both user input and badge number are valid,
    login will be successful and open page 2 */
    {
        alert("Access Granted, welcome to Mission Control " + userInput + " !")
        location.replace("mission-control-page-2.html")
    }  
}