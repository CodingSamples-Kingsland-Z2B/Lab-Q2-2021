function populateDOM(repos) {
  // Grab list dom element and remove previous values
  let list = document.getElementById("repos");
  list.innerHTML = "";

  // Loop thru list of repos and create link for each
  repos.forEach((repo) => {
    let listItem = document.createElement("li");
    let link = document.createElement("a");
    link.href = repo.html_url;
    link.innerText = repo.name;
    listItem.appendChild(link);
    list.appendChild(listItem);
  });
}

function loadRepos() {
  // Grab Username from HTML Input
  let username = document.getElementById("username").value;
  // Grab list of repos for user from github
  fetch(`https://api.github.com/users/${username}/repos`)
    .then((res) => res.json())
    .then((repos) => populateDOM(repos));
}
