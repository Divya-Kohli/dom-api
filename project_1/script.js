let section = document.querySelector("section");


fetch("https://api.github.com/users")
    .then(res => {
        res
            .json()
            .then(data => {
                data.map(value => {
                    let { login, avatar_url, html_url } = value;
                    section.innerHTML += `
            <div>
            <img src=${avatar_url} alt=${login} width="200px">
            <h1> ${login} <h1>
                <a href=${html_url} target="_blank">Goto Github Profile</a>
            </div>
            `;
                });
            })
        })
        