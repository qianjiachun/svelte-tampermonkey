import { TestA } from "./views";
import "./styles/index.css";

function init() {
    new TestA({
        target: document.getElementById('u1')
    })
}

export default {
    init
}