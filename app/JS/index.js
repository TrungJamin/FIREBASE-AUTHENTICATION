const signup_email = document.querySelector(".login-form #signup-email");
const signup_password = document.querySelector(".login-form #signup-password");

const signin_email = document.querySelector(".login-form #signin-email");
const signin_password = document.querySelector(".login-form #signin-password");

var table = document.querySelector("#table");
function setUp(data) {
  if (data.length > 0) {
    let html = "";
    data.forEach((doc) => {
      html += `
            <li><a>${doc.data().field} <span class="pull-right">${
        doc.data().number
      }</span></a></li>
      `;
    });
    table.innerHTML = `
        <div class="col-sm-4">
            <!-- Category -->
            <div class="single category">
                <h3 class="side-title">Category</h3>
                <ul class="list-unstyled">
                    ${html}
                </ul>
            </div>
        </div>
    `;
  } else {
    table.innerHTML = "<h1> LOGIN TO VIEW DATA </h1>";
  }
}
