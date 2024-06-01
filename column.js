/*
Pseudocode
1. User to add their email
2. If the user adds a correct email address, then we will say thank you
3. Else if , add an error message that says "please fill in required field"
4. If it left blank please fill out field. - It will them an error message
*/

// What are variables?

    /*
    Variables allow us to store data, and give that data value by assigning it.
    In Javascript variables start with either:
    let 
    const 
    var 
    When we use let, we can reassign the value of our variable.
    ex: let apple ='applejuice';
        let apple= "carrotapplejuice";

        When we use the const variable, we cannot reassign the value of that variable. 
        ex:const peaches= 5;
            console.log(peaches);

        var  Always declare variables.
        Always use const if the value should not be changed.
        Always use const if the type should not be changed (Arrays and Objects)
        Only use let if you can't use const.
    */

        document.querySelector(".submit-btn")
          .addEventListener("click", function (event) {
            event.preventDefault(); // Prevent form submission

            const emailInput = document.getElementById("email");
            const email = emailInput.value.trim();
            const tkuMessage = document.querySelector(".tku-message");
            const errorMessage = document.querySelector(".error-message");

            if (validateEmail(email)) {
              tkuMessage.style.display = "block";
              errorMessage.style.display = "none";
              tkuMessage.textContent = "Thank you for subscribing!";
            } else {
              tkuMessage.style.display = "none";
              errorMessage.style.display = "block";
              errorMessage.textContent = "Please enter a valid email address.";
            }
          });

        function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}