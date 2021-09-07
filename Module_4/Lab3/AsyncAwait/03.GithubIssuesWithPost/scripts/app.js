function addIssue() {
  let title = document.getElementById("title");
  let message = document.getElementById("message");
  let label = document.getElementById("label");

  const body = {
    title: title.value,
    body: message.value,
    label: [label.value],
  };

  fetch(
    "https://api.github.com/repos/testnakov/test-nakov-repo/issues",
    // ALL OF THE INFO ABOUT MY REQUEST
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic Q0pIb3JsZWJlaW46Z2hwX3gzOEt3Y3dPanhtNGFmbzd5TnVsS05jVFFtVUp6TjJZOFVCTQ==", // Some auth token for our account
      },
    }
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
}

// {
//   "title": "I have created an issue",
//   "body": "Minor bug",
//   "labels":["bug", "minor"]
// }
