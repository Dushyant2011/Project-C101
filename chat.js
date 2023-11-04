// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyB5PJAIbqvnYa2EE7TwLsASinZsFN7pMJQ",
    authDomain: "project-c101-b652e.firebaseapp.com",
    databaseURL: "https://project-c101-b652e-default-rtdb.firebaseio.com",
    projectId: "project-c101-b652e",
    storageBucket: "project-c101-b652e.appspot.com",
    messagingSenderId: "657179768237",
    appId: "1:657179768237:web:59e3cf6acd4d74a32c9d24"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



