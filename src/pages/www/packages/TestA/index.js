import { TestA } from "./views"

function init() {
    return new TestA({
        target: document.getElementById('u1')
    })
}

export default {
    init
}