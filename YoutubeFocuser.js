// ==UserScript==
// @name         Youtube Focuser
// @namespace    https://matyicsapo.github.io/
// @version      1.0
// @description  Search for what you aim, nothing more!
// @author       matyicsapo
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

function DoFilterYoutubePage() {
    console.log ("YT FOCUSER DoFilterYoutubePage");

    console.log (document.URL);
    const matchHomePage = document.URL.match ("youtube\.com/$");
    const matchShortsPage = document.URL.match ("youtube\.com/shorts*");
;
    let pmHidden = matchHomePage !== null || matchShortsPage !== null ? true : false;
    let pms = document.getElementsByTagName ("ytd-page-manager");
    if (pms.length > 0) {
        let pm = pms[0]
        pm.hidden = pmHidden;
    }

    let rel = document.getElementById ("related");
    if (rel !== null) {
        rel.hidden = "true";
    }
}

(function() {
    'use strict';

    //window.addEventListener("yt-navigate-start", e => { console.log(e.type); });
    window.addEventListener("yt-navigate-finish", e => { DoFilterYoutubePage (); });

    DoFilterYoutubePage ();
})();
