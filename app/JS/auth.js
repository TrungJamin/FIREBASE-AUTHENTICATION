auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    db.collection("data")
      .get()
      .then((snapshot) => {
        setUp(snapshot.docs);
      });
    document.querySelector(".login-wrap").style.display = "none";
    document.querySelector("#table").style.display = "block";
    document.querySelector("#logout").style.display = "block";
    // ...
  } else {
    // User is signed out
    setUp([]);
    document.querySelector(".login-wrap").style.display = "block";
    document.querySelector("#table").style.display = "none";
    document.querySelector("#logout").style.display = "none";
  }
});

// SIGN UP

const signup_btn = document.querySelector("#signup-btn");

signup_btn.addEventListener("click", (e) => {
  const email = document.querySelector(".login-form #signup-email").value;
  const password = document.querySelector(".login-form #signup-password").value;

  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      // tai sao o day nen return ?
      return db.collection("users").doc(user.uid).set({
        email: email,
      });
    })
    .then(() => {
      alert("Signed up successfully!");
      signup_email.value = "";
      signup_password.value = "";
    })
    .catch((err) => {
      alert("Invalid Email");
    });
});

// SIGN IN
const signin_btn = document.querySelector("#signin-btn");

signin_btn.addEventListener("click", (e) => {
  const email = document.querySelector(".login-form #signin-email").value;
  const password = document.querySelector(".login-form #signin-password").value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
    })
    .catch((error) => {
      alert("Incorrect email or password!");
    });
});

// LOG OUT

const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
  auth.signOut().then(() => {
    console.log("Signed out");
  });
});
