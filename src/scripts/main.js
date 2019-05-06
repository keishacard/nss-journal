console.log("main.js")
const baseUrl = "http://localhost:3000"


// walking through base code
submitBtn = () => {
    let endpoint = "journalEntries"

    let submitObj = {
        "concept": "",
        "date": "",
        "entry": "",
        "mood": ""
    }

    submitObj.name = document.querySelector("nameInput").nodeValue

    fetch(`${baseUrl}/${endpoint}`,
        {
            method: POST,
            headers: {
                contentType: "application/json"
            }
        }).then(response => { response.JSON })
        .then(res => console.log(res))
}