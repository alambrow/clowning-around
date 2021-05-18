const applicationState = {
    requests: [],
    clowns: [],
    completions: []
}

const API = "http://localhost:8088"

// fetch call for requests database
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

// fetch call for clowns database
export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
    .then(response => response.json())
    .then(
        (clowns) => {
            applicationState.clowns = clowns
        }
    )
}

export const getClowns = () => {
    return [...applicationState.clowns]
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

export const saveCompletion = (completion) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(completion)
    }
    return fetch(`${API}/completions`, fetchOptions)
    .then (response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}


export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
    .then(
        () => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
}