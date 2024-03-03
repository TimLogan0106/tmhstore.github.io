function check() {
    var check = true;
    var name = document.getElementById("idUsername").value; 
    if (name == "") {
        document.getElementById("errorUsername").innerHTML = 'ban chua dang nhap du'; 
        check = false;
    } else {
        document.getElementById("errorUsername").innerHTML = '';
    }
    var passwd = document.getElementById("passwd1").value; 
    if (passwd == "") {
        document.getElementById("errorPasswd").innerHTML = " ban chua dang nhap du "; 
        check = false;
    } else {
        document.getElementById("errorPasswd").innerHTML = "";
    }
     var repasswd = document.getElementById("passwd2").value;
    if (repasswd == "") {
        document.getElementById("errorRePasswd").innerHTML = " ban chua dang nhap du ";
        check = false;
    } else {
        document.getElementById("errorRePasswd").innerHTML = "";
    }
    if (passwd != repasswd) {
        alert("Hai mat khau khong trung nhau. vui long nhap lai");
        check = false
    } else {
        document.getElementById("errorRePasswd1").innerHTML = "";
    }
     return check;
}
