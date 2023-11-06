function getbtm(){
    var email = document.getElementById("useremail")
    var password = document.getElementById("userpassword")
  
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
    });
  }
  function forgetpassword(){
    var email = document.getElementById("useremail")
    firebase.auth().sendPasswordResetEmail(email.value)
    .then(() => {
      alert("ok")
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  }
  