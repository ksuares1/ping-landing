/*
Pseudocode
1. User to add their email
2. If the user adds a correct email address, then we will say thank you
3. Else if , add an error message that says "please fill in required field"
4. If it left blank please fill out field. - It will them an error message
*/


function emailInput(input){
    if (emailInput.trim() === "") {
        console.log("Email field is empty")
    } else if (input === "email"){
        console.log("Thank you!");
    } else {
        console.log("Invalid email");

    }
}