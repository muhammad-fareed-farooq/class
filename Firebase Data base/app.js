
// ********************************* sign up **************************************************

var firebaseConfig = {
  apiKey: "AIzaSyBF5AQYAjLhZ3JHuGR-mIOedCtgI6K2H_g",
  authDomain: "authclass-5801b.firebaseapp.com",
  projectId: "authclass-5801b",
  storageBucket: "authclass-5801b.appspot.com",
  messagingSenderId: "678205958012",
  appId: "1:678205958012:web:54ffb526277b2ead89e6f9"
};

// Initialize Firebase
var firebase = firebase.initializeApp(firebaseConfig);


function getValue(){
    var email = document.getElementById("email")
    var password = document.getElementById("password")

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
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




// ************************************************sign in ***************************************************


































// function getValue(){

//      var inp = document.getElementById("name")

//     //  console.log(inp.value)
    
//     var getValue = localStorage.getItem("name")

//     var orgValue =JSON.parse(getValue)
    
//     // console.log(orgValue)

//     if(! orgValue){

//         orgValue = []
//     }

//    var userobj ={

//    name:inp.value

//    }

// orgValue.push(userobj)

// localStorage.setItem("name",JSON.stringify(orgValue))

// }





// function getValue(){
    
//     var inp1 = document.getElementById("name")

//     var getValue1 = localStorage.getItem("name")

//     var orgValue1 = JSON.parse(getValue1)

//     if(! orgValue1){
//         orgValue1 = []
//     }


//     var userobj1 = {

//         name:inp1.value
//     }

//     orgValue1.push(userobj1)
    
//     localStorage.setItem("name",JSON.stringify(orgValue1))

// }




