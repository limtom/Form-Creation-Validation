async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  //Get the data container
  const dataContainer = document.getElementById("api-data");
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to load user data.");
    }
    const users = await response.json();
    //Reset the datacontainer
    dataContainer.innerHTML = "";

    //Create the userlist conntainer
    const userList = document.createElement("ul");

    //Loop through the user array
    users.forEach((user) => {
      //Create a li item
      const list = document.createElement("li");
      //add content to the li
      list.textContent = user.name;
      //Append list the parent
      userList.appendChild(list);
      //Append to the data container
      dataContainer.appendChild(userList);
    });
  } catch (error) {
    dataContainer.innerHTML = "error";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  fetchUserData();
});
