
//ADD YOUR FIREBASE LINKS
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAxfIg9pNgLFHsomTYw0DWez-OUIH5pPYg",
    authDomain: "kwiter-3a7fd.firebaseapp.com",
    databaseURL: "https://kwiter-3a7fd-default-rtdb.firebaseio.com",
    projectId: "kwiter-3a7fd",
    storageBucket: "kwiter-3a7fd.appspot.com",
    messagingSenderId: "608484995852",
    appId: "1:608484995852:web:5bc18588bac667b71d8f29"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser()
  {
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({purpose:"adding user"});
  }