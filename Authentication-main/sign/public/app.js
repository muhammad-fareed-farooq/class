var firebaseConfig = {
  apiKey: "AIzaSyBAwM1HEMqAL_z-K2b1HbxuENNoj1ln3Ws",
  authDomain: "auth-586de.firebaseapp.com",
  databaseURL: "https://auth-586de-default-rtdb.firebaseio.com",
  projectId: "auth-586de",
  storageBucket: "auth-586de.appspot.com",
  messagingSenderId: "323778141524",
  appId: "1:323778141524:web:8c232054ec73e27f98fcc1"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);


function getNext() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var name = document.getElementById("name");
  var number = document.getElementById("number");
  var data = document.getElementById("date");

   var userdata = {  
       name:name.value,    
       number:number.value,    
       data:data.value    
   }

   var key = Math.random()*3524168

    firebase.database().ref("user").push(userdata)






  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      window.location.href = "signin.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
}


















// *************************** sign in***************************************

function getext() {
  var email = document.getElementById("useremail");
  var password = document.getElementById("userpassword");

  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      window.location.href = "dashbord.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
}

function forgetPassword() {
  var email = document.getElementById("useremail");
  firebase
    .auth()
    .sendPasswordResetEmail(email.value)
    .then(() => {
      alert("Verification code is successfully sent..");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
}

// ================login google========================

function loginWithGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // IdP data available in result.additionalUserInfo.profile.
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}




// =======================login github =========================


function logingithub(){

  var provider = new firebase.auth.GithubAuthProvider();

  firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = credential.accessToken;

    // The signed-in user info.
    var user = result.user;
    // IdP data available in result.additionalUserInfo.profile.
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}