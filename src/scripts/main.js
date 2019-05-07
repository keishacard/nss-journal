console.log("main.js")
const baseUrl = "http://localhost:3000"
const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", submitJournalEntry);


// walking through base code
submitJournalEntry = () => {

    let endpoint = "journalEntries"

    let submitObj = {
        "concept": "",
        "date": "",
        "entry": "",
        "mood": ""
    }

    let journalDate = document.querySelector("#journalDate");
    let conceptsCovered = document.querySelector("#conceptsCovered");
    let journalEntry = document.querySelector("#journalEntry");
    let moodForTheDay = document.querySelector("#moodForTheDay");


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