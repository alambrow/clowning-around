const applicationState = {
    requests: []
}

const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
    .then(response => response.json())
    .then(
        (serviceRequests) => {
            // stores request in external state
            applicationState.requests = serviceRequests
        }
    )
}

export const getRequests = () => {
    return [...applicationState.requests]
}


// Posts to API and refreshes requests list
const mainContainer = document.querySelector("#container")

export const sendRequest = (gigRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(gigRequest)
    }

    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteReqeust = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
    .then(
        () => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
}