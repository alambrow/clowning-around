import { ClowningAround } from "./ClowningAround.js"
import { fetchRequests } from "./dataAccess.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = ClowningAround()
        }
    )
}

render()