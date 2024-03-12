document.addEventListener('DOMContentLoaded', (event) => {
    const signupButton = document.getElementById('signupButton');

    messageBox.appendChild(messageDisplay);
    document.body.appendChild(messageBox);

    const footer = document.getElementsByTagName('footer')[0];
    document.body.insertBefore(messageBox, footer);

    signupButton.addEventListener('click', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const email = document.getElementById('email').value;

        const usernameRegex = /^[a-zA-Z][a-zA-Z0-9-_]{2,19}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+[\]{}|;:'",.<>?/`~])[A-Za-z\d!@#$%^&*()-_=+[\]{}|;:'",.<>?/`~]{8,}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!usernameRegex.test(username)) {
            const message = document.createElement('p');
            message.textContent = 'Invalid username. Please try again.';
            messageBox.appendChild(message);
        } else if (!passwordRegex.test(password)) {
            const message = document.createElement('p');
            message.textContent = 'Invalid password. Please try again.';
            messageBox.appendChild(message);
        } else if (password !== confirmPassword) {
            const message = document.createElement('p');
            message.textContent = 'Passwords do not match. Please try again.';
            messageBox.appendChild(message);
        } else if (!emailRegex.test(email)) {
            const message = document.createElement('p');
            message.textContent = 'Invalid email. Please try again.';
            messageBox.appendChild(message);
        } else {
            const message = document.createElement('p');
            message.textContent = 'Signup Successful. Welcome to the ZONE!';
            messageBox.appendChild(message);
        }
    });
});
