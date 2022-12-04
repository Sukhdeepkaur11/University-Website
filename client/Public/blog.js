const handleCommentInput = async (event) => {
  //read all the form information
  event.preventDefault();
  const commentValue = {
    name: document.getElementById("nameInput").value,
    email: document.getElementById("emailInput").value,
    comment: document.getElementById("commentInput").value,
  };

  console.log(commentValue);

  const commentDataValidated = validateComment(commentValue);
  console.log(commentDataValidated);
  if (commentDataValidated) {
    // make a request call to our server to save user information
    //async function postData(url = "", data = {}) {
    const response = await fetch("/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //Accept: "application/json",
      },
      body: JSON.stringify({
        name: commentValue.name,
        email: commentValue.email,
        comment: commentValue.comment,
      }),
    });
    console.log(response);
    try {
      if (response.status != 200) {
        const responseBody = await response.json();
        console.log(responseBody);
      } else {
        window.alert("Your message sent successfully");
        window.location = "/blog.html";
      }
    } catch (err) {
      res.status(400).json({
        error: err,
      });
    }
  } //return response.json();
};

const validateComment = (commentValue) => {
  // confirm nothings empty
  if (!commentValue.email || commentValue.email === " ") {
    window.alert("Please provide an email");
    return false;
  }

  if (commentValue.name === "" && commentValue.name === "") {
    window.alert("Please tell us your name");
    return false;
  }

  // confirm email
  if (!commentValue.email.includes("@")) {
    window.alert("Please provide a valid email");
    return false;
  }

  return true;
};

const commentButton = document.getElementById("submitInput");
commentButton.addEventListener("click", handleCommentInput);
