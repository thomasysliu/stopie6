/*
 * stop-ie6-foxmosa v0.1
 * http://moztw.org/events/stopie6/
 *
 * Licensed under Artistic License/GPL licenses?
 *
 * Author: Irvin
 *
 * Modified from anti-ie6 http://code.google.com/p/anti-ie6/
 *   Licensed under Artistic License/GPL licenses:
 *   http://dev.perl.org/licenses/
 *
 * Modified from ie6-upgrade-warning http://code.google.com/p/ie6-upgrade-warning/
 *   Lisensed under MIT License: http://www.opensource.org/licenses/mit-license.php  
 * 
 */


function loadjscssfile(filename, filetype) {
    if (filetype == "js") { //if filename is a external JavaScript file
        var fileref = document.createElement('script')
        fileref.setAttribute("type", "text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype == "css") { //if filename is an external CSS file
        var fileref = document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref != "undefined") document.getElementsByTagName("head")[0].appendChild(fileref)
}

if(typeof jQuery =='undefined')
{
	loadjscssfile('http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js','js');
}
loadjscssfile('css/jqModal.css','css');


var br1 = "Mozilla Firefox 15+";
var br2 = "Google Chrome 21.0+";
var br3 = "Opera 12+";
var br4 = "Safari 6+";
var br5 = "Internet Explorer 8+";
var url1 = "http://gfx.tw/";
var url2 = "http://www.google.com/chrome";
var url3 = "http://www.opera.com/download/";
var url4 = "http://www.apple.com/safari/download/";
var url5 = "http://www.microsoft.com/windows/Internet-explorer/default.aspx";

function add_dialog()
{
	var $dialog = ['<div class="jqmWindow" id="ie6_warn">',
	'<h2>～不！你上網用的 IE 6 已經過期了～</h2>',
	'<ul>',
	'<li><a href="'+url1+'"><img src="img/browser_firefox35.gif" /></a><p class="intro">'+br1+'</p></li>',
	'</ul>',
	'<p class="intro">您知道您正使用用的 IE 6 瀏覽器已經是八年前的軟體了嗎？<br />用這麼舊的瀏覽器上網，不但可能常常遇到危險、很多網頁也卡卡的喔！</p>',
	'<p class="intro">← 狐耳摩莎推薦您：<br />　&nbsp;不如試試全球好評的 Mozilla Firefox 來上網吧！</p>',
	'<p class="intro" style="clear:both"><br />或者您也可以試試各公司所推出的新世代瀏覽器！</p>',
	'<ul class="clear">',
	'<li><a href="'+url2+'"><img src="img/browser_chrome.gif" /></a><p class="intro">'+br2+'</p></li>',
	'<li><a href="'+url3+'"><img src="img/browser_opera.gif" /></a><p class="intro">'+br3+'</p></li>',
	'<li><a href="'+url4+'"><img src="img/browser_safari.gif" /></a><p class="intro">'+br4+'</p></li>',
	'<li><a href="'+url5+'"><img src="img/browser_ie.gif" /></a><p class="intro">'+br5+'</p></li>',
	'</ul>',
	'</div>'].join('');
	
	$('body').append($dialog);
}

function init()
{
	$(function(){
		add_dialog();
		$('#ie6_warn').jqm({modal:true}).jqmShow();
	});
}

function check_jq_loaded()
{
	if(typeof jQuery != 'undefined')
	{
		loadjscssfile('script/jqModal.js','js');
		clearInterval(jq_intval);
		jqmodal_intval = setInterval('check_jqmodal_loaded()',1000);
	}
}

function check_jqmodal_loaded()
{
	if(typeof $.jqm != 'undefined')
	{
		init();
		clearInterval(jqmodal_intval);
	}
	
}

var jq_intval = setInterval('check_jq_loaded()',1000);
