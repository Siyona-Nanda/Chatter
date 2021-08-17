var firebaseConfig = {
      apiKey: "AIzaSyAEQba354m2WSzKO58ZqWyrQskv9LZL8Fg",
      authDomain: "siyona-nanda-ninety-four.firebaseapp.com",
      databaseURL: "https://siyona-nanda-ninety-four-default-rtdb.firebaseio.com",
      projectId: "siyona-nanda-ninety-four",
      storageBucket: "siyona-nanda-ninety-four.appspot.com",
      messagingSenderId: "1094750974188",
      appId: "1:1094750974188:web:7d302078381d8759ec75c9",
      measurementId: "G-4XQYLB4HNN"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    
   

//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name+"!";

function addroom(){

      room_name=document.getElementById("room_name").value;


      firebase.database().ref("/").child(room_name).update({
            purpose:"add-text"
        });
        
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
