function loadRepos() {
  // DEFINE WHAT REQUEST DOES
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let pageElement = document.getElementById("res");
        pageElement.innerText = xhr.responseText;
      }

      if (xhr.status !== 200) {
        let pageElement = document.getElementById("res");
        pageElement.innerText = "ERROR FAILED Request";
      }
    }
  };

  // START PROCESS OF CREATING REQUEST
  xhr.open("get", "https://api.github.com/repos/testnakov/test-nakov-repo");

  // SEND REQUEST TO INTERNET!!!
  xhr.send(); // can send body
}
