function test(){
    var check = true;

    var name = document.getElementById("usernameID").value; //B1809369
        if(name == ""){
            document.getElementById("nameChange").innerHTML="Bạn chưa nhập đủ";
            check = false;
        }else{
            document.getElementById("nameChange").innerHTML="";
        }

        
    var pass= document.getElementById("passwdID").value;
        if(pass == ""){
            document.getElementById("passChange").innerHTML="Bạn chưa nhập đủ";
            check = false;
        }else{
            document.getElementById("passChange").innerHTML="";
        }
    return check;    
}