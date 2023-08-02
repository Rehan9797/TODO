function login(callback){
    event.preventDefault()
let username = document.getElementById('name').value
let password = document.getElementById('password').value
    console.log(username, password);
    if(username=='admin'&& password=='12345'){
        callback();
        console.log('hii');
    }else{

        alert("invailed ")
    }
}

function redirect(){
window.location.href='todo.html'
    
}
