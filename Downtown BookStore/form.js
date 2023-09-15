
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAqpwUx_UMEiM0WzbYZRwKRfCRa04aZ7UI",
    authDomain: "book-store-918df.firebaseapp.com",
    projectId: "book-store-918df",
    storageBucket: "book-store-918df.appspot.com",
    messagingSenderId: "169506337895",
    appId: "1:169506337895:web:aacdfd9deee68b7971d0c2",
    measurementId: "G-LNVJTRJLG3"
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
