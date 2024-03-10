// login.js
document.addEventListener('DOMContentLoaded', (event) => {
    const loginButton = document.getElementById('loginButton');

    const messageBox = document.createElement('div');
    const messageDisplay = document.createElement('p');
    messageBox.style.border = '2px solid black';
    messageBox.style.backgroundColor = '#f9f9f9';
    messageBox.style.padding = '10px';
    messageBox.style.margin = '20px';

    messageBox.appendChild(messageDisplay);
    document.body.appendChild(messageBox);

    loginButton.addEventListener('click', function(event) {
        event.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const enteredUsername = document.getElementById('username').value;
            const enteredPassword = document.getElementById('password').value;
            const user = users.find(user => user.name === enteredUsername && user.email === enteredPassword);

            if(!user){
                messageDisplay.textContent = 'Invalid username or usermail. Please try again.';
            }
            else{
                messageDisplay.textContent = `Login Successful. Welcome to the ZONE ${user.name}!`;
            }
        })
        .catch(() => {
            messageDisplay.textContent = 'Error, something went wrong.';
        });
    });
});

