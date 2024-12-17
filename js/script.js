function runTypingEffect() {

    const text = 'I am Olojede Christopher.';
    const typingElement = document.getElementById('typing-text');
    const typingDelay = 100;

    typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, typingDelay) {
    
    for (let i = 0; i <text.length; i++) {
        setTimeout(() => {
            typingElement.textContent += text.charAt(i); 
        }, typingDelay * i);
    }
}

document.addEventListener('DOMContentLoaded', runTypingEffect);

//  main.js
 
// POST request using fetch()
fetch("http://localhost:9090/oouweb/staffs/login", {
    
    // Adding method type
    method: "POST",
    
    // Adding body or contents to send
    body: JSON.stringify({
        email: "chris@chris.com",
        password: "christopher"
    }),
    
    // Adding headers to the request
    headers: {
        "Content-type": "application/json"
    }
})

// Converting to JSON
.then(response => {

    console.log('headers Auth: ' + response.headers.get('Authorization'));
    console.log('status: ' + response.status);
    console.log('Headers: ' + response.headers.values())

    response.json()
})

// Displaying results to console
.then(json => console.log(json));