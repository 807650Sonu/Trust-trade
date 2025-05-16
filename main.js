const firebaseConfig = {
  apiKey: "AIzaSyAX2_kssbvVUWInYtvQSi3OCmYP2VUCwDc",
  authDomain: "trust-trade-88f47.firebaseapp.com",
  projectId: "trust-trade-88f47",
  storageBucket: "trust-trade-88f47.appspot.com",
  messagingSenderId: "75755431522",
  appId: "1:75755431522:web:0bf625ca3a4543b409533b",
  measurementId: "G-PRKF6HMHK9"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, password)
    .then(user => {
      document.getElementById("message").textContent = "Login successful!";
    })
    .catch(error => {
      document.getElementById("message").textContent = error.message;
    });
}

function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(user => {
      document.getElementById("message").textContent = "Signup successful!";
    })
    .catch(error => {
      document.getElementById("message").textContent = error.message;
    });
}
