function init() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            let div = document.getElementById("container");
            json.sort(function(a,b){
                return b.hoursInSpace - a.hoursInSpace;
            });
            div.innerHTML = `<h3>Total number of astronauts: ${json.length}</h3`;
            for (let i = 0; i < json.length; i++) {
                let skills = json[i].skills.join(', ');
                let color = "";
                if (json[i].active) {
                    color = "green";
                } else {
                    color = "red";
                }
                div.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li style="color:${color}">Active: ${json[i].active}</li>
                            <li>Skills: ${skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${json[i].picture}">
                </div>
                `
            }
        });
    });
}

window.onload = init;