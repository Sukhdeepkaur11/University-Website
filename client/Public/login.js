const login = async (event) => {
  event.preventDefault();
  const formData = {
    email: document.getElementById("emailInput1").value,
    password: document.getElementById("passwordInput1").value,
  };
  const response = await fetch("/login.html", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  console.log(response);

  if (response.status === 200) {
    window.location = "/loginstaff.html";
  }
};

const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", login);
console.log("inside login");

// const emailInput = document.querySelector("#emailInput1");
// let email = document.getElementById("emailInput1").value;
// emailInput.addEventListener("focusout", () => {
//   console.log("user done typing");
//   let email = emailInput.value;
//   if (email.includes("@")) {
//     console.log("all good");
//   } else {
//     window.alert("please provide valid email");
//   }
// });
// const passwordInput = document.getElementById("passwordInput1");
// let password = document.getElementById("passwordInput1").value;
// // passwordInput.addEventListener("keyup", () => {
// //   password = passwordInput.value;
// // });

// const signInButton = document.getElementById("signInButton");
// signInButton.addEventListener("click", async (event) => {
//   event.preventDefault();
//   password = passwordInput.value;
//   email = emailInput.value;

//   console.log("email = " + email);
//   console.log("password = " + password);

//   const userData = {
//     email: email,
//     password: password,
//   };
//   const response = await postData("/login", userData);
//   const responseData = await response.json();
//   console.log(responseData);
//   if (responseData.loggedIn) {
//     window.location = "/loginstaff.html";
//   } else {
//     window.alert("Invalid login Information");
//   }
// });
// async function postData(url = "", data = {}) {
//   await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(data),
//   });
// }
