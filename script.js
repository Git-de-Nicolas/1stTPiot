function fetchData() {
    fetch("http://91.121.88.38:3000/api/people")
        .then(response => {
            if (!response.ok) {
                throw Error("Erreur");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const html = data.map(user => {

                for (const dataKey in data) {
                    return `
                <div class="col-md-4">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <div class="user">
                                <p class="card-title"> Nom : ${user.name}</p>
                                <p class="card-text"> Age : ${user.age}</p>
                                 <p class="card-texte"> Voitures : </p>
                                    <ul> 
                                        <li>${user.cars} </li>
                                    </ul>
                             </div>
                        </div>
                    </div>
                 </div>
                    `;
                }
            })
                .join("");
            console.log(html);
            document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
        })
        .catch(error => {
            console.log(error);
        });
}

fetchData();
