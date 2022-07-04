function validatePassword() {
    let pw1 = document.getElementById("pw").value;
    let pw2 = document.getElementById("confirm-pw").value;
    if(pw1 != pw2){
     alert('not Match');
    }
    else{
     alert('match');
    }
}