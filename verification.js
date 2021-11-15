// First name- between 2 to 20
// Last name- between 2 - 20
// Email- compulsory, must have @ and be gmail or yahoo
// Password- compulsory, 2-10
// Error if details are not filled

function verifyForm(fName, lName) {
var fname = document.getElementById('fName').value;
var fnameLength = fname.length;
var lname = document.getElementById('lName').value;
var lnameLength = lname.length;
{
    debugger;
    if(fnameLength < 2 || fnameLength > 20 )
    {
        alert('Your first name must be greater than 2 characters and less than 20 characters');
    }
}
} 
