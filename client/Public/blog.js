const handleCommentInput = async (event) => {
  //read all the form information
  event.preventDefault();
  const commentValue = {
    name2: document.getElementById("nameInput").value,
    email2: document.getElementById("emailInput").value,
    comment: document.getElementById("commentInput").value,
  };

  console.log("inside contact us");

  console.log(commentValue);
  window.alert = "Your message sent successfully";
  validateComment(commentValue);

  // make a request call to our server to save user information
  //async function postData(url = "", data = {}) {
  const response = await fetch("/blog", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //Accept: "application/json",
    },
    body: JSON.stringify({
      name2: commentValue.name2,
      email2: commentValue.email2,
      comment: commentValue.comment,
    }),
  });
  console.log(response);
  if (response.status != 200) {
    const responseBody = await response.json();
    console.log(responseBody);
    console.log("not correct");
  }
  //return response.json();
};

const validateComment = (commentValue) => {
  // confirm nothings empty
  if (!commentValue.email2 || commentValue.email2 === "") {
    window.alert("Please provide an email");
    //return false;
  }

  if (commentValue.name2 === "" && commentValue.name2 === "") {
    window.alert("Please tell us your name");
    return false;
  }

  // confirm email
  if (!commentValue.email2.includes("@")) {
    window.alert("Please provide a valid email");
    return false;
  }

  return true;
};

const commentButton = document.getElementById("submitInput");
commentButton.addEventListener("click", handleCommentInput);
