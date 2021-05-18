import { getRequests, getClowns, deleteRequest, saveCompletion } from "./dataAccess.js"

// Why are commas rendering here? TODO: use join method?
export const gigRequests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map(convertToListElement).join("\n")
            }
        </ul>
    `

    return html
}

const convertToListElement = (request) => {
    const clowns = getClowns()
    
    return `
        <li>
        Gig ${request.id} for <strong>${request.childName}</strong> (parent: ${request.parentName}) is scheduled for
        ${request.partyDate} at the address of ${request.partyAddress} for ${request.partyLength} hour(s) and ${request.headcount} partiers!

        <select class="clown" id="clowns">
        <option value="0">Choose a clown</option>
        ${clowns.map(
            clown => {
                return `<option value="${request.id}--${clown.id}">${clown.name}</option>`
            }
        ).join("")}
        </select>
        
        <button class="request__delete" id="request--${request.id}">Deny Request</button>
        </li>
    `
}

// Event listeners for delete event and change event (to send request to completion state)
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

mainContainer.addEventListener(
    "change",
    (event)=> {
        if (event.target.id === "clowns") {
            const [requestId, clownId] = event.target.value.split("--")

            const timestamp = (new Date()).toLocaleDateString('en-US')
            const completion = {
                "requestId": parseInt(requestId),
                "clownId": parseInt(clownId),
                "date_created": timestamp
            }
            saveCompletion(completion)
        }
    }
)