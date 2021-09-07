function updateCommits(commits) {
  let list = document.getElementById("commits");
  list.innerHTML = "";
  commits.forEach((data) => {
    let { author, message } = data.commit;
    console.log(author.name, message);
    let listItem = document.createElement("li");
    listItem.innerText = `${author.name} ${message}`;
    list.appendChild(listItem);
  });
}

async function loadCommits() {
  // Try it with Fetch API

  let username = document.getElementById("username").value;
  let repo = document.getElementById("repo").value;

  let url = `https://api.github.com/repos/${username}/${repo}/commits`;
  try {
    let data = await fetch(url);
    if (data.status === 404) {
      throw Error("404: REPO NOT FOUND");
    }
    let jsonData = await data.json();
    updateCommits(jsonData);
  } catch (err) {
    let list = document.getElementById("commits");
    let newItem = document.createElement("li");
    newItem.innerHTML = `ERROR 404 REPO NOT found!`;
    list.appendChild(newItem);
  }
}
