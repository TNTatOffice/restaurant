function verifyForm() {
    
    let user = {
        "first_name":document.getElementById('fName').value,
        "last_name":document.getElementById('lName').value,
        "email": document.getElementById('eMail').value,
        "password": document.getElementById('password').value,
        "confirm_password": document.getElementById('confirmPass').value
    }

    fetch("http://localhost:3000/register", {method: "POST", body: JSON.stringify(user), headers: {'Content-Type': 'application/json'}})
    .then(result => {
        result.json().then(body => {
            alert(JSON.stringify(body));
            if (body.errors.length == 0)
            window.location.href = "/signIn.html"
        })
    })
    .catch(error => {
        alert("error has occured: " + JSON.stringify(error))
    })
}



function signin() {
    
    let user = {
        "email": document.getElementById('username').value,
        "password": document.getElementById('password').value,
    }

    fetch("http://localhost:3000/user-login", {method: "POST", body: JSON.stringify(user), headers: {'Content-Type': 'application/json'}})
    .then(result => {
        result.json().then(body => {
            if (body.errors.length == 0)
                window.location.href = "/menu.html"
        })
    })
    .catch(error => {
        alert("error has occured: " + JSON.stringify(error))
    })
}



