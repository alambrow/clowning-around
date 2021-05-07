import { getRequests } from "./dataAccess.js"

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
        <li>Gig ${request.id} for ${request.childName}</li>
    `
}