var config = {
    apiKey: "AIzaSyC-X2-Q-Lx2dWYh0LhzMhePz7Shy51G4sU",
    authDomain: "emtropy-labs-website.firebaseapp.com",
    databaseURL: "https://emtropy-labs-website.firebaseio.com",
    projectId: "emtropy-labs-website",
    storageBucket: "emtropy-labs-website.appspot.com",
    messagingSenderId: "307259816607"
  };
  
firebase.initializeApp(config);

var dbRef = firebase.database();
var emailRef = dbRef.ref('emails');