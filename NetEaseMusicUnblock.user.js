// ==UserScript==
// @name 		NetEaseMusicUnblock
// @namespace	http://lilhayah.com/
// @version		0.5
// @description	userscript to remove the location restriction on NetEaseMusic
//				(this is just a test, not to break copyright policies)
// @author		
// @include		http://music.163.com/*
// @grant		none
// ==/UserScript==

document.getElementById('g_iframe').contentWindow.GAbroad = false;
if (GAbroad = true) {
	GAbroad = false
};

var LocationSetting    = document.querySelector("[name='GAbroad']");
LocationSetting.value  = "false";