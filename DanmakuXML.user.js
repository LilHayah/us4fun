// ==UserScript==
// @name         DanmakuXML
// @namespace    http://lilhayah.com/
// @version      0.1
// @description  Download bilibili danmaku xml file
// @author       Yizzle
// @match        http://*.bilibili.com/video/*
// @match        https://*.douban.com/video/*
// @updateURL    https://github.com/LilHayah/us4fun/raw/master/DanmakuXML.user.js
// @grant        none
// ==/UserScript==

// NOT FUNCTIONING NOW

var $,jQuery;
    loading();
    function loading()
    {
    	unsafeWindow.jQuery ? var cid = getCID() : setTimeout(loading, 100);
    	unsafeWindow.jQuery ? var cid = writeCID() : setTimeout(loading, 200);
    }

function getCID(){
	src = document.querySelector('#bofqi object param[name="flashvars"]').getAttribute('value');
    cid = Number(src.match(/cid=(\d+)/)[1]);
	return cid;
}

function writeCID() {
	var parent = document.querySelector('.v-title-info');
	var downloadButton = document.createElement('div');
	downloadButton.className = 'v-title-line';
	downloadButton.innerHTML('<span><a href="'+'http://comment.bilibili.com/{{cid}}.xml'.replace('{{cid}}', cid)+'">XML</a></span>')
	parent.insertBefore(downloadButton,parent.childNodes)[3];
}