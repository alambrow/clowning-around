import { ClowningAround } from "./ClowningAround.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    // fetchRequests().then(
    //     () => {
            mainContainer.innerHTML = ClowningAround()
    //     }
    // )
}

render()