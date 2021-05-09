import { sendRequest } from "./dataAccess.js"

export const gigRequestForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Your Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Your Child's Name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyDate">Party Date</label>
            <input type="date" name="partyDate" class="input" />
        </div>
        <div class="field">
        <label class="label" for="partyAddress">Party Address</label>
            <input type="text" name="partyAddress" class="input" />
        </div>
        <div class="field">
        <label class="label" for="headcount">Party Size (headcount)</label>
            <input type="number" name="headcount" class="input" />
        </div>
        <div class="field">
        <label class="label" for="partyLength">Party Duration (hours)</label>
            <input type="number" name="partyLength" class="input" />
        </div>
        <button class="button" id="submitRequest">Book Me!</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        
        // grab user input
        const inputparentName = document.querySelector("input[name='parentName']").value
        const inputchildName = document.querySelector("input[name='childName']").value
        const inputpartyDate = document.querySelector("input[name='partyDate']").value
        const inputpartyAddress = document.querySelector("input[name='partyAddress']").value
        const inputheadcount = document.querySelector("input[name='headcount']").value
        const inputpartyLength = document.querySelector("input[name='partyLength']").value
        
        // turn input into temp object
        const sendDataToAPI = {
            parentName: inputparentName,
            childName: inputchildName,
            partyDate: inputpartyDate,
            partyAddress: inputpartyAddress,
            headcount: inputheadcount,
            partyLength: inputpartyLength
        }
        sendRequest(sendDataToAPI)
    }
})