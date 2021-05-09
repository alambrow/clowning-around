import { getRequests } from "./dataAccess.js"

// Why are commas rendering here? TODO: use join method?
export const gigRequests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map(convertToListElement)
            }
        </ul>
    `

    return html
}

const convertToListElement = (request) => {
    return `
        <li>Gig ${request.id} for <strong>${request.childName}</strong> (parent: ${request.parentName}) is scheduled for
        ${request.partyDate} at the address of ${request.partyAddress} for ${request.partyLength} hour(s) and ${request.headcount} partiers!</li>
    `
}