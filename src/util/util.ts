const clog = function(...logs) {
    document.getElementById('debug').innerHTML += logs.map(e=> JSON.stringify(e, null, "<br>")).join(' ');
}

const util = {
    clog
}

export default util;