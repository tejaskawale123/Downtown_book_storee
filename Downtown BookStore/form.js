
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBhAY3OYEbHnIExcSySUxv0jv-uo7SYkUI",
    authDomain: "downtown-book.firebaseapp.com",
    projectId: "downtown-book",
    storageBucket: "downtown-book.appspot.com",
    messagingSenderId: "605821108333",
    appId: "1:605821108333:web:f8b6e7dc4095032363ff64",
    measurementId: "G-09LQ09042N"
};



  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
	
  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    alert("Registered Successful");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    alert("Login Successful");
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
	  window.location='index.html';
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
     document.getElementById('user').innerHTML = 'Active User: '+email;
    }
    else{
      document.getElementById('user').innerHTML = 'Not Logged In';
    }
  })

 
    //  document.getElementById("user").innerHTML = "Active User "+email;