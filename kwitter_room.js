const firebaseConfig = {
      apiKey: "AIzaSyAPPz7NnC77wyYP1_kK8iFQx4Q0czgkqvQ",
      authDomain: "chat-app-project-aab3e.firebaseapp.com",
      projectId: "chat-app-project-aab3e",
      storageBucket: "chat-app-project-aab3e.appspot.com",
      messagingSenderId: "841083604817",
      appId: "1:841083604817:web:8740ef0e4ec5355ab48d70",
      measurementId: "G-K2Q41SRMJK"
    };    
  firebase.initializeApp(firebaseConfig);
   username = localStorage.getItem("username");
   document.getElementById("name").innerHTML= "Welcome " + username;

   function add(){
      room_name = document.getElementById("room-name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding the username"  
      });
window.location = "msgScreen.html";
localStorage.setItem("room_Name", room_name);
};
function getData() 
{firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   console.log(Room_names);
   row = "<div class = 'room_name' id = " + Room_names + "onclick = 'next_page(this.id)' > "+ Room_names + "</div> <hr>";
   document.getElementById("output").innerHTML += row;
   });});}

   function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_Name");
      window.location = "index.html";
}

function rediectToRoomName()
next_page(Name);{
   console.log(Name);
   localStorage.setItem("room_Name", Name);
   window.location =  "msgScreen.html";
}