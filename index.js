window.onload = (event) => {

    fetch("story.json")
    .then(response =>{
        console.log(response)
        return response.json()
    })
    .then(data =>{
        console.log(data)
        let output = ""
        data.forEach(element => {
            output += 
        `<div class="card-item">
            <h2 class="title"><a href="${element.storyLink}">${element.storyTitle}</a></h2>
            <p class="name">${element.name}</p>
            <div class="links">
                <a href="${element.storyTitle}">Twitter</a>
                <a href="${element.storyTitle}">Linkedn</a>
                <a href="${element.storyTitle}">Facebook</a>
            </div>
        </div>`
        });
        document.getElementById("container").innerHTML = output
    })
    .catch(err => {
        console.log("error")
    })
}