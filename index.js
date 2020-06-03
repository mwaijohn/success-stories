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
        `<div class="card mb-3 card-item">
            <h5 class="title"><a href="${element.storyLink}">${element.storyTitle}</a></h5>
            <p class="name">${element.name}</p>
            <div class="links">
                <a href="${element.twitterLink}">Twitter</a>
                <a href="${element.linkdnLink}">Linkedn</a>
                <a href="${element.facebookLink}">Facebook</a>
            </div>
        </div>`
        });
        document.getElementById("container").innerHTML = output
    })
    .catch(err => {
        console.log("error")
    })
}