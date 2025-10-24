function welcomeSpeech() {
    ///show prompt to ask for user's name
    let name = prompt("Enter your name ");

    ///greet the user with their name
    document.getElementById('greet-name').innerHTML ='Hi ${name}, ';
}

///Function to validate form inputs
function validateForm() {
    ///get form input values
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const message = document.getElementById('message-input').value;

    ///check if my field is empty
    if (name === "" || email === "" || message === "") {
        ///show alert if my field is empty
        alert("All fields are required!");
    } else {
        ///Show success message
        alert(`Thank you ${name}, your message has been submitted succesfully!`);
    }
}