import { ClowningAround } from "./ClowningAround.js"
import { fetchClowns, fetchRequests } from "./dataAccess.js"

// TODO: still need to set up event listener for select option!
const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests().then(fetchClowns).then(
        () => {
            mainContainer.innerHTML = ClowningAround()
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    CustomEvent => {
        render()
    }
)