var firebaseConfig = {
    apiKey: "AIzaSyCvGn0_tsGx1_zSrMQ3RTokOOd5-7ceqNE",
    authDomain: "realtimedata-8cf12.firebaseapp.com",
    databaseURL: "https://realtimedata-8cf12-default-rtdb.firebaseio.com",
    projectId: "realtimedata-8cf12",
    storageBucket: "realtimedata-8cf12.appspot.com",
    messagingSenderId: "838671585231",
    appId: "1:838671585231:web:8dd86e7cacadb7da954cba"
  };
  
  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);


  function getdata(){
    var name = document.getElementById("inp1")
    var section = document.getElementById("inp2")
    var email = document.getElementById("inp3")


    var setobj ={
        stdname: name.value,
        stdsection : section.value,
        email:email.value
    }

    // console.log(setobj)

    var key = Math.random()*325136136

    firebase.database().ref("studentdata/user/"+Math.round(key)).set(setobj)
    
    
    name.value = ""
    section.value = ""
    email.value = ""


  }

//   function getValuefirebase(){
//     firebase
//     .database()
//     .ref("studentdata/user")
//     .once("value",function(data){
//         console.log(data.val())
//     })
//   }

//   getValuefirebase()


function getValuefirebase(){
    firebase
    .database()
    .ref("studentdata/user")
    .on("child_added",function(data){
        console.log(data.val())
    })
  }

  getValuefirebase()
