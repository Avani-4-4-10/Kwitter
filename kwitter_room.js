//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDg-TKj5TC-SlhbWRQj-2WenGWr9t8jrj8",
      authDomain: "chatapp-f985f.firebaseapp.com",
      databaseURL: "https://chatapp-f985f.firebaseio.com",
      projectId: "chatapp-f985f",
      storageBucket: "chatapp-f985f.appspot.com",
      messagingSenderId: "105859635244",
      appId: "1:105859635244:web:2d9ee1e76ba1dc1091d989"
}; // Initialize Firebase
firebase.initializeApp(firebaseConfig);

Username = localStorage.getItem("username");
document.getElementById("Username").innerHTML = "Welcome " + Username + "!";

function send(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"creating room"
      })

      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log(Room_names);
                  row="<div class='room_name' id="+ Room_names+ " onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
                  document.getElementById("output").innerHTML += row;

            

                  //End code
            });

      });
}
getData();
function redirecttoroomname(name){
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";

}


function Logout() {
      localStorage.removeItem("username")
      window.location = "index.html";
      
      localStorage.removeItem("room_name");
}