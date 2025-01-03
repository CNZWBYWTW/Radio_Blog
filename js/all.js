//////////////////////////////
alert(`此站处于待运行(未正式启用)状态\n\n当前时间: ${new Date().toUTCString().replace(' GMT', '').slice(0, -3).replace(':', '').concat('UTC')}\n预计正式启用时间: 2025-07-01 0000UTC ~ 2025-09-01 2359UTC\n\nPowered by CNZW\nhttps://cnzw.us.kg/\nGitHub@CNZWBYWTW`);
//////////////////////////////



//CNZW FUNCTIONS
function getURL(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

//Convert
//ImageToBase64
function ImageToBase64(url, callback) {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const reader = new FileReader();
            reader.onload = function () {
                callback(reader.result);
            };
            reader.readAsDataURL(blob);
        })
        .catch(error => console.error('Error converting image to base64:', error));
}

//C-P
const wh = 1.2;
var c_,
    p_;

setInterval(function () {
    let whl = innerWidth / innerHeight;
    if (whl < wh) {
        cp = 'p';
        p();
    } else {
        cp = 'c';
        c();
    }
})

function c() {
    if (c_ != 'CNZW') {
        c_ = 'CNZW',
            p_ = '';
        _c();
    }
}
function p() {
    if (p_ != 'CNZW') {
        p_ = 'CNZW',
            c_ = '';
        _p();
    }
}

//
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//LoadCSS
function loadCSS(href) {
    var cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.type = "text/css";
    cssLink.href = href;
    document.getElementsByTagName("head")[0].appendChild(cssLink);
}

//Pi
function getPi(pij) {
    let pi = 0;
    let denominator = 1;
    let sign = 1;
    for (let i = 0; i < pij; i++) {
        pi += sign / denominator;
        denominator += 2;
        sign *= -1;
    }
    return pi * 4;
}
