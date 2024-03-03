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
    
     return check;
}
