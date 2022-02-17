import {initPkg} from "./packages"

function beforeInit() {
    // before packages init
}

function init() {
    beforeInit();
    initPkg();
}

export default {
    init
}