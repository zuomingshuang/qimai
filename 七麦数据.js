/*
七麦参数加密
 */

let b = "00000008d78d46a";
let e = +new Date() - 880 - 1515125653845;


function from_CharCode(code) {
    return String.fromCharCode(code)
}

function encrypt_param(a, n) {
    a = a["split"]("")
    for (var t = a["length"], e = n["length"], r = "charCodeAt", i = 0; i < t; i++) {
        a[i] = from_CharCode(a[i][r](0) ^ n[(i + 10) % e][r](0));
    }
    return a["join"]("")
}

function base_encode(s) {
    return Buffer.from(s).toString('base64')
}

function getAnalysis(value_list, url) {
    let m = value_list["sort"]()["join"]("");
    m = base_encode(m);
    m += "@#" + url;
    m += "@#" + e;
    m += "@#" + "1"

    return base_encode(encrypt_param(m, b))
}