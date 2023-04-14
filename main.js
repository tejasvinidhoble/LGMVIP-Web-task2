const getUsersButton = document.getElementById("get-users-btn");
const cardsSection = document.getElementById("cards");

getUsersButton.addEventListener("click", getUsersData);

async function getUsersData() {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();
    const users = data.data;

    renderUsers(users);
}

function renderUsers(users) {
    cardsSection.innerHTML = "";

    users.forEach((user) => {
        const card = `
      <div class="card">
        <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
        <h3>${user.first_name} ${user.last_name}</h3>
        <p>${user.email}</p>
      </div>
    `;
        cardsSection.insertAdjacentHTML("beforeend", card);
    });
}