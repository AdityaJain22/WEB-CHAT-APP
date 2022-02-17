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
  roomname = localStorage.getItem("room_Name");
  function logout(){
     localStorage.removeItem("username");
     localStorage.removeItem("room_Name");
     window.location = "index.html";
  }
function send(){
     msg = document.getElementById("msg").value;
     firebase.database().ref(roomname).push({
           name : username,
           message : msg,
           like : 0
     });
     document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
