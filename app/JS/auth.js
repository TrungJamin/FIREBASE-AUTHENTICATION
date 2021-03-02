// SIGN UP

const signup_btn = document.querySelector("#signup-btn");

signup_btn.addEventListener("click", (e) => {
  const email = document.querySelector(".login-form #signup-email").value;
  const password = document.querySelector(".login-form #signup-password").value;

  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // tai sao o day nen return ?
      db.collection("users").doc(user.uid).set({
        email: email,
      });
    })
    .then(() => {
      alert("Signed up successfully!");
      signup_email.value = "";
      signup_password.value = "";
      location.assign("./../HTML/UserPage/UserInterface.html");
    })
    .catch((err) => {
      alert("Invalid Email");
    });
});
