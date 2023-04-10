function validate() {
    var fname = document.forms["form1"]["firstname"].value;
    var lname = document.forms["form1"]["lastname"].value;
    var date = document.forms["form1"]["date"].value;
    var email = document.forms["form1"]["email"].value;
    var password = document.forms["form1"]["password"].value;
    var cpassword = document.forms["form1"]["confirmpassword"].value;

if (fname == "" || lname == "" || date == "" || email == "" || password == "" || cpassword == "") {
    alert("Please Make Sure That You Have Filled All Details");
 }
else if (password != cpassword) {
    alert("Please Make Sure That Password And Confirm Password Is Same");
 }
else {
    alert("Account Created Successfully");
 }
}