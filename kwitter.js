function addUser(){
    Username= document.getElementById("input").value;
    localStorage.setItem("username",Username);
    window.location="kwitter_room.html"
}