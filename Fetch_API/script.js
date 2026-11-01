/*fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        //console.log(data[1].name);
        data.forEach(function(user){
            let userList = document.querySelector("#userList");
            userList.innerHTML += `<h3><b>${user.name}: </b><i>${user.email}</i></h3>`;
            userlist.appendChild(userlist);
        });
    });
    
//let userlist = document.querySelector("#userList");
//userlist.*/

let userList = document.querySelector("#userList");

fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response) {
         if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        return response.json();
    })
    .then(function(data) {

        data.forEach(function(user) {

            let userCard = document.createElement("div");

            userCard.innerHTML = `
                <h3>${user.name}</h3>
                <p>Email: ${user.email}</p>
                <p>Username: ${user.username}</p>
            `;

            userList.appendChild(userCard);
        });

    })

    .catch(function(error) {

        console.log("Error:", error);

        userList.innerHTML = `
            <p>Failed to load users. Please try again.</p>
        `;
    });