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
        let apple="carrotapplejuice";

        When we use the const variable, we cannot reassign the value of that variable. 
        ex:const peaches= 5;
            console.log(peaches);

        Always declare variables.
        Always use const if the value should not be changed.
        Always use const if the type should not be changed (Arrays and Objects)
        Only use let if you can't use const.
    */

        let loginInfo = document.getElementById('email');


function userName(email){
    if (userName === email){
        console.log("Thank you!");
    }
    

}