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

var target0 = document.getElementsByClassName(" market1111")[0];
var target1 = document.getElementsByClassName(" market-tip")[0];
target0.className = "";
target1.className = "";