// First name- between 2 to 20
// Last name- between 2 - 20
// Email- compulsory, must have @ and be gmail or yahoo
// Password- compulsory, 2-10, must have special characters
// Verify password 
// Error if details are not filled

function verifyForm() {
var fname = document.getElementById('fName').value;
var fnameLength = fname.length;
var lname = document.getElementById('lName').value;
var lnameLength = lname.length;
     // first and last name check
    if(fnameLength < 2 )
    {
        alert('Your first name is too short');
    }
    else if (fnameLength > 20)
    {
        alert('Your first name is too long');
    }
    else if (lnameLength < 2)
    {
        alert('Your last name is too short');
    }
    else if (lnameLength > 20)
    {
        alert('Your last name is too long');
    }
    // verify email- check why not working properly
var mailid = document.getElementById('eMail').value;
if(mailid.indexOf('gmail') > -1 || mailid.indexOf('yahoo') > -1)
{
    alert('Your email must be a Gmail or Yahoo address');
    break
}
var pass = document.getElementById('password').value;
if( pass.indexOf('!','@','#','$','%','^','&','*','(',')') == -1)
{
    alert('Your password must include a special character');
}
var confirmPass = document.getElementById('confirmPass').value
if (confirmPass !== pass)
{ 
    alert('Your password does not match');
}
}