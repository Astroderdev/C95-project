// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxjQ1hR1gzGa2GDUej_lqnzN9szbrut1U",
  authDomain: "letschatdb-c861d.firebaseapp.com",
  databaseURL: "https://letschatdb-c861d-default-rtdb.firebaseio.com",
  projectId: "letschatdb-c861d",
  storageBucket: "letschatdb-c861d.appspot.com",
  messagingSenderId: "890951896856",
  appId: "1:890951896856:web:131090ad680a80e222986d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("Username:");
document.getElementById("welcome").innerHTML = "Welcome, " + username + "!";

function Addroom() {
  room_name = document.getElementById("addroom").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding_room_name"
  });

  console.log(room_name);
  localStorage.setItem("Room:", room_name);

}