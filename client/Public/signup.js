const handelSignup = async (event) => {
  //read all the form information
  event.preventDefault();
  const formValue = {
    name: document.getElementById("name").value,
    empId: document.getElementById("empId").value,
    email: document.getElementById("emailId").value,
    pass1: document.getElementById("passId").value,
    pass2: document.getElementById("passId2").value,
  };

  console.log("inside signup");
  console.log(formValue);

  //const formDataValidated =
  const formDataValidated = validateSignup(formValue);
  console.log(formDataValidated);
  if (formDataValidated) {
    // make a request call to our server to save user information
    //async function postData(url = "", data = {}) {
    const response = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //Accept: "application/json",
      },
      body: JSON.stringify({
        name: formValue.name,
        empId: formValue.empId,
        email: formValue.email,
        password: formValue.pass1,
      }),
    });
    console.log(response);

    try {
      if (response.status != 200) {
        const responseBody = await response.json();
        console.log(responseBody);
      } else {
        window.location = "/login.html";
      }
    } catch (err) {
      res.status(400).json({
        error: err,
      });
    }
  }
};
const validateSignup = (formValue) => {
  // confirm nothings empty
  if (!formValue.email || formValue.email === "") {
    window.alert("Please provide an email");
    //return false;
  }

  if (!formValue.pass1 || formValue.pass1 === "") {
    window.alert("Please provide a password");
    return false;
  }

  if (!formValue.pass2 || formValue.pass2 === "") {
    window.alert("Please confirm your password");
    return false;
  }

  if (formValue.name === "" && formValue.name === "") {
    window.alert("Please tell us your name");
    return false;
  }

  // confirm email
  if (!formValue.email.includes("@")) {
    window.alert("Please provide a valid email");
    return false;
  }

  // confirm passwords match
  if (formValue.pass1 !== formValue.pass2) {
    window.alert("Please make sure your passwords match");
    return false;
  }

  return true;
};
function resetFunc() {
  document.getElementById("name").value == "";
  document.getElementById("empId").reset();
  document.getElementById("emailId").reset();
  document.getElementById("passId").reset();
  document.getElementById("passId2").reset();
}

const signupButton = document.getElementById("signupBtn");
signupButton.addEventListener("click", handelSignup);
