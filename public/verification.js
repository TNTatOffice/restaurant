// First name- between 2 to 20
// Last name- between 2 - 20
// Email- compulsory, must have @ and be gmail or yahoo
// Password- compulsory, 2-10
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
    // verify email
var mailid = document.getElementById('eMail').value;
if(mailid.indexOf('@gmail') > -1 || mailid.indexOf('@yahoo') > -1)
{
    alert('Your email is invalid');
}
}
