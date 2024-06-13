document.addEventListener("DOMContentLoaded", function () {

    var words = ["Front End Developer", "Designer", "Back End", "Siswa"];
    var i = 0,
        offset = 0,
        len = words.length,
        forwards = true,
        skip_count = 0,
        skip_delay = 15,
        speed = 90,
        part = '';

    function typingtext() {
        const CWAutoTyping = document.querySelector(".codewheel-auto-typing");
        setInterval(function () {
            if (forwards) {
                if (offset >= words[i].length) {
                    ++skip_count;
                    if (skip_count == skip_delay) {
                        forwards = false;
                        skip_count = 0;
                    }
                }
            } else {
                offset--;
                if (offset == 0) {
                    forwards = true;
                    offset = 0;
                    i = (i + 1) % len;
                }
            }
            part = words[i].substr(0, offset);
            if (skip_count == 0) {
                if (forwards) {
                    offset++;
                }
            }
            CWAutoTyping.textContent = part;
        }, speed);
    }
    typingtext();
});

