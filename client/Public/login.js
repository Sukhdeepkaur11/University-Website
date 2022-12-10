const login = async (event) => {
  event.preventDefault();
  const formData = {
    email: document.getElementById("emailInput1").value,
    password: document.getElementById("passwordInput1").value,
  };
  const response = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: formData.email,
      password: formData.password,
    }),
  });
  console.log(response);

  if (response.status === 200) {
    if (
      response.body.email === "wendy.smiley@umanitoba.ca" &&
      response.body.password === "wendysmiley01"
    ) {
      window.location = "/loginstaff.html";
    } else {
      window.alert("Incorrect login details. Please try again");
      //window.location = "/login.html";
    }
  } else {
    window.alert("Incorrect login details. Please try again");
    //window.location = "/login.html";
  }
};
const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", login);
