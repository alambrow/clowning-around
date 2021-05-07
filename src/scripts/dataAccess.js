const applicationState = {
    requests: []
}

export const fetchRequests = () => {
    return fetch("http://localhost:8088/requests")
    .then(response => response.json())
    .then(
        (serviceRequests) => {
            applicationState.requests = serviceRequests
        }
    )
}

export const getRequests = () => {
    return [...applicationState.requests]
}