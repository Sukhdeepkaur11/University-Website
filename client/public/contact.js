const handlecomment = async (event) => {
  //read all the form information
  event.preventDefault();
  const messageValue = {
    name: document.getElementById("nameInput").value,
    email: document.getElementById("emailInput").value,
    subject: document.getElementById("subjectInput").value,
    message: document.getElementById("messageInput").value,
  };

  console.log("inside contact us");

  console.log(messageValue);

  const messageDataValidated = validateMessage(messageValue);
  console.log(messageDataValidated);
  if (messageDataValidated) {
    // make a request call to our server to save user information
    //async function postData(url = "", data = {}) {
    const response = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //Accept: "application/json",
      },
      body: JSON.stringify({
        name: messageValue.name,
        email: messageValue.email,
        subject: messageValue.subject,
        message: messageValue.message,
      }),
    });
    console.log(response);
    try {
      if (response.status != 200) {
        const responseBody = await response.json();
        console.log(responseBody);
      } else {
        window.alert("Your message sent successfully");
        window.location = "/contact";
      }
    } catch (err) {
      response.status(400).json({
        error: err,
      });
    }
  }
};
const validateMessage = (messageValue) => {
  // confirm nothings empty
  if (!messageValue.email || messageValue.email === "") {
    window.alert("Please provide an email");
    //return false;
  }

  if (messageValue.name === "" && messageValue.name === "") {
    window.alert("Please tell us your name");
    return false;
  }

  // confirm email
  if (!messageValue.email.includes("@")) {
    window.alert("Please provide a valid email");
    return false;
  }

  return true;
};

const messageButton = document.getElementById("submitInput");
messageButton.addEventListener("click", handlecomment);
