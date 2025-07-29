/* write functions that defines the action for each event */
function showTip() {
    var sidTip = document.getElementById("sidTip");
    sidTip.style.display = "inline";
}

function hideTip() {
    var sidTip = document.getElementById("sidTip");
    sidTip.style.display = "none";
}

// Functions for password tooltip
function showPwd1Tip() {
    var pwd1Tip = document.getElementById("pwd1Tip");
    pwd1Tip.style.display = "inline";
}

function hidePwd1Tip() {
    var pwd1Tip = document.getElementById("pwd1Tip");
    pwd1Tip.style.display = "none";
}

function init() {
    var sid = document.getElementById("sid");
    sid.onmouseover = showTip;
    sid.onmouseout = hideTip;
    sid.onfocus = showTip;
    sid.onblur = hideTip;

    var pwd1 = document.getElementById("pwd1"); // Get the password input
    pwd1.onmouseover = showPwd1Tip;
    pwd1.onmouseout = hidePwd1Tip;
    pwd1.onfocus = showPwd1Tip;
    pwd1.onblur = hidePwd1Tip;
}

window.onload = init;