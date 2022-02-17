import { TestA } from "./views"

function init() {
    new TestA({
        target: document.getElementById('u1')
    })
}

export default {
    init
}