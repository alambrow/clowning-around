export const gigRequestForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Your Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Your Child's Name</label>
            <input type="text" name="serviceAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyDate">Party Date</label>
            <input type="date" name="partyDate" class="input" />
        </div>
        <div class="field">
        <label class="label" for="address">Party Address</label>
            <input type="number" name="address" class="input" />
        </div>
        <div class="field">
        <label class="label" for="headcount">Party Size (headcount)</label>
            <input type="number" name="headcount" class="input" />
        </div>
        <div class="field">
        <label class="label" for="partyLength">Party Duration (hours)</label>
            <input type="number" name="partyLength" class="input" />
        </div>
        <button class="button" id="submitRequest">Book Me!</button>
    `

    return html
}