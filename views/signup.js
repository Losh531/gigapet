// client-side js, loaded by index.html
// run by the browser each time the page is loaded

console.log("hello world :o");

// define variables that reference elements on our page
const dreamsList = document.getElementById("dreams");
const dreamsForm = document.querySelector("form");

// a helper function that creates a list item for a given dream
function appendNewDream(dream) {
  const newListItem = document.createElement("li");
  newListItem.innerText = dream;
  dreamsList.appendChild(newListItem);
}

// fetch the initial list of dreams

    dreamsForm.addEventListener("submit", async event => {
      // stop our form submission from refreshing the page
      event.preventDefault();

      // get dream value and add it to the list
      let username = dreamsForm.elements.username.value;
    let password = dreamsForm.elements.password.value;
      document.cookie = "username=" + username;
      document.cookie = "password=" + password;
      let response = await fetch("/createuserindb?username=" + username + "?password=" + password);
    if (response.ok) { // if HTTP-status is 200-299
  console.log("created user")
  window.location.assign("/gigaclicker.html")
} else {
  console.log("failed")
}
    });
