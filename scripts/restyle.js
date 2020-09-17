const ColorScheme = {
    BRIGHT: 0,
    DARK: 1
};

function getCookie(keyName) {
    let name = keyName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setStyle() {
    let scheme = getCookie("color-scheme");
    if (scheme === undefined || scheme === "") {
        let currentDate = new Date();
        let hours = currentDate.getHours();
        if (hours > 19 || hours < 8) {
            restyle(ColorScheme.DARK);
        } else {
            restyle(ColorScheme.BRIGHT);
        }
    } else {
        restyle(scheme);
    }
}

function restyle(scheme) {
    //let is_chrome = /chrome/i.test( navigator.userAgent );
    for (let i = 0; i < document.styleSheets.length; i++) {
        document.styleSheets[i].disabled = true;
        //document.styleSheets[i].setAttribute("disabled", "disabled");
    }
    //document.getElementById(scheme + ".css").disabled = false;
    //document.getElementById(scheme + ".css").removeAttribute("disabled");
    document.styleSheets[scheme].disabled = false;
    document.cookie = "color-scheme=" + encodeURIComponent(scheme) + ";Path=/" + ";SameSite=Strict" + ";Secure"
    //    + ";HttpOnly"
    ;
}