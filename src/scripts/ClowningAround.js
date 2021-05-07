import { gigRequestForm } from "./GigRequestForm.js"
import { gigRequests } from "./Requests.js"


export const ClowningAround = () => {
    return `
        <h1>Clowning Around</h1>
        <h2>Book Me! I'm a clown.</h2>
        <section class="gigRequestForm">
            ${ gigRequestForm() }
        </section>
        <section class="currentRequests">
            ${ gigRequests() }
        </section>
        <section class="pastGigs">
        </section>
    `
}