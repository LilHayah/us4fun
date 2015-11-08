// ==UserScript==
// @name         DouBanned 
// @namespace    http://lilhayah.com/
// @version      0.2
// @description  Modify douban UI, take off that the annoying "1111" bubble.
// @author       Yizzle
// @match        http://*.douban.com/*
// @match        https://*.douban.com/*
// @updateURL    https://github.com/LilHayah/us4fun/raw/master/DouBanned.user.js
// @grant        none
// ==/UserScript==

var target = document.getElementsByClassName(" market1111")[0];
target.className = "";