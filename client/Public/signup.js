const handelSignup = async () => {
  //read all the form information
  const formValue = {
    name: document.getElementById("name").value,
    empid: document.getElementById("empId").value,
    email: document.getElementById("emailId").value,
    pass1: document.getElementById("passId").value,
    pass2: document.getElementById("passId2").value,
  };

  console.log("inside signup");
  console.log(formValue);
  //const formDataValidated =
  const formDataValidated = validateSignup(formValue);

  if (formDataValidated) {
    // make a request call to our server to save user information
    async function postData(url = "", data = {}) {
      const response = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //Accept: "application/json",
        },
        body: JSON.stringify({
          password: formValue.pass1,
          name: formValue.name,
          email: formValue.email,
          empid: formValue.empid,
          pass1: formValue.pass1,
          pass2: formValue.pass2,
        }),
      });
      console.log(response);
      if (response.status != 200) {
        const responseBody = await response.json();
        console.log(responseBody);
        console.log("not correct");
      }
      //return response.json();
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
};

const signupButton = document.getElementById("signupBtn");
signupButton.addEventListener("click", handelSignup);

// const emailInput = document.querySelector("#emailId");
// let email = document.getElementById("emailId").value;
// emailInput.addEventListener("focusout", () => {
//   console.log("user done typing");
//   let email = emailInput.value;
//   if (email.includes("@")) {
//     console.log("all good");
//   } else {
//     window.alert("please provide valid email");
//   }
// });
// const passwordInput = document.getElementById("passId");
// let password = document.getElementById("passId").value;
// // passwordInput.addEventListener("keyup", () => {
// //   password = passwordInput.value;
// // });

// const passwordInput2 = document.getElementById("passId2");
// let password2 = document.getElementById("passId2").value;

// const signupButton = document.getElementById("signupBtn");
// signupButton.addEventListener("click", async (event) => {
//   event.preventDefault();
//   let name = nameInput.value;
//   empid = empInput.value;
//   password = passwordInput.value;
//   email = emailInput.value;
//   password2 = passwordInput2.value;
//   console.log("name= " + name);
//   console.log("empid = " + empid);
//   console.log("email = " + email);
//   console.log("password = " + password);
//   console.log("Repeat password = " + password2);
//   const userData = {
//     email: email,
//     password: password,
//   };
//   const response = await postData("/signup", userData);
//   if (response.status == 200) {
//     window.location = "/login.html";
//   }
// });

// validate user input

//         pass1: formValue.pass1,
//         pass2: formValue.pass2,
//         empid: formValue.empid,
//         name: formValue.name,
//         email: formValue.email,
//       }),
//     });
//     console.log(response);
//     if (response.status !== 200) {
//       const responseBody = await response.json();
//       console.log(responseBody);
//       //showError(responseBody.error);
//     } else {
//       window.location = "/";
//     }
//   }
// }
