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
            // code needed here?
        })
}