// ==UserScript==
// @name         DouBanned 
// @namespace    http://lilhayah.com/
// @version      0.1
// @description  Modify douban UI, take off that the annoying "1111" bubble.
// @author       Yizzle
// @match        http://*.douban.com/*
// @match        https://*.douban.com/*
// @grant        none
// ==/UserScript==

var target = document.getElementsByClassName(" market1111")[0];
target.className = "";