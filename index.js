window.onload = (event) => {
    console.log("window loaded")

    fetch("story.json")
    .then(response =>{
        console.log(response)
        return response.json()
    })
    .then(data =>{
        console.log(data)
        let output = "<ul>"
        data.forEach(element => {
            output += `<li>${element.storyLink}</li>`
        });

        output += "</ul>"

        document.getElementById("container").innerHTML = output
    })
}