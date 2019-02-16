function Login()
{
    var v_Username = document.getElementById('Username').value;
    var v_Password = document.getElementById('Password').value;
    
    if (
        (v_Username == 'admin' && v_Password == 'adminadmin') ||
        (v_Username == 'teacher' && v_Password == 'teacher') ||
        (v_Username == 'Student' && v_Password == 'student') ) {
           sessionStorage.setItem('userType',v_Username);
            switch (v_Username){
                case 'admin':
                window.location.href='Admin.html';
                break;

                case 'teacher':
                window.location.href='Teacher.html';
                break;

                case 'student':
                window.location.href='Student.html';
                break;
            }
            
        } 
else {
    alert('username or password is incorrect');
}
   
    
}